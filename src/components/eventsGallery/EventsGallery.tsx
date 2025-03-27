import { Box, useMediaQuery } from '@mui/material';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  CustomNextArrow,
  CustomPrevArrow,
} from '../common/react-slick/CustomArrow.tsx';
import { PortFolio } from '../common/portfolio/PortFolio.tsx';
import './EventsGallery.css';
import PortFolioModal from '../common/portfolio/PortFolioModal.tsx';
import { useMemo, useRef, useState } from 'react';
import { client } from '../../api/api.tsx';
import { useQuery } from 'react-query';
import Loading from '../common/Loading/Loading.tsx';
import { styled } from '@mui/material/styles';
import Slider from 'react-slick';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

type Business = {
  portfolioId: number;
  url: string[];
  title: string;
  description: string;
  date: string;
};

function EventsGallery() {
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1024px)');
  const isMobile = useMediaQuery('(min-width: 385px) and (max-width: 767px)');
  const isSmallMobile = useMediaQuery('(max-width: 384px)');
  const sliderRef = useRef<Slider | null>(null); // sliderRef로 슬라이더 컴포넌트를 참조
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0); // 현재 슬라이드 인덱스를 추적
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<Business | null>(null);
  const { data, isLoading } = useQuery<Business[]>(
    'eventData', // query key
    async () => {
      const response = await client.get('/api/v1/portfolio?type=event');
      return response.data; // 데이터를 반환
    },

    {
      onError: (error) => {
        console.error(error);
        alert('에러가 발생했습니다.');
      },
    },
  );

  const handleImageClick = (image: Business) => {
    setCurrentImage(image);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setCurrentImage(null);
  };

  // 도트 클릭 시 해당 슬라이드로 이동
  const handleDotClick = (index: number) => {
    setCurrentSlideIndex(index); // 클릭된 도트의 인덱스 저장
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index); // 해당 슬라이드로 이동
    }
  };

  const settings = useMemo(() => {
    const slideToShow = isMobile || isSmallMobile ? 1 : isTablet ? 4 : 4;
    return {
      dots: false,
      lazyLoad: true,
      infinite: false,
      speed: 500,
      slidesToShow: slideToShow,
      slidesToScroll: slideToShow,
      prevArrow: (
        <CustomPrevArrow onClick={() => sliderRef.current?.slickPrev()} />
      ), // CustomPrevArrow 클릭 시 이전 슬라이드로 이동
      nextArrow: (
        <CustomNextArrow onClick={() => sliderRef.current?.slickNext()} />
      ), // CustomNextArrow 클릭 시 다음 슬라이드로 이동
      accessibility: false,
      afterChange: (current: number) => {
        setCurrentSlideIndex(current); // 슬라이드 변경 시 현재 슬라이드 인덱스 업데이트
      },
    };
  }, [isMobile, isSmallMobile, isTablet]);
  const dotCount = Math.ceil((data?.length || 0) / settings.slidesToShow);

  return (
    <div className={'events'}>
      <PortFolio
        isProfile={false}
        settings={settings}
        currentSlideIndex={currentSlideIndex}
        handleDotClick={handleDotClick}
        sliderRef={sliderRef}
      >
        {data?.map((image, index) => (
          <div key={index} onClick={() => handleImageClick(image)}>
            <div
              className="slide"
              key={index}
              onClick={() => handleImageClick(image)}
            >
              <LazyLoadImage
                className={'events-img'}
                src={image.url[0]}
                alt={image.title}
                style={{ cursor: 'pointer' }}
              />
            </div>
            <h3 style={{ marginTop: '10px', marginBottom: '0px' }}>
              {image.title}
            </h3>
          </div>
        ))}
      </PortFolio>
      {/* 커스텀 도트 */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '20px',
        }}
      >
        {Array.from({ length: dotCount })?.map((_, index) => (
          <CustomDot
            key={index}
            sx={{
              backgroundColor:
                index === Math.floor(currentSlideIndex / settings.slidesToShow)
                  ? '#404040'
                  : '#bfbfbf',
            }}
            onClick={() => handleDotClick(index)} // 도트 클릭 시 해당 슬라이드로 이동
          />
        ))}
      </div>
      <PortFolioModal
        isOpen={isOpen}
        currentImage={currentImage}
        handleClose={handleClose}
      />
      {isLoading && <Loading />}
    </div>
  );
}

export default EventsGallery;
const CustomDot = styled(Box)`
  width: 7px;
  height: 7px;
  margin: 0 5px;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: black;
  }
`;

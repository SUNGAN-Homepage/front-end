import React, { ReactNode, useState } from 'react';
import Slider from 'react-slick';
import { Box, useMediaQuery } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './PortFolio.css';

import image1 from '../../assets/imageP_1.png';
import image2 from '../../assets/imageP_2.jpg';
import image3 from '../../assets/imageP_3.png';
import image4 from '../../assets/imageP_4.jpg';
import image5 from '../../assets/imageP_5.jpg';
import image6 from '../../assets/imageP_6.jpg';
import image7 from '../../assets/imageP_7.jpg';
import image8 from '../../assets/imageP_8.jpg';
import image9 from '../../assets/imageP_9.jpg';
import image10 from '../../assets/imageP_10.jpg';
import PortFolioModal from './PortFolioModal';
import { AnimatedComponent } from '../common/AnimatedComponent.tsx';

const imageData = [
  { src: image1, title: '분홍빛 세상', date: '2024-10-01' },
  { src: image2, title: '바다같은 구름', date: '2024-07-22' },
  { src: image3, title: '은하단 중심', date: '2023-12-10' },
  { src: image4, title: '초록빛 들판', date: '2024-08-01' },
  { src: image5, title: '위대한 모험의 시작', date: '2024-06-30' },
  { src: image6, title: '가을의 중심', date: '2023-12-18' },
  { src: image7, title: '미니어처 세상', date: '2024-12-20' },
  { src: image8, title: '도시의 거울', date: '2024-12-22' },
  { src: image9, title: '유럽 어딘가', date: '2024-12-25' },
  { src: image10, title: '숭례문', date: '2024-09-25' },
];

const CustomPrevArrow = (props: React.ComponentProps<'div'>) => {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow prev-arrow`}
      onClick={onClick}
      id={'PORTFOLIO'}
    >
      &#10094; {/* 왼쪽 화살표 */}
    </div>
  );
};

const CustomNextArrow = (props: React.ComponentProps<'div'>) => {
  const { className, onClick } = props;
  return (
    <div className={`${className} custom-arrow next-arrow`} onClick={onClick}>
      &#10095; {/* 오른쪽 화살표 */}
    </div>
  );
};

export const PortFolio: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<{
    src: string;
    title: string;
    date: string;
  } | null>(null);

  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1024px)');
  const isMobile = useMediaQuery('(min-width: 385px) and (max-width: 767px)');
  const isSmallMobile = useMediaQuery('(max-width: 384px)');
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    centerMode: !(isMobile || isSmallMobile),
    slidesToShow: isMobile || isSmallMobile ? 1 : isTablet ? 3 : 4,
    slidesToScroll: isMobile || isSmallMobile ? 1 : isTablet ? 3 : 4,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    accessibility: false,
    appendDots: (dots: ReactNode) => (
      <Box
        sx={{
          marginLeft: '-20px',
        }}
      >
        <ul style={{ margin: '0px' }}> {dots} </ul>
      </Box>
    ),
  };

  const handleImageClick = (image: {
    src: string;
    title: string;
    date: string;
  }) => {
    setCurrentImage(image);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setCurrentImage(null);
  };

  return (
    <>
      <AnimatedComponent id={'portfolio'}>
        <section className="portfolio">
          <h2 className="portfolio-title">PORTFOLIO</h2>
          <Slider {...settings}>
            {imageData.map((image, index) => (
              <div
                className="slide"
                key={index}
                onClick={() => handleImageClick(image)}
              >
                <img src={image.src} alt={image.title} />
              </div>
            ))}
          </Slider>
        </section>
      </AnimatedComponent>
      {/* 모달 */}
      <PortFolioModal
        isOpen={isOpen}
        currentImage={currentImage}
        handleClose={handleClose}
      />
    </>
  );
};

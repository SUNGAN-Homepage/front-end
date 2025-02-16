import React, { ReactNode, useState } from 'react';
import Slider from 'react-slick';
import { Box, useMediaQuery } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './PortFolio.css';
import PortFolioModal from './PortFolioModal.tsx';
import { AnimatedComponent } from '../AnimatedComponent.tsx';

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
interface ImageType {
  src: string;
  title: string;
  date: string;
}
export const PortFolio = ({
  imageData,
  isProfile,
}: {
  imageData: ImageType[];
  isProfile: boolean;
}) => {
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
          marginLeft: '-40px',
        }}
      >
        <ul style={{ margin: '0px', width: '100%' }}> {dots} </ul>
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
      <AnimatedComponent id={'gallery'}>
        <section className="portfolio">
          <h2 className="portfolio-title">
            {isProfile ? 'Profile Gallery' : 'Events Gallery'}
          </h2>
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

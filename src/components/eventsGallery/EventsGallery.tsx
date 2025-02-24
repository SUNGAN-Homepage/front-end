import { useMediaQuery } from '@mui/material';
import EventsImg1 from '../../assets/EventsImg.jpg';
import EventsImg2 from '../../assets/EventsImg (2).jpg';
import EventsImg3 from '../../assets/EventsImg (3).jpg';
import EventsImg4 from '../../assets/EventsImg (4).jpg';
import EventsImg5 from '../../assets/EventsImg (5).jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  CustomNextArrow,
  CustomPrevArrow,
} from '../common/react-slick/CustomArrow.tsx';
import { PortFolio } from '../common/portfolio/PortFolio.tsx';
import './EventsGallery.css';
import PortFolioModal from '../common/portfolio/PortFolioModal.tsx';
import { useState } from 'react';

const imagesData = [
  { src: EventsImg1, title: '이벤트 이미지1', date: '2024-10-01' },
  { src: EventsImg2, title: '이벤트 이미지2', date: '2024-07-22' },
  { src: EventsImg3, title: '이벤트 이미지3', date: '2023-12-10' },
  { src: EventsImg4, title: '이벤트 이미지4', date: '2024-08-01' },
  { src: EventsImg5, title: '이벤트 이미지5', date: '2024-06-30' },
];

function EventsGallery() {
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1024px)');
  const isMobile = useMediaQuery('(min-width: 385px) and (max-width: 767px)');
  const isSmallMobile = useMediaQuery('(max-width: 384px)');

  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: false,
    speed: 500,
    slidesToShow: isMobile || isSmallMobile ? 1 : isTablet ? 4 : 4,
    slidesToScroll: isMobile || isSmallMobile ? 1 : isTablet ? 4 : 4,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    accessibility: false,
  };

  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<{
    src: string;
    title: string;
    date: string;
  } | null>(null);

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
      <PortFolio imageData={imagesData} isProfile={false} settings={settings}>
        {imagesData.map((image, index) => (
          <div key={index} onClick={() => handleImageClick(image)}>
            <div className="slide">
              <img className={'events-img'} src={image.src} alt={image.title} />
            </div>
            <h3 style={{ marginTop: '10px', marginBottom: '0px' }}>
              {image.title}
            </h3>
          </div>
        ))}
      </PortFolio>
      <PortFolioModal
        isOpen={isOpen}
        currentImage={currentImage}
        handleClose={handleClose}
      />
    </>
  );
}

export default EventsGallery;

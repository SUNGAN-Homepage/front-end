import { ReactNode } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Partner.css';

import logo1 from '../../assets/logo1.png';
import logo2 from '../../assets/logo2.png';
import logo3 from '../../assets/logo3.png';
import logo4 from '../../assets/logo4.png';
import logo5 from '../../assets/logo5.png';
import logo6 from '../../assets/logo6.png';
import logo7 from '../../assets/logo7.png';
import logo8 from '../../assets/logo8.png';
import { Box } from '@mui/material';
import { AnimatedComponent } from '../common/AnimatedComponent.tsx';

const partnerData = [
  { id: 1, name: '파트너 1', logo: logo1, url: 'https://www.naver.com' },
  { id: 2, name: '파트너 2', logo: logo2, url: 'https://www.daum.net' },
  { id: 3, name: '파트너 3', logo: logo3, url: 'https://www.instagram.com' },
  { id: 4, name: '파트너 4', logo: logo4, url: 'https://google.com' },
  { id: 5, name: '파트너 5', logo: logo5, url: 'https://www.naver.com' },
  { id: 6, name: '파트너 6', logo: logo6, url: 'https://www.naver.com' },
  { id: 7, name: '파트너 7', logo: logo7, url: 'https://www.naver.com' },
  { id: 8, name: '파트너 8', logo: logo8, url: 'https://www.naver.com' },
];

function Partner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    rows: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          rows: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          rows: 1,
        },
      },
    ],
    appendDots: (dots: ReactNode) => (
      <Box
        sx={{
          borderRadius: '10px',
          marginTop: { xs: -35, sm: '40px' },
          marginLeft: '-20px',
        }}
      >
        <ul style={{ margin: '0px' }}> {dots} </ul>
      </Box>
    ),
  };

  return (
    <AnimatedComponent id={'partner'}>
      <section className="partner">
        <h2 className="partner-title">PARTNER</h2>
        <Slider {...settings}>
          {partnerData.map((partner) => (
            <div className="partner-item" key={partner.id}>
              <a
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(partner.url, '_blank', 'width=1200,height=800');
                }}
              >
                <img src={partner.logo} alt={partner.name} />
              </a>
            </div>
          ))}
        </Slider>
      </section>
    </AnimatedComponent>
  );
}
export default Partner;

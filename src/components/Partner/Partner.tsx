import React from 'react';
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

export const partnerData = [
  { id: 1, name: '파트너 1', logo: logo1 },
  { id: 2, name: '파트너 2', logo: logo2 },
  { id: 3, name: '파트너 3', logo: logo3 },
  { id: 4, name: '파트너 4', logo: logo4 },
  { id: 5, name: '파트너 5', logo: logo5 },
  { id: 6, name: '파트너 6', logo: logo6 },
  { id: 7, name: '파트너 7', logo: logo7 },
  { id: 8, name: '파트너 8', logo: logo8 },
];

export const Partner: React.FC = () => {
const settings = {
  dots: true, // 하단 네비게이션 점
  infinite: true, // 무한 반복
  speed: 500, // 슬라이드 전환 속도
  slidesToShow: 4, // 기본값: 한 줄에 4개씩
  slidesToScroll: 4, // 한 번에 4개씩 스크롤
  rows: 2, // 2줄
  responsive: [
    {
      breakpoint: 1024, // 테블릿
      settings: {
        slidesToShow: 4, // 4열
        slidesToScroll: 4, // 4개씩 스크롤
        rows: 2, // 2줄
      },
    },
    {
      breakpoint: 768, // 모바일
      settings: {
        slidesToShow: 3, // 3열
        slidesToScroll: 3, // 3개씩 스크롤
        rows: 3, // 3줄
      },
    },
  ],
};

  return (
    <section className="partner">
      <h2 className="partner-title">PARTNER</h2>
      <Slider {...settings}>
        {partnerData.map((partner) => (
          <div className="partner-item" key={partner.id}>
            <img src={partner.logo} alt={partner.name} />
          </div>
        ))}
      </Slider>
    </section>
  );
};
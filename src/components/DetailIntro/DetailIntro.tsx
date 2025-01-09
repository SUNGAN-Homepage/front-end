import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './DetailIntro.css';
import companyImage1 from '../../assets/PHOTOFRAME.png';

export const DetailIntro: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return(
    // 기업 소개 컴포넌트
    <section className="detail-intro">
      <Slider {...settings}>
      <div className="slide">
      <div className="slide-content">
          <div className="image-wrapper">
              <img src= {companyImage1} alt="소개 이미지 1" />
            </div>
            <h2>순간 스튜디오</h2>
          <p>
            안녕하세요 순간 스튜디오입니다.
          </p>
        </div>
      </div>
      <div className="slide">
      <div className="slide-content">
          <div className="image-wrapper">
              <img src= {companyImage1} alt="소개 이미지 1" />
            </div>
            <h2>순간 스튜디오2</h2>
          <p>
            안녕하세요 순간 스튜디오입니다.
          </p>
        </div>
      </div>
      <div className="slide">
      <div className="slide-content">
          <div className="image-wrapper">
              <img src= {companyImage1} alt="소개 이미지 1" />
            </div>
            <h2>순간 스튜디오3</h2>
          <p>
            안녕하세요 순간 스튜디오입니다.
          </p>
        </div>
      </div>
      </Slider>
    </section>
  );
};
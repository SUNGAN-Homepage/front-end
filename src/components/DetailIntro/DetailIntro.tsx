import React, { ReactNode } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './DetailIntro.css';
import image1 from '../../assets/image1.jpg'; // 첫 번째 이미지 경로
import image2 from '../../assets/image2.jpeg';
import Slider from 'react-slick'; // 두 번째 이미지 경로
import { Box } from '@mui/material';

export const DetailIntro: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    appendDots: (dots: ReactNode) => (
      <Box
        sx={{
          borderRadius: '10px',
          marginLeft: { xs: '-20px', sm: 'none' },
          marginTop: '30px',
        }}
      >
        <ul style={{ margin: '0px' }}> {dots} </ul>
      </Box>
    ),
  };

  return (
    <section
      className="detail-intro"
      style={{ overflow: 'hidden' }}
      id={'INFO'}
    >
      <Slider {...settings}>
        {/* 슬라이드 1 */}
        <div className="slide-content">
          <div className="polaroid-wrapper">
            <div className="polaroid ">
              <img src={image1} alt="소개 이미지 1" />
            </div>
            <div className="polaroid rotated">
              <img src={image2} alt="소개 이미지 2" />
            </div>
          </div>
          <div className="text-content">
            <h2>순간, 스튜디오</h2>
            <p>
              저희 <strong>순간, 스튜디오</strong>는 고객에게 최고의 순간을
              제공합니다.
              <br />
            </p>
          </div>
        </div>

        {/* 슬라이드 2 */}
        <div className="slide-content">
          <div className="polaroid-wrapper">
            <div className="polaroid">
              <img src={image2} alt="소개 이미지 3" />
            </div>
            <div className="polaroid rotated">
              <img src={image1} alt="소개 이미지 4" />
            </div>
          </div>
          <div className="text-content">
            <h2>우리의 동아리</h2>
            <p>저희는 경상대학교 사진동아리입니다.</p>
          </div>
        </div>
      </Slider>
    </section>
  );
};

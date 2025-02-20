import { ReactNode } from 'react';
import Slider from 'react-slick'; // 두 번째 이미지 경로
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './DetailIntro.css';
import image1 from '../../assets/image1.jpg'; // 첫 번째 이미지 경로
import image2 from '../../assets/image2.jpeg';
import { Box } from '@mui/material';
import { AnimatedComponent } from '../common/AnimatedComponent.tsx';

function DetailIntro() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    appendDots: (dots: ReactNode) => (
      <Box sx={{ marginLeft: '-20px' }}>
        <ul> {dots} </ul>
      </Box>
    ),
  };

  return (
    <AnimatedComponent id={'info'}>
      <section className="detail-intro" style={{ overflow: 'hidden' }}>
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
                <strong>순간, 스튜디오</strong>는 경남 진주시 대신로 365 지하
                1층에 위치해 있습니다. 증명사진, 여권사진, 프로필 촬영을
                전문으로 하며, 지역 축제 및 기업과 단체의 행사 촬영도 함께
                진행하고 있습니다.
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
    </AnimatedComponent>
  );
}

export default DetailIntro;

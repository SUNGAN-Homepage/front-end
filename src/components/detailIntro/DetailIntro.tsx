import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './DetailIntro.css';
import DetailIntro1 from '../../assets/DetailIntro1.webp';
import DetailIntro2 from '../../assets/DetailIntro2.webp';
import DetailIntro3 from '../../assets/DetailIntro3.webp';
import DetailIntro4 from '../../assets/DetailIntro4.webp';

import { AnimatedComponent } from '../common/AnimatedComponent.tsx';
import React, { useEffect, useRef, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function DetailIntro() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [DetailIntro2, DetailIntro1, DetailIntro3, DetailIntro4];
  const nodeRefs = useRef(images.map(() => React.createRef<HTMLDivElement>()));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <AnimatedComponent id={'info'}>
      <section className="detail-intro" style={{ overflow: 'hidden' }}>
        <div className="slide-content">
          <div className="polaroid-wrapper">
            <TransitionGroup>
              <CSSTransition
                nodeRef={nodeRefs.current[currentImage]} // 변경된 ref 사용
                key={currentImage}
                timeout={1000}
                classNames="slide-up"
              >
                <div ref={nodeRefs.current[currentImage]} className="polaroid">
                  <img src={images[currentImage]} alt="소개 이미지" />
                </div>
              </CSSTransition>
            </TransitionGroup>
            <div className="polaroid rotated">
              <img
                src={images[(currentImage + 1) % images.length]}
                alt="소개 이미지"
              />
            </div>
          </div>
          <div className="text-content">
            <h2>순간, 스튜디오</h2>
            <p>
              <strong>순간, 스튜디오</strong>는 경남 진주시 대신로 365 지하
              1층에 위치해 있습니다. 증명사진, 여권사진, 프로필 촬영을 전문으로
              하며, 지역 축제 및 기업과 단체의 행사 촬영도 함께 진행하고
              있습니다.
            </p>
          </div>
        </div>
      </section>
    </AnimatedComponent>
  );
}

export default DetailIntro;

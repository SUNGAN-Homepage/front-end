import { ReactNode } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './PortFolio.css';
import { AnimatedComponent } from '../AnimatedComponent.tsx';

interface ImageType {
  src: string;
  title: string;
  date: string;
}
export const PortFolio = ({
  isProfile,
  settings,
  children,
}: {
  imageData: ImageType[];
  isProfile: boolean;
  settings: object;
  children: ReactNode;
}) => {
  return (
    <>
      <AnimatedComponent id={'gallery'}>
        <section className={isProfile ? 'profile' : 'events'}>
          <h2 className="portfolio-title">
            {isProfile ? 'Profile Gallery' : 'Events Gallery'}
          </h2>
          <Slider {...settings}>{children}</Slider>
        </section>
      </AnimatedComponent>
    </>
  );
};

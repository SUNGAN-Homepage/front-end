import { useState } from 'react';
import { PortFolio } from '../common/portfolio/PortFolio.tsx';
import EventsImg1 from '../../assets/EventsImg.jpg';
import EventsImg2 from '../../assets/EventsImg (2).jpg';
import EventsImg3 from '../../assets/EventsImg (3).jpg';
import EventsImg4 from '../../assets/EventsImg (4).jpg';
import EventsImg5 from '../../assets/EventsImg (5).jpg';

const imagesData = [
  { src: EventsImg1, title: '이벤트 이미지1', date: '2024-10-01' },
  { src: EventsImg2, title: '이벤트 이미지2', date: '2024-07-22' },
  { src: EventsImg3, title: '이벤트 이미지3', date: '2023-12-10' },
  { src: EventsImg4, title: '이벤트 이미지4', date: '2024-08-01' },
  { src: EventsImg5, title: '이벤트 이미지5', date: '2024-06-30' },
];

function EventsGallary() {
  const [imageData] = useState(imagesData);

  return (
    <>
      <PortFolio imageData={imageData} isProfile={false} />
    </>
  );
}

export default EventsGallary;

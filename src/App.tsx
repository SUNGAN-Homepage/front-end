import Header from './components/Header.tsx';
import './index.css';

import DetailIntro from './components/detailIntro/DetailIntro.tsx';
import Partner from './components/partner/Partner.tsx';
import Contact from './components/Contact/Contact.tsx';
import Footer from './components/Footer.tsx';
import { Box, Divider } from '@mui/material';
import ProfileGallery from './components/profileGallery/ProfileGallery.tsx';
import EventsGallery from './components/eventsGallery/EventsGallery.tsx';
import Intro from './components/intro/Intro.tsx';

function App() {
  return (
    <>
      {/*메뉴 부분*/}
      <Header />
      {/*간략 소개*/}
      <Box sx={{ maxWidth: '1280px', margin: '0 auto' }}>
        <Intro />
        <Divider
          sx={{
            borderColor: 'gray',
            borderWidth: '0.1px',
            marginY: '50px', // 위쪽 마진 4px, 아래쪽 마진 12px, 좌우 마진 auto
            marginX: '20px',
          }}
        />
        {/*기업 소개 */}
        <DetailIntro />
        <Divider
          sx={{
            borderColor: 'gray',
            borderWidth: '0.1px',
            marginY: '50px', // 위쪽 마진 4px, 아래쪽 마진 12px, 좌우 마진 auto
            marginX: '20px',
          }}
        />
        {/*파트너 회사들*/}
        <Partner />
        <Divider
          sx={{
            borderColor: 'gray',
            borderWidth: '0.1px',
            marginY: '50px', // 위쪽 마진 4px, 아래쪽 마진 12px, 좌우 마진 auto
            marginX: '20px',
          }}
        />
        {/*포트폴리오*/}
        <EventsGallery />
        <Divider
          sx={{
            borderColor: 'gray',
            borderWidth: '0.1px',
            marginY: '50px', // 위쪽 마진 4px, 아래쪽 마진 12px, 좌우 마진 auto
            marginX: '20px',
          }}
        />
        <ProfileGallery />
        <Divider
          sx={{
            borderColor: 'gray',
            borderWidth: '0.1px',
            marginY: '50px', // 위쪽 마진 4px, 아래쪽 마진 12px, 좌우 마진 auto
            marginX: '20px',
          }}
        />
        {/*컨택*/}
        <Contact />
      </Box>
      {/*하단 부분*/}
      <Footer />
    </>
  );
}

export default App;

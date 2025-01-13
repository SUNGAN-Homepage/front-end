import Header from './components/Header.tsx';
import './index.css';
import { Intro } from './components/Intro/Intro.tsx';
import { DetailIntro } from './components/DetailIntro/DetailIntro.tsx';
import { PortFolio } from './components/PortFolio/PortFolio.tsx';
import { Partner } from './components/Partner/Partner.tsx';
import { Contact } from './components/Contact/Contact.tsx';
import { Footer } from './components/Footer.tsx';
import { Box, Divider } from '@mui/material';
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
        <PortFolio />
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
        <Divider
          sx={{
            borderColor: 'gray',
            borderWidth: '0.1px',
            marginY: '50px', // 위쪽 마진 4px, 아래쪽 마진 12px, 좌우 마진 auto
            marginX: '20px',
          }}
        />
      </Box>
      {/*하단 부분*/}
      <Footer />
    </>
  );
}

export default App;

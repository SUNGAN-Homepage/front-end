import Header from './components/Header.tsx';
import './index.css';
import { Intro } from './components/Intro/Intro.tsx';
import { DetailIntro } from './components/DetailIntro/DetailIntro.tsx';
import { PortFolio } from './components/PortFolio/PortFolio.tsx';
import { Partner } from './components/Partner/Partner.tsx';
import { Contact } from './components/Contact/Contact.tsx';
import { Footer } from './components/Footer.tsx';
import { Box } from '@mui/material';
function App() {
  return (
    <>
      {/*메뉴 부분*/}
      <Header />
      {/*간략 소개*/}
      <Box sx={{ maxWidth: '1280px', margin: '0 auto' }}>
        <Intro />
        {/*기업 소개 */}
        <DetailIntro />
        {/*파트너 회사들*/}
        <Partner />
        {/*포트폴리오*/}
        <PortFolio />
        {/*컨택*/}
        <Contact />
      </Box>
      {/*하단 부분*/}
      <Footer />
    </>
  );
}

export default App;

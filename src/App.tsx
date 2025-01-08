import Header from './components/Header.tsx';
import './index.css';
import { Intro } from './components/Intro/Intro.tsx';
import { DetailIntro } from './components/DetailIntro/DetailIntro.tsx';
import { PortFolio } from './components/PortFolio/PortFolio.tsx';
import { Partner } from './components/Partner/Partner.tsx';
import { Contact } from './components/Contact/Contact.tsx';
import { Footer } from './components/Footer.tsx';
function App() {
  return (
    <>
      <Header />
      <Intro />
      <DetailIntro />
      <Partner />
      <PortFolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

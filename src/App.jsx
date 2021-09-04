import { Reset } from 'styled-reset';
import { GlobalStyle } from './styles/global';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Header from './components/Header';
import News from './components/News';

function App() {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <Header />
      <Hero />
      <News />
      <Footer />
    </>
  );
}

export default App;

import { Reset } from 'styled-reset';
import { GlobalStyle } from './styles/global';
import Footer from './components/Footer';
import Hero from './components/Hero';

function App() {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <Hero />
      <Footer />
    </>
  );
}

export default App;

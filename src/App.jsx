import { Reset } from 'styled-reset';
import { GlobalStyle } from './styles/global';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Header from './components/Header';
import News from './components/News';
import Products from './components/Products';

function App() {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <Header />
      <Hero />
      <News />
      <Products />
      <Footer />
    </>
  );
}

export default App;

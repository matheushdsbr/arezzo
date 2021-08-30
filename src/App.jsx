import { Reset } from 'styled-reset';
import { GlobalStyle } from './styles/global';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <Footer />
    </>
  );
}

export default App;

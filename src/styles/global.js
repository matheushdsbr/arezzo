import { createGlobalStyle } from 'styled-components';
import { fontFamilies } from '../tokens';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${fontFamilies.primary};
  }
`;

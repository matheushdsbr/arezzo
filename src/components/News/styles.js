import styled from 'styled-components';
import { fontSizes } from '../../tokens';

export const Container = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  max-width: 1120px;
  margin: 0 auto;
  margin-bottom: 30px;
  text-align: center;

  h3 {
    text-transform: uppercase;
    margin-bottom: 20px;
    font-size: ${fontSizes.large}px;
    font-weight: 400;
  }

  p {
    text-align: center;
    font-size: ${fontSizes.small}px;
  }
`;

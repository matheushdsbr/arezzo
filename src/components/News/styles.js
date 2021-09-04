import styled from 'styled-components';
import { media } from '../../tokens';

export const Container = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;
  margin-bottom: 100px;
  text-align: center;

  ${media.lg} {
  }

  h3 {
    text-transform: uppercase;
    margin-bottom: 20px;
    font-size: 18px;
    font-weight: 400;
  }

  p {
    text-align: center;
    font-size: 14px;
  }
`;

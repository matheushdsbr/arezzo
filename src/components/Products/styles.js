import styled from 'styled-components';
import { media } from '../../tokens';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding-left: 15px;
  padding-right: 15px;

  ${media.lg} {
    padding: 0;
    margin: 0 auto;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    gap: 10px;
  }

  ${media.xl} {
    width: 1200px;
  }
`;

export const Product = styled.div`
  text-align: center;

  img {
    width: 100%;
    margin-bottom: 6px;
  }

  p {
    margin-bottom: 8px;
  }

  strong {
    font-weight: 700;
  }

  ${media.lg} {
    width: 200px;
  }
`;

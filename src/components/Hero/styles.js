import styled from 'styled-components';
import { media } from '../../tokens';
import Banner1 from '../../assets/banner1.jpg';

export const Container = styled.div``;

export const BannerOne = styled.div`
  background-image: url(${Banner1});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right 20% bottom;
  max-width: 1440px;
  height: 575px;

  ${media.lg} {
    max-width: 100%;
    background-size: cover;
    background-position: center;
  }

  ${media.xxl} {
    height: 766px;
  }

  ${media.xxxl} {
    height: 920px;
  }
`;

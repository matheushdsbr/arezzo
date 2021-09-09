import styled from 'styled-components';
import { media, colors } from '../../tokens';
import Banner1 from '../../assets/banner1.jpg';
import Banner2 from '../../assets/banner2.jpg';
import Banner3 from '../../assets/banner3.jpg';

export const Container = styled.div`
  margin-top: 78px;
  margin-bottom: 100px;

  .splide__pagination {
    bottom: -30px;

    &__page {
      background: ${colors.dotsCarrousel.dots};

      &.is-active {
        background: ${colors.dotsCarrousel.active};
      }
    }
  }
`;

export const BannerOne = styled.div`
  background-image: ${({ banner }) =>
    banner === 1
      ? `url(${Banner1})`
      : banner === 2
      ? `url(${Banner2})`
      : `url(${Banner3})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: ${({ banner }) =>
    banner === 1
      ? `right 20% bottom`
      : banner === 2
      ? `left 20% bottom`
      : `right 12% bottom`};
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

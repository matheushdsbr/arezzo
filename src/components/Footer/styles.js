import styled from 'styled-components';
import { colors, media, fontSizes } from '../../tokens';

export const Container = styled.footer`
  ${media.lg} {
    display: flex;
  }
`;

export const ContainerContent = styled.div`
  background: ${colors.footer.dark};
  display: flex;
  flex-direction: column;
  gap: 30px;
  text-align: center;
  padding: 30px 20px;

  ${media.lg} {
    padding: 40px 50px;
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
    flex: 7;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  h3 {
    color: white;
    font-size: ${fontSizes.small}px;
    font-weight: 500;
    text-transform: uppercase;
  }

  ul {
    li {
      margin-bottom: 4px;

      a {
        color: ${colors.footer.text};
        font-size: ${fontSizes.small}px;
        text-decoration: none;

        &:hover {
          color: white;
        }
      }
    }
  }
`;

export const ContainerMedias = styled.div`
  align-items: center;
  background: ${colors.footer.light};
  display: flex;
  flex-direction: column;
  padding: 30px 20px;

  ${media.lg} {
    padding: 40px 50px;
    flex: 3;
  }

  h2 {
    color: white;
    font-size: ${fontSizes.xxxlarge}px;
    margin-bottom: 35px;
    text-transform: uppercase;
  }
`;

export const SocialMedias = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  p {
    color: white;
    font-size: ${fontSizes.small}px;
    font-weight: 500;
    margin-bottom: 10px;
    text-transform: uppercase;
  }

  div {
    display: flex;
    gap: 10px;
  }
`;

export const SocialMedia = styled.div`
  align-items: center;
  background: ${colors.footer.socialmedia};
  display: flex;
  height: 30px;
  justify-content: center;
  width: 30px;

  svg {
    fill: white;
  }
`;

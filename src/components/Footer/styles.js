import styled from 'styled-components';
import { colors } from '../../tokens';

export const Container = styled.footer``;

export const ContainerContent = styled.div`
  background: ${colors.footer.dark};
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 25px 30px;
  text-align: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  h3 {
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    text-transform: uppercase;
  }

  ul {
    li {
      margin-bottom: 4px;

      a {
        color: ${colors.footer.text};
        font-size: 14px;
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
  padding: 25px 30px;

  h2 {
    color: white;
    font-size: 40px;
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
    font-size: 14px;
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
  background: #323232;
  display: flex;
  height: 30px;
  justify-content: center;
  width: 30px;

  svg {
    fill: white;
  }
`;

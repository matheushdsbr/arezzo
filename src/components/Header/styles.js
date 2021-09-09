import styled from 'styled-components';
import { media, fontSizes } from '../../tokens';

export const Container = styled.header`
  background: white;
  box-shadow: 0px 10px 13px -4px rgb(0 0 0 / 20%);
  display: flex;
  left: 0;
  padding: 20px 30px;
  position: fixed;
  right: 0;
  top: 0;

  ${media.lg} {
    align-items: center;
    justify-content: space-between;
  }
`;

export const Menu = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: space-between;

  button {
    background: transparent;
    border: none;
    display: block;
    outline: none;

    svg {
      animation: menu 0.5s;
    }

    ${media.lg} {
      display: none;
    }
  }

  @keyframes menu {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  ${media.lg} {
    gap: 25px;
    justify-content: start;

    button {
      display: none;
    }
  }
`;

export const Logo = styled.div`
  img {
    height: 35px;
  }
`;

export const NavMenu = styled.nav`
  background: white;
  border-radius: 10px 0 0 10px;
  bottom: 0;
  height: calc(100% - 78px);
  position: fixed;
  right: 0;
  transform: ${({ showMenu }) =>
    showMenu ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s;
  width: 210px;

  ul {
    display: flex;
    flex-direction: column;
    gap: 25px;
    padding: 40px 50px 50px 16px;

    li {
      a {
        color: black;
        font-size: ${fontSizes.small}px;
        text-decoration: none;
        text-transform: uppercase;

        &:hover {
          color: black;
        }
      }

      &:last-child {
        a {
          color: red;
        }
      }
    }
  }

  ${media.lg} {
    flex: 1;
    position: static;
    transform: translateX(0);

    ul {
      flex-direction: row;
      padding: 0;
    }
  }
`;

export const Options = styled.div`
  display: none;

  ${media.lg} {
    display: flex;
    gap: 25px;
  }
`;

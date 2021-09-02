import { useState } from 'react';
import { Container, Menu, Logo, NavMenu, Options } from './styles';
import LogoImg from '../../assets/logo.jpg';
import { ReactComponent as MenuOpen } from '../../assets/svg/menu-open.svg';
import { ReactComponent as MenuClose } from '../../assets/svg/menu-close.svg';
import { ReactComponent as Chat } from '../../assets/svg/chat.svg';
import { ReactComponent as Perfil } from '../../assets/svg/perfil.svg';
import { ReactComponent as Cart } from '../../assets/svg/cart.svg';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Container>
      <Menu>
        <Logo>
          <img src={LogoImg} alt="Logo Arezzo" />
        </Logo>

        <button type="button" onClick={() => setShowMenu(!showMenu)}>
          {showMenu ? <MenuClose /> : <MenuOpen />}
        </button>

        <NavMenu showMenu={showMenu}>
          <ul>
            <li>
              <a href="#">Nova Coleção</a>
            </li>
            <li>
              <a href="#">Sapatos</a>
            </li>
            <li>
              <a href="#">Tênis</a>
            </li>
            <li>
              <a href="#">Bolsas</a>
            </li>
            <li>
              <a href="#">Arrezzo Home</a>
            </li>
            <li>
              <a href="#">Promoção</a>
            </li>
          </ul>
        </NavMenu>
      </Menu>

      <Options>
        <Chat />
        <Perfil />
        <Cart />
      </Options>
    </Container>
  );
};
export default Header;

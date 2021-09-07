import {
  Container,
  ContainerContent,
  Content,
  ContainerMedias,
  SocialMedias,
  SocialMedia,
} from './styles';
import { ReactComponent as LogoFacebook } from '../../assets/svg/facebook.svg';
import { ReactComponent as LogoInstagram } from '../../assets/svg/instagram.svg';
import { ReactComponent as LogoTwitter } from '../../assets/svg/twitter.svg';
import { ReactComponent as LogoPinterest } from '../../assets/svg/pinterest.svg';

const Footer = () => (
  <Container>
    <ContainerContent>
      <Content>
        <h3>Institucional</h3>

        <ul>
          <li>
            <a href="#">Sobre a marca</a>
          </li>
          <li>
            <a href="#">RI Arezzo&Co</a>
          </li>
          <li>
            <a href="#">Relatório Anual Arezzo&Co</a>
          </li>
          <li>
            <a href="#">Trabalhe conosco</a>
          </li>
          <li>
            <a href="#">Venda Corporativa</a>
          </li>
          <li>
            <a href="#">Cartão Presente</a>
          </li>
        </ul>
      </Content>

      <Content>
        <h3>Franquias</h3>

        <ul>
          <li>
            <a href="#">Franquias</a>
          </li>
          <li>
            <a href="#">Multimarcas</a>
          </li>
          <li>
            <a href="#">Plano de negócio</a>
          </li>
        </ul>
      </Content>

      <Content>
        <h3>Ajuda e Suporte</h3>

        <ul>
          <li>
            <a href="#">Central de atendimento</a>
          </li>
          <li>
            <a href="#">Cadastro</a>
          </li>
          <li>
            <a href="#">Entrega</a>
          </li>
          <li>
            <a href="#">Meus Pedidos</a>
          </li>
          <li>
            <a href="#">Troca e Devoluções</a>
          </li>
        </ul>
      </Content>

      <Content>
        <h3>Privacidade e Termos</h3>

        <ul>
          <li>
            <a href="#">Política de privacidade</a>
          </li>
          <li>
            <a href="#">Termos de uso</a>
          </li>
        </ul>
      </Content>

      <Content>
        <h3>Cartão presente</h3>
      </Content>
    </ContainerContent>

    <ContainerMedias>
      <h2>Arezzo</h2>

      <SocialMedias>
        <p>Arezzo nas redes sociais</p>

        <div>
          <SocialMedia>
            <LogoFacebook />
          </SocialMedia>

          <SocialMedia>
            <LogoTwitter />
          </SocialMedia>

          <SocialMedia>
            <LogoInstagram />
          </SocialMedia>

          <SocialMedia>
            <LogoPinterest />
          </SocialMedia>
        </div>
      </SocialMedias>
    </ContainerMedias>
  </Container>
);

export default Footer;

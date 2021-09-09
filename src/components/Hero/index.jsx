import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Container, BannerOne } from './styles';

const Hero = () => (
  <Container>
    <Splide
      options={{
        autoplay: true,
        interval: 5000,
        pauseOnHover: false,
        arrows: false,
        rewind: true,
      }}
    >
      <SplideSlide>
        <BannerOne banner={1} />
      </SplideSlide>

      <SplideSlide>
        <BannerOne banner={2} />
      </SplideSlide>

      <SplideSlide>
        <BannerOne banner={3} />
      </SplideSlide>
    </Splide>
  </Container>
);

export default Hero;

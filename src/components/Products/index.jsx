import { Product, Container } from './styles';
import { products } from '../../api/products';

const Products = () => (
  <Container>
    {products.map((item) => (
      <Product key={item.name}>
        <img
          src="https://secure-static.arezzo.com.br/medias/sys_master/arezzo/arezzo/h3d/hdf/h00/h00/9622502703134/1167900010006U-01-BASEIMAGE-Lores.jpg"
          alt=""
        />
        <p>{item.name}</p>
        <strong>R${item.price}</strong>
      </Product>
    ))}
  </Container>
);

export default Products;

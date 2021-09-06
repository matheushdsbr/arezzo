import { useState } from 'react';
import { Product, Container, PageNumbers } from './styles';
import { products } from '../../api/products';

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(20);
  const [pageNumberLimit] = useState(4);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(4);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  const pages = [];
  for (let i = 1; i <= Math.ceil(products.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  const handleNextButton = () => {
    setCurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevButton = () => {
    setCurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  return (
    <>
      <Container>
        {currentItems.map((item) => (
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

      <PageNumbers>
        <ul>
          <li
            onClick={handlePrevButton}
            className={currentPage === pages[0] ? 'hide' : undefined}
          >
            <button type="button">&lt;</button>
          </li>

          {pages.map(
            (number) =>
              number < maxPageNumberLimit + 1 &&
              number > minPageNumberLimit && (
                <li
                  key={number}
                  id={number}
                  onClick={handleClick}
                  className={currentPage === number ? 'active' : undefined}
                >
                  {number}
                </li>
              ),
          )}

          <li
            onClick={handleNextButton}
            className={
              currentPage === pages[pages.length - 1] ? 'hide' : undefined
            }
          >
            <button type="button">&gt;</button>
          </li>
        </ul>
      </PageNumbers>
    </>
  );
};

export default Products;

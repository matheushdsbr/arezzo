import { useState, useEffect } from 'react';
import {
  Product,
  Content,
  Container,
  PageNumbers,
  SelectFilter,
} from './styles';
import { products } from '../../api/products';

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(20);
  const [pageNumberLimit] = useState(4);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(4);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const [currentItems, setCurrentItems] = useState(
    products.slice(indexOfFirstItem, indexOfLastItem),
  );

  useEffect(() => {
    setCurrentItems(products.slice(indexOfFirstItem, indexOfLastItem));
    document.querySelector('select').value = 'default';
  }, [indexOfFirstItem, indexOfLastItem]);

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  const pages = [];
  for (let i = 1; i <= Math.ceil(products.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const renderItems = currentItems.map((item) => (
    <Product key={item.name}>
      <img
        src="https://secure-static.arezzo.com.br/medias/sys_master/arezzo/arezzo/h3d/hdf/h00/h00/9622502703134/1167900010006U-01-BASEIMAGE-Lores.jpg"
        alt="Sapato"
      />
      <p>{item.name}</p>
      <strong>R${item.price}</strong>
    </Product>
  ));

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

  const handleSortUpString = () => {
    setCurrentItems(
      [...currentItems].sort((a, b) => {
        if (a.name < b.name) return -1;

        return 1;
      }),
    );
  };

  const handleSortDownString = () => {
    setCurrentItems(
      [...currentItems].sort((a, b) => {
        if (a.name > b.name) return -1;

        return 1;
      }),
    );
  };

  const handleSortUpNumber = () => {
    setCurrentItems(
      [...currentItems].sort((a, b) => {
        if (a.price < b.price) return -1;

        return 1;
      }),
    );
  };

  const handleSortDownNumber = () => {
    setCurrentItems(
      [...currentItems].sort((a, b) => {
        if (a.price > b.price) return -1;

        return 1;
      }),
    );
  };

  const handleSelect = (event) => {
    const { value } = event.target;

    if (value === 'DN') handleSortDownNumber();
    if (value === 'UN') handleSortUpNumber();
    if (value === 'US') handleSortUpString();
    if (value === 'DS') handleSortDownString();
  };

  return (
    <Container>
      <SelectFilter>
        <select onChange={(e) => handleSelect(e)}>
          <option defaultValue hidden value="default">
            Mais recentes
          </option>
          <option value="DN">Maior valor</option>
          <option value="UN">Menor valor</option>
          <option value="US">Ordem crescente</option>
          <option value="DS">Ordem decrescente</option>
        </select>
      </SelectFilter>

      <Content>{renderItems}</Content>

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
    </Container>
  );
};

export default Products;

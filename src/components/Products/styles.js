import styled from 'styled-components';
import { media } from '../../tokens';

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 150px;

  ${media.lg} {
    padding: 0;
    margin: 0 auto;
    margin-bottom: 150px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    gap: 30px;
  }
`;

export const Product = styled.div`
  text-align: center;

  img {
    width: 100%;
    margin-bottom: 6px;
  }

  p {
    margin-bottom: 8px;
  }

  strong {
    font-weight: 700;
  }

  ${media.lg} {
    width: 200px;
    height: 280px;
  }
`;

export const PageNumbers = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 100px;

  ul {
    display: flex;
    gap: 5px;

    li {
      color: #000;
      background: #fff;
      border: 2px solid #e9e9e9;
      padding: 14px 16px;
      font-weight: 500;
      cursor: pointer;

      &:hover {
        color: #fff;
        background: #000;

        button {
          color: #fff;
        }
      }

      button {
        background: none;
        border: none;
        cursor: pointer;
        font-weight: 700;
      }
    }

    li.active {
      color: #fff;
      background: #000;
      border: 2px solid #000;
    }

    li.hide {
      display: none;
    }
  }
`;

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
`;

export const SelectFilter = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 50px;

  select {
    padding: 10px 15px;
  }
`;

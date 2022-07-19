/** @format */

import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  padding: 20px;
  .cart_cards {
    /* background: var(--background-light); */
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.03);
    display: flex;
    height: 100px;
    justify-content: space-between;
    align-items: baseline;
    .product,
    .quantity,
    .edit {
      display: flex;
      height: 100%;
    }
    .product {
      flex-direction: row;
      align-items: center;
      flex-basis: 50%;

      img {
        width: 40px;
        margin-right: 10px;
      }
      .text {
        h5,
        p {
          text-align: left;
          font-weight: 500;
          font-size: 12px;
        }
        p {
          font-size: 12px;
          color: var(--text-dark-color);
          font-weight: 600;
        }
      }
    }
  }
  .quanity {
    display: flex;
    /* flex-direction: column; */
    min-width: 70px;
    justify-content: space-between;
    .button {
      width: 20px;
      height: 20px;
      border-radius: 5px;
      display: flex;
      text-align: center;
      font-size: 14px;
      line-height: 20px;
      background: var(--icons-pink-color);
      justify-content: center;
      align-items: center;
      cursor: pointer;
      color: #fff;
    }
    p {
      font-size: 12px;
    }
  }
  .edit {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: right;
    .button {
      color: var(--text-dark-color);
      cursor: pointer;
      font-size: 18px;
    }
  }
  .cart_cards:last-child {
    border: none;
  }
`;

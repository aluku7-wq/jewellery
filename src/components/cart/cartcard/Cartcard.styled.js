/** @format */

import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  padding: 0 20px;

  .cart_cards {
    /* background: var(--background-light); */
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.03);
    display: flex;
    justify-content: space-between;

    .product,
    .quantity,
    .edit {
      display: flex;
      height: 100%;
      align-self: center;
    }
    .product {
      flex-direction: row;
      align-items: center;
      flex-basis: 50%;
      height: 100px;
      .image_container {
        width: 40px;
        margin-right: 10px;

        img {
          width: 100%;
          border: 1px solid rgba(0, 0, 0, 0.02);
        }
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
  .quantity {
    display: flex;
    max-width: 100px;
    width: 70px;
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
  @media screen and (max-width: 900px) {
    .cart_cards {
      height: auto;
      .quantity {
        flex-direction: column-reverse;
        justify-content: space-between;
        align-items: center;
        padding: 0;
        height: 90px;
      }
    }
  }
  @media screen and (max-width: 767px) {
    .cart_cards {
      .product {
        width: 50%;
        flex-direction: column;
        align-items: flex-start;
        .image_container {
          background-color: aliceblue;
          margin: 0;
          img {
            float: left;
            margin: auto;
            width: 100%;
          }
        }
        .text {
          width: 100%;
          h5,
          p {
            /* font-size: 10px; */
          }
        }
      }
    }
  }
`;

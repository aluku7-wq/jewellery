/** @format */

import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: var(--poppins);
  color: var(--text-light-color);
  min-height: 100vh;
  .empty_cart {
    padding-top: 50px;
    p {
      margin-bottom: 40px;
      font-weight: 700;
    }
    a {
      background-color: var(--icons-pink-color);
      color: #fff;
      width: 100;
      height: 20px;
      padding: 5px 20px;
      font-size: 14px;
      font-weight: 500;
      border-radius: 15px;
    }
  }
  .body {
    display: flex;
    width: 100%;
    margin-top: 50px;
    justify-content: space-between;
    .cart {
      display: flex;
      flex-direction: column;
      width: 63%;
      height: 350px;
      overflow-y: scroll;
    }
    .checkout {
      background: var(--background-light);
      width: 32%;
      border-radius: 5px;
      height: 350px;
      display: flex;
      flex-direction: column;
      .checkout_container {
        margin-top: 40px;
        min-height: 200px;
        width: 100%;
        .total_card {
          display: flex;
          width: 100%;
          padding: 0 20px;
          p:first-child {
            flex-basis: 60%;
            text-align: left;
          }
        }
        .total_card:last-child {
          padding-top: 20px;
          font-weight: 700;
          p:last-child {
            border-top: 1px solid rgba(0, 0, 0, 0.25);
            margin-top: 30px;
            width: 30%;
            text-align: left;
          }
        }
      }
      button {
        background: var(--icons-pink-color);
        border-radius: 5px;
        width: 60%;
      }
    }
  }
  .footer {
    margin-top: auto;
  }
`;

/** @format */

import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: var(--poppins);
  color: var(--text-light-color);
  min-height: 100vh;
  .top {
    margin-bottom: 50px;
  }
  .empty_cart {
    padding-top: 100px;
    margin-bottom: 80px;
    p {
      margin-bottom: 40px;
      font-weight: 700;
    }
    a {
      button {
        background-color: var(--icons-pink-color);
        color: #fff;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
      }
    }
  }
  .body {
    display: flex;
    width: 100%;
    padding: 100px 20px;
    justify-content: space-between;
    .cart {
      width: 80%;
      max-height: 400px;
      overflow-y: scroll;
      margin: auto;
      margin-top: 0;
    }
    .checkout {
      background: var(--background-light);
      width: 32%;
      border-radius: 5px;
      min-height: 350px;
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
  @media screen and (max-width: 767px) {
    .body {
      flex-direction: column;
      .cart {
        width: 100%;
      }
      .checkout {
        width: 100%;
        margin-top: 40px;
        min-height: 100px;
        padding: 20px 0;
      }
    }
  }
`;

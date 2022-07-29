/** @format */

import styled from "styled-components";
export const Container = styled.div`
  .navbar {
    display: flex;
    font-family: var(--poppins);
    font-size: 13px;
    font-weight: 500;
    background: var(--icons-pink-color);
    display: flex;
    justify-content: center;
    gap: 10vw;
    align-items: center;
    min-height: 45px;
    padding: 0 20px;
    position: fixed;
    width: 100%;
    z-index: 1;
  }
  .menu {
    color: #fff;
    font-size: 26px;
    display: none;
  }
  a {
    color: #fff;
  }

  img {
    width: 18px;
  }
  .icons {
    color: #fff;
    font-size: 20px;
    margin-bottom: -8px;
  }
  .bag {
    display: flex;
  }
  a {
    .cart_total {
      grid-area: one;
      background-color: #fff;
      color: var(--icons-pink-color);
      font-weight: 700;
      font-size: 10px;
      height: 18px;
      width: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      margin-left: -8px;
    }
  }
  @media screen and (max-width: 640px) {
    .navbar {
      justify-content: space-between;
      .menu {
        display: flex;
      }
      .quick_links {
        display: none;
      }
    }
  }
`;

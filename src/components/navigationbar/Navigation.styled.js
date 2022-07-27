/** @format */

import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: var(--poppins);
  font-size: 13px;
  font-weight: 500;
  a {
    color: #fff;
  }
  /* small screen styling */
  .small_screen {
    background: var(--icons-pink-color);
    display: none;
    min-height: 45px;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;

    .menu {
      display: flex;
      width: 18px;
      height: 11px;
      justify-content: space-between;
      flex-direction: column;
      cursor: pointer;

      .bar1,
      .bar2 {
        background-color: #fff;
        width: 100%;
        height: 2px;
      }
    }
    img {
      width: 18px;
      margin-bottom: -3px;
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
  }
  /* large screen styling */
  .large_screen {
    background: var(--icons-pink-color);
    display: flex;
    justify-content: center;
    gap: 10vw;
    align-items: center;
    min-height: 45px;
    padding: 0 20px;

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
  }

  /* search and drop_down screen  styling*/
  .dropdown {
    width: 100%;
    margin: auto;
    height: 45px;
    background: var(--icons-pink-color);
  }
  @media screen and (max-width: 640px) {
    flex-direction: column;
    .small_screen {
      display: flex;
    }
    .large_screen {
      display: none;
    }
    .dropdown {
      width: 100%;
      margin: auto;
      background-color: transparent;
    }
  }
`;

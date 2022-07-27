/** @format */

import styled from "styled-components";
export const Container = styled.div`
  width: 100vw;
  background-color: var(--icons-pink-color);
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;

  .form {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    background-color: rgba(254, 254, 254, 0.2);
    padding: 0 10px;
    border-radius: 5px;
    .search,
    .close {
      color: #fff;
      font-size: 20px;
    }
    input {
      background-color: transparent;
      border: none;
      height: 30px;
      outline: none;
      font-weight: 700;
      font-size: 16px;
      color: #fff;
      text-align: left;
    }
    input::placeholder {
      color: rgba(254, 254, 254, 0.5);
      font-weight: 700;
      font-size: 16px;
      padding-left: 10px;
    }
  }
  @media screen and (max-width: 640px) {
    width: 90vw;
    input {
      width: 70%;
    }
  }
`;

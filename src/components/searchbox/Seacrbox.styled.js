/** @format */

import styled from "styled-components";
export const Container = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #fff;
  padding-top: 30px;
  background: rgba(0, 0, 0, 0.5);
  overflow-y: scroll;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;

  .body {
    width: 70%;
    background-color: #fff;
    max-height: 70vh;
    overflow-y: scroll;
    min-height: 150px;
    display: flex;
    flex-direction: column;

    .input_container {
      min-height: 100px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      max-height: auto;
      /* position: fixed; */
      background-color: #fff;
      width: 100%;

      .close_btn {
        text-align: right;
        padding: 20px 40px 0;
        width: 100%;
      }
      input {
        text-align: left;
        padding: 0 20px;
        border: none;
        outline: none;
        background-color: rgba(0, 0, 0, 0.05);
        height: 30px;
        border-radius: 5px;
      }
    }
    .dropdown_container {
      width: 100%;
      padding-top: 50px;
      font-family: var(--poppins);
      font-size: 14px;
      color: var(--text-light-color);
      display: flex;
      flex-direction: column;
      margin: 0;
      .card {
        margin: 0;
        height: 100px;
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 80%;
        gap: 20px;
        padding: 20px;

        img {
          width: 10%;
        }
        p {
          text-align: left;
        }
      }
    }
  }
`;

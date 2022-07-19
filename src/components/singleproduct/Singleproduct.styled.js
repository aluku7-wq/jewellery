/** @format */

import styled from "styled-components";
export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100%;

  .body {
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    padding-top: 50px;
  }
  .main_page {
    display: flex;
    .image_container {
      display: flex;
      flex-direction: column;
      width: 50%;
      padding-left: 20px;
      .main_image {
        width: 100%;
        text-align: left;
        img {
          width: 70%;
          border: 0.5px solid rgba(0, 0, 0, 0.05);
        }
      }
      .image_tabs {
        display: flex;
        gap: 10px;
        width: 70%;
        overflow-x: scroll;
        /* margin: auto; */
        img {
          width: 40px;
          border: 0.5px solid rgba(0, 0, 0, 0.05);
          border-radius: 5px;
          opacity: 0.5;
        }
      }
    }
    .text {
      padding-top: 100px;
      font-family: var(--poppins);
      color: var(--text-light-color);
      text-align: left;
      h3,
      p {
        text-align: left;
      }
      h3 {
        color: var(--text-dark-color);
        margin-bottom: 40px;
      }
      button {
        background: var(--icons-pink-color);
        margin-top: 30px;
        cursor: pointer;
      }
    }
  }
  .related {
    width: 100%;
    max-width: 1200px;
    margin: auto;
    padding: 20px;
    font-family: var(--poppins);
  }
  footer {
    margin-top: auto;
  }
`;

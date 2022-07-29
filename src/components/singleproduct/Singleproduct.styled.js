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
    padding-top: 100px;
  }
  .main_page {
    display: flex;
    align-items: center;
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
        margin-bottom: 30px;
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
    font-family: var(--poppins);
  }
  footer {
    margin-top: auto;
  }
  @media screen and (max-width: 890px) {
    .body {
      .main_page {
        justify-content: space-between;
        .image_container {
          width: 60%;
          .main_image {
            img {
              width: 100%;
            }
          }
        }
        .text {
          padding-left: 20px;
          h3,
          p {
            max-width: 80%;
          }
        }
      }
    }
  }
  @media screen and (max-width: 810px) {
    .body {
      .main_page {
        justify-content: space-between;
        flex-direction: column;
        .image_container {
          width: 100%;
          padding: 0;
          .main_image {
            img {
              width: 100%;
            }
          }
          .image_tabs {
            margin: auto;
            justify-content: center;
          }
        }
        .text {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 0;
          text-align: center;
          padding-bottom: 40px;
          margin-top: 40px;
          h3,
          p {
            max-width: 100%;
            text-align: center;
            margin: 0;
            padding: 0;
          }
        }
      }
    }
  }
`;

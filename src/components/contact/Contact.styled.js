/** @format */

import styled from "styled-components";
export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: var(--poppins);
  .body {
    padding: 100px 0;
    width: 100%;
    display: flex;
    align-items: center;
    margin: auto;
    justify-content: center;
    gap: 80px;
    .contact_details {
      display: flex;
      flex-direction: column;
      .section {
        display: flex;
        align-items: center;
        margin-bottom: 30px;
        p {
          font-size: 12px;
          text-align: left;
          margin-left: 20px;
        }
        p:nth-child(1) {
          text-transform: uppercase;
          font-weight: 700;
        }
      }
    }
    .message {
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      background: var(--background-light);
      width: 350px;
      padding: 30px 0;

      h3 {
        text-transform: uppercase;
        margin-bottom: 30px;
        color: var(--icons-pink-color);
      }
      input,
      textarea {
        width: 80%;
        margin: auto;
        margin-bottom: 30px;
        text-align: left;
        padding: 20px 20px 20px 0;
        border: none;
        outline: none;
        background-color: transparent;
        border-bottom: 1px solid rgba(0, 0, 0, 0.03);
      }
    }

    input::placeholder {
      color: rgba(0, 0, 0, 0.3);
      text-transform: capitalize;
    }
    textarea {
      min-height: 60px;
    }
    textarea::placeholder {
      color: rgba(0, 0, 0, 0.3);
      text-transform: capitalize;
    }
    button {
      background: var(--icons-pink-color);
      width: 80%;
    }
  }
  .footer {
    margin-top: auto;
  }

  @media screen and (max-width: 760px) {
    .body {
      flex-direction: column;
      gap: 40px;
      .message {
        width: 70%;
      }
    }
  }
  @media screen and (max-width: 480px) {
    .body {
      .message {
        width: 90%;
      }
    }
  }
`;

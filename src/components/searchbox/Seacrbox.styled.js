/** @format */

import styled from "styled-components";
export const Container = styled.div`
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.25);

  .input_container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 45px;
    background-color: transparent;
    color: #fff;
    .icon {
      font-size: 20px;
    }
    .close_btn {
      text-align: right;
      font-size: 22px;
    }
    input {
      text-align: left;
      padding: 0 20px;
      border: none;
      outline: none;
      background-color: transparent;
      height: 30px;
      border-radius: 5px;
      align-self: center;
      color: #fff;
      font-weight: 600;
      font-size: 17px;
    }
    input::placeholder {
      color: rgba(254, 254, 254, 0.8);
      font-size: 17px;
      font-weight: 600;
    }
  }
  .dropdown_container {
    font-family: var(--poppins);
    font-size: 14px;
    color: var(--text-light-color);
    display: flex;
    flex-direction: column;
    margin: 0;

    .container {
      background-color: #fff;
      width: 40%;
      margin: auto;
      margin-top: 0;
      overflow: scroll;
      padding: 20px;
      max-height: 50vh;
      border-bottom: 20px solid #fff;
      border-radius: 0 0 20px 20px;
      .quick_links {
        display: flex;
        flex-direction: column;

        a {
          color: black;
          text-align: left;
          padding: 0 20px;
          margin: 10px 0;
          p {
            text-align: left;
          }
        }
        a:hover {
          background-color: var(--background-light);
        }
      }
      h3 {
        text-align: left;
        margin-bottom: 20px;
      }
      .search_card {
        height: 40px;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 20px;
        margin-bottom: 20px;
        padding: 0 20px;
        color: #000;

        img {
          width: 30px;
          border: 1px solid rgba(0, 0, 0, 0.05);
        }
        p {
          text-align: left;
          font-size: 12px;
        }
      }
      .search_card:hover {
        background-color: var(--background-light);
      }
    }
  }
  @media screen and (max-width: 640px) {
    background: var(--icons-pink-color);
    .input_container {
      background: rgba(254, 254, 254, 0.2);
      border-radius: 5px;
      width: auto;
      margin: 0 10px;
      padding: 0 20px;
      justify-content: left;
      .icon {
        margin-bottom: -3px;
      }
      input {
        font-size: 14px;
      }
      input::placeholder {
        font-size: 14px;
      }
      .close_btn {
        display: none;
      }
    }
    .dropdown_container {
      top: 90px;
      background: var(--icons-pink-color);
      .container {
        width: 100%;
        min-height: 100vh;
        background: var(--icons-pink-color);
        .quick_links {
          display: flex;
          flex-direction: column;

          a {
            color: #fff;
            text-align: left;
            padding: 0 20px;
            margin: 10px 0;
          }
          a:hover {
            background-color: rgba(254, 254, 254, 0.2);
          }
        }
        h3 {
          text-align: left;
          color: #fff;
        }
        .search_card {
          margin: 0;
          height: 40px;
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 20px;
          padding: 0 20px;
          color: #fff;

          img {
            width: 30px;
            border: 1px solid rgba(0, 0, 0, 0.05);
          }
          p {
            text-align: left;
            font-size: 12px;
          }
        }
        .search_card:hover {
          background-color: rgba(254, 254, 254, 0.2);
        }
      }
    }
  }
`;

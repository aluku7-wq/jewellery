/** @format */

import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  min-height: 10vh;
  background: rgba(0, 0, 0, 0.5);
  flex-direction: column;
  align-items: center;
  /* padding-top: 200px; */
  .drop_container {
    background-color: #fff;
    width: 400px;
    height: 350px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    overflow: scroll;
    border-bottom: 10px solid #fff;

    .quick_links {
      font-family: var(--poppins);
      padding-top: 50px;
      h3 {
        width: 90%;
        text-align: left;
        margin: auto;
        margin-bottom: 40px;
      }
      p {
        text-align: left;
        width: 80%;
        margin: auto;
        font-size: 14px;
        margin-bottom: 20px;
        /* height: 35px; */
        padding: 5px 20px;
        display: flex;
        align-items: center;
      }
      p:hover {
        background-color: rgba(0, 0, 0, 0.05);
      }
    }
    .search {
      font-family: var(--poppins);
      padding-top: 50px;

      h3 {
        width: 90%;
        text-align: left;
        margin: auto;
        margin-bottom: 30px;
      }
      .search_card {
        width: 80%;
        display: flex;
        align-items: center;
        font-size: 12px;
        margin: auto;
        margin-bottom: 10px;
        padding: 5px 10px;

        img {
          width: 30px;
          margin: 0 10px;
        }
      }
      .search_card:hover {
        background-color: rgba(0, 0, 0, 0.05);
      }
    }
  }

  @media screen and (max-width: 640px) {
    background: var(--icons-pink-color);
    padding-top: 40px;
    .drop_container {
      width: 100%;
      min-height: 100vh;
      background-color: transparent;
      color: #fff;
      a {
        color: #fff;
      }
    }
  }
`;

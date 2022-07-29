/** @format */

import styled from "styled-components";
export const Container = styled.div`
  .list {
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    .card {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      /* box-shadow: rgba(0, 0, 0, 0.02) 0px 0px 0px 1px; */
      .image_container {
        width: 50%;
        text-align: left;
        img {
          width: 100%;
          max-width: 300px;
          margin: auto;
        }
      }
      .text {
        width: 50%;
        p {
          text-align: left;
        }
        p:nth-child(2) {
          font-weight: 700;
        }
      }
    }
  }
  @media screen and (max-width: 860px) {
    .list {
      .image_container {
        width: 30%;
      }
      .text {
        width: 70%;
        font-size: 14px;
      }
    }
  }
`;

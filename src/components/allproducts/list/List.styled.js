/** @format */

import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  .card {
    width: 100%;
    display: flex;
    flex-direction: row;
    padding-right: 200px;
    align-items: center;
    justify-content: space-between;
    /* padding: 20px; */
    box-shadow: rgba(0, 0, 0, 0.02) 0px 0px 0px 1px;
    img {
      width: 300px;
      margin: 0;
    }
    .text {
      p {
        text-align: left;
      }
    }
  }
`;

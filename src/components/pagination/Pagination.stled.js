/** @format */

import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  width: 350px;
  margin: auto;
  align-items: center;
  justify-content: space-between;

  .buttons {
    width: 50px;
    .button {
      background: var(--background-light);
      width: 25px;
      height: 25px;
      line-height: 25px;
      border-radius: 50%;
      color: var(--icons-pink-color);
    }
  }
  .page_container {
    margin-top: -8px;
    width: 150px;

    .buttons {
      display: flex;
      gap: 20px;
      background: var(--background-light);
      padding: 0 5px;
      border-radius: 20px;
      justify-content: space-between;
      width: 100%;

      .page {
        align-items: center;
        display: flex;
        height: 25px;

        p {
          width: 20px;
          height: 20px;
          line-height: 20px;
          border-radius: 50%;
          font-size: 14px;
          color: var(--icons-pink-color);
        }
      }
    }
  }
`;

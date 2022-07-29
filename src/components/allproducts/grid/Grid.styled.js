/** @format */

import styled from "styled-components";
export const Container = styled.div`
  .grid {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    padding: 20px;
    .card {
      margin-bottom: 20px;
      p:nth-child(3) {
        font-weight: 700;
      }
    }
  }
  @media screen and (max-width: 600px) {
    .grid {
      grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
      font-size: 14px;
    }
  }
  @media screen and (max-width: 450px) {
    .grid {
      grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    }
  }
`;

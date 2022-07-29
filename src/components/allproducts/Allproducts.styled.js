/** @format */

import styled from "styled-components";
export const Container = styled.div`
  .allproducts {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    font-family: var(--poppins);

    .header {
      display: flex;
      width: 100%;
      flex-direction: column;
      padding-top: 45px;
      .page_heading {
        background-color: var(--background-light);

        .inner_container {
          display: flex;
          flex-direction: column;
          text-align: left;
          max-width: 1200px;
          margin: auto;
          padding: 40px 0;
          h3,
          p {
            text-align: left;
            color: var(--text-dark-color);
            font-family: var(--poppins);
            margin-left: 20px;
            width: 120px;
          }
        }
      }
    }
    .inner_navigation {
      max-width: 1200px;
      margin: auto;
      padding: 20px;
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding-top: 50px;
      .layout {
        width: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .grid {
          font-size: 18px;
        }
      }
    }
    .body {
      width: 100%;
    }
    .footer_pagination {
      margin-top: auto;
    }
  }
`;

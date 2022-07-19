/** @format */

import styled from "styled-components";
export const Container = styled.div`
  background-color: var(--background-light);
  display: grid;
  font-family: var(--poppins);
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 3fr 1fr;
  margin-top: 40px;
  padding: 40px 0;
  align-items: center;

  h4 {
    font-size: 14px;
  }
  .section {
    display: flex;
    flex-direction: column;
    a {
      color: var(--text-light-color);
    }
  }
  .two {
    text-align: left;
    .log_container {
      a {
        width: 100px;
        margin: auto;

        .logo {
          font-size: 16px;
        }
      }
    }
    h4 {
      margin: 10px 0;
    }
    .contact {
      a {
        display: flex;
        margin-left: 30%;
        align-items: center;
        line-height: 35px;

        p {
          font-size: 14px;
          font-family: var(--poppins);
          color: var(--text-light-color);
          margin-left: 20px;
        }
      }
    }
  }
  .three {
    a {
      color: var(--text-light-color);
    }
  }
  .four {
    padding-top: 30px;
    margin: auto;
    display: flew;
    height: 40px;
    align-items: center;
    font-family: var(--poppins);
    grid-column: 1/4;
    color: var(--text-dark-color);
    p {
      margin: 0 10px;
      font-size: 14px;
    }
  }
`;

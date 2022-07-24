/** @format */

import styled from "styled-components";
export const Container = styled.div`
  background-color: var(--background-light);
  display: flex;
  font-family: var(--poppins);
  flex-wrap: wrap;
  padding: 40px 0;
  align-items: center;
  justify-content: space-around;

  h4 {
    font-size: 14px;
  }
  .section {
    flex-basis: 33.3%;
    display: flex;
    flex-direction: column;
    a {
      color: var(--text-light-color);
    }
  }
  .two {
    text-align: left;
    max-width: 250px;
    h4 {
      margin: 10px 0;
    }

    a {
      display: flex;
      align-items: center;
      line-height: 35px;
      /* justify-content: space-between; */

      p {
        font-size: 14px;
        font-family: var(--poppins);
        color: var(--text-light-color);
        margin-left: 20px;
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
    display: flex;
    height: 40px;
    flex-direction: row;
    align-items: center;
    font-family: var(--aclonica);
    grid-column: 1/4;
    color: var(--text-dark-color);
    opacity: 0.4;
    justify-content: center;
    font-size: 12px;
    .copyrigt {
      margin-top: -3px;
    }
    p {
      margin: 0 10px;
      font-size: 14px;
    }
  }
  @media screen and (max-width: 885px) {
    display: flex;
    flex-direction: column;
    padding: 40px 0;
    gap: 40px;
    .contact {
      /* width: 100vw; */
      a {
        display: flex;
        margin: 0;
        align-items: center;
        line-height: 35px;
        text-align: center;
        width: 100%;
        p {
          font-size: 14px;
          font-family: var(--poppins);
          color: var(--text-light-color);
          margin-left: 20px;
        }
      }
    }
  }
  @media screen and (max-width: 330px) {
    .four {
      font-size: 8px;

      .copyrigt {
        font-size: 16px;
      }
    }
  }
`;

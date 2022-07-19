/** @format */
import styled from "styled-components";
export const Container = styled.div`
  margin: auto;
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;

  .top_section {
    margin-top: 10px;
    height: 70px;
    align-items: center;
    padding: 20px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .section_one {
      display: flex;
      justify-content: left;
      flex-basis: 33%;
      font-family: var(--poppins);
      color: var(--text-light-color);
      font-weight: 500;
      align-items: center;
      .menu {
        width: 30px;
        height: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        /* align-items: flex-start; */
        .bar1,
        .bar2,
        .bar3 {
          width: 100%;
          height: 3px;
          background-color: var(--text-light-color);
        }
        .bar1 {
          width: 30%;
        }
        .bar2 {
          width: 50%;
        }
      }
      a {
        margin-right: 20px;
      }
    }
    .section_two {
      flex-basis: 33%;
      .log_container {
        p:last-child {
          font-family: var(--aclonica);
          font-size: 12px;
          margin-top: -5px;
        }
      }
    }
    .section_three {
      display: flex;
      flex-direction: row;
      text-align: right;
      flex-basis: 33.3%;
      justify-content: right;
      font-size: 23px;
      .icons {
        cursor: pointer;
      }

      .bag {
        display: flex;
        margin-right: 40px;
        font-size: 20px;
        font-family: var(--poppins);
        .cart_total {
          width: 20px;
          height: 20px;
          background-color: var(--icons-pink-color);
          font-size: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          color: #fff;
          font-weight: 700;
          margin-top: -10px;
        }
      }
      .search {
        font-size: 20px;
      }
    }
  }
`;

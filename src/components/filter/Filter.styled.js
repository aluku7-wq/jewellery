/** @format */

import styled from "styled-components";
export const Container = styled.div`
  /* padding: 5px 10px; */
  border: none;
  background-color: var(--background-light);
  outline: none;
  width: 150px;
  font-size: 12px;
  font-weight: 500;
  .dropdown {
    position: absolute;
    width: 150px;
  }
  .option {
    background-color: var(--background-light);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px;
  }
`;

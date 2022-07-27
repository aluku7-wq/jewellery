/** @format */

import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  min-width: 100vw;
  background: #fff;
  justify-content: center;
  align-items: center;
  .spinner {
    width: 40px;
    height: 40px;
    border-top: 5px solid var(--icons-pink-color);
    border-left: 5px solid var(--icons-pink-color);
    border-bottom: 5px solid var(--icons-pink-color);
    border-right: 5px solid purple;
    border-radius: 50%;
  }
`;

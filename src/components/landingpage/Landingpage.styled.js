/** @format */

import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  justify-content: center;

  .top_bar {
    position: fixed;
    width: 100%;
    transition: background-color 0.3s ease;
  }

  /* hero section */
  .hero_section {
    min-height: 100vh;
    background: linear-gradient(to right, #ebc9e4, #ffb6f2);
    .background_image {
      min-height: 100vh;
      width: 100%;
      background-image: url("./images/markimages/landing3.png");
      background-repeat: no-repeat;
      background-position: 100% 10%;
      background-size: auto 110%;
      .overlay {
        background-color: var(--bacground-overlay);
        min-height: 100vh;
        width: 100%;
        padding-top: 40vh;
        text-align: left;
        color: var(--text-light-color);
        font-family: var(--poppins);
        padding-left: 150px;
        h1 {
          text-align: left;
          width: 500px;
          margin-bottom: 70px;
        }
        button {
          background-color: var(--icons-pink-color);
          cursor: pointer;
        }
      }
    }
  }
  /* recent products section */
  .recent_section {
    display: flex;
    flex-direction: column;
    font-family: var(--poppins);
    color: var(--text-light-color);
    padding-top: 50px;
    h3 {
      padding: 20px;
    }
    .container {
      display: grid;
      column-gap: 50px;
      padding: 20px 200px;
      grid-template-columns: repeat(3, 1fr);
      text-align: center;
      align-items: start;
      .card {
        /* margin-top: -20px; */
        img {
        }
        p {
        }
        .price {
        }
      }
      .card:nth-child(2) {
        margin-top: 100px;
      }
    }
    a {
      margin-top: 60px;
      .recent_button {
        background-color: var(--text-light-color);
        width: 100px;
        cursor: pointer;
      }
    }
  }
  /* burner one  section */
  .burner_one {
    background-color: var(--background-light);
    background-image: url("./images/markimages/landing1.png");
    background-repeat: no-repeat;
    background-position: 10% 100%;
    background-size: auto 100%;
    height: 450px;
    margin-top: 50px;
    margin-bottom: 50px;
    .overlay {
      background: linear-gradient(
        to right,
        transparent,
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
      );
      height: 100%;
      min-height: 100%;
      font-family: var(--poppins);
      color: var(--text-light-dark);
      align-items: center;
      padding-top: 200px;
      text-align: left;
      padding-left: 40%;

      h2 {
        max-width: 350px;
        text-align: left;
      }
      button {
        background-color: var(--icons-pink-color);
        width: 120px;
        margin-top: 40px;
        cursor: pointer;
      }
    }
  }
  /* best sellers section */
  .best_sellers {
    display: flex;
    flex-direction: column;
    font-family: var(--poppins);
    color: var(--text-light-color);
    padding-top: 50px;
    .container {
      display: grid;
      column-gap: 50px;
      padding: 20px 200px;
      grid-template-columns: repeat(3, 1fr);
      text-align: center;
      align-items: start;
      margin-top: 30px;
      .card:nth-child(1),
      .card:nth-child(3) {
        margin-top: 100px;
      }
    }
    a {
      margin-top: 60px;
      button {
        background-color: var(--text-light-color);
        cursor: pointer;
        width: 100px;
      }
    }
  }
  @media screen and (max-width: 601px) {
    .hero_section {
      .background_image {
        background-position: 50% 50%;
        /* background-size: auto 100%; */
        .overlay {
          background-color: var(--bacground-overlay);
          padding: 0;
          padding-top: 40vh;
          text-align: center;
          h1 {
            width: 80%;
            font-size: 1.5rem;
            text-align: center;
            margin: auto;
            margin-bottom: 8vh;
          }
        }
      }
    }
  }
`;

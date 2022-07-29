/** @format */

import styled from "styled-components";

export const Container = styled.div`
  .wrapper {
    margin: auto;
    /* hero section */
    .hero_section {
      min-height: 95vh;
      background-image: url("./images/markimages/landing.webp");
      background-repeat: no-repeat;
      background-position: 45vw 20vh;
      background-size: auto 30vw;
      margin-bottom: 10px;

      .overlay {
        background-color: var(--bacground-overlay);
        min-height: 95vh;
        width: 100%;
        padding-top: 40vh;
        color: var(--text-light-color);
        font-family: var(--poppins);
        .hero_text {
          width: 60%;
          margin: auto;
          text-align: left;
          h1 {
            text-align: left;
          }
          h3 {
            max-width: 400px;
            margin-bottom: 30px;
            font-weight: 600;
            text-align: left;
          }
          button {
            background-color: var(--icons-pink-color);
            cursor: pointer;
            border-radius: 0;
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
      margin-bottom: 10px;

      h3 {
        padding: 20px;
      }
      .container {
        display: grid;
        gap: 30px;
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
        p:nth-child(3) {
          font-weight: 700;
        }
        .recent_button {
          background-color: var(--text-light-color);
          width: 100px;
          cursor: pointer;
          margin: 50px 0;
        }
      }
    }
    /* burner one  section */
    .burner_one {
      background-image: url("./images/markimages/burner.jpg");
      background-repeat: no-repeat;
      background-position: 20vw 50%;
      background-size: auto 20vw;
      height: 80vh;
      margin-bottom: 10px;

      .overlay {
        background: var(--bacground-overlay);
        height: 100%;
        min-height: 100%;
        font-family: var(--poppins);
        color: var(--text-light-dark);
        align-items: center;
        padding-top: 25vh;
        text-align: left;
        padding-left: 50vw;

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
      margin-top: 40px;
      margin-bottom: 40px;
      .container {
        display: grid;
        column-gap: 50px;
        padding: 20px 200px;
        grid-template-columns: repeat(3, 1fr);
        text-align: center;
        align-items: start;

        .card:nth-child(1),
        .card:nth-child(3) {
          margin-top: 100px;
        }
      }
      a {
        p:nth-child(3) {
          font-weight: 700;
        }
        button {
          background-color: var(--text-light-color);
          cursor: pointer;
          width: 100px;
        }
      }
    }
  }
  @media screen and (max-width: 1150px) {
    .wrapper {
      /* recent section */
      .recent_section {
        .container {
          padding: 20px 50px;
        }
      }
      /* best sellers section */
      .best_sellers {
        .container {
          padding: 20px 50px;
        }
      }
    }
  }
  @media screen and (max-width: 885px) {
    .wrapper {
      /* hero section */
      .hero_section {
        background-position: bottom;
        background-size: 90%;
        min-height: 100vw;
        .overlay {
          padding-top: 20%;
          min-height: 100vw;
          .hero_text {
            margin: auto;
            text-align: center;
            h1 {
              text-align: center;
            }
            h3 {
              text-align: center;
              max-width: 80vw;
            }
          }
        }
      }
      /* recent products */
      .recent_section {
        .container {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          padding: 30px;
          grid-template-areas: "one two" "three three";
          .card:nth-child(1) {
            margin: 0;
            grid-area: one;
          }
          .card:nth-child(2) {
            margin: 0;
            grid-area: two;
          }
          .card:nth-child(3) {
            justify-self: center;
            grid-area: three;
            width: 100%;
          }
        }
      } /* burner one  section */
      .burner_one {
        background-position: center 35vh;
        background-size: auto 40vw;
        .overlay {
          align-items: center;
          padding-top: 15vh;
          text-align: center;
          padding-left: 0;

          h2 {
            max-width: 80%;
            text-align: center;
            margin: auto;
          }
          button {
            margin-top: 30px;
            cursor: pointer;
          }
        }
      }
      /* best sellers section */
      .best_sellers {
        .container {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          padding: 30px;
          grid-template-areas: "one one" "two three";
          .card:nth-child(1) {
            grid-area: one;
            margin: 0;
            max-width: 60vw;
            margin: auto;
          }
          .card:nth-child(2) {
            margin: 0;
            grid-area: two;
            margin: 0;
          }
          .card:nth-child(3) {
            justify-self: center;
            grid-area: three;
            margin: 0;
          }
          a {
            margin: 0;
          }
        }
      }
    }
  }
  @media screen and (max-width: 640px) {
    .wrapper {
      /* hero section */
      .hero_section {
        background-position: center 45vh;
        background-size: 100%;
        min-height: 90vh;
        .overlay {
          padding-top: 15vh;
          min-height: 90vh;
        }
      } /* recent products */
      .recent_section {
        .container {
          display: grid;
          grid-template-columns: 1fr;
          padding: 20px;
          grid-template-areas: "one" "two" "three";
          .card:nth-child(1) {
            margin: 0;
            grid-area: one;
          }
          .card:nth-child(2) {
            margin: 0;
            grid-area: two;
          }
          .card:nth-child(3) {
            justify-self: center;
            grid-area: three;
          }
        }
      }
      .burner_one {
        background-position: center 45vh;
        background-size: auto 50vw;
      }
      /*  best sellers section*/
      .best_sellers {
        .container {
          grid-template-columns: 1fr;
          grid-template-areas: "one" "two" "three";
          .card:nth-child(1) {
            margin: 0;
            grid-area: one;
            max-width: 100%;
          }
          .card:nth-child(2) {
            margin: 0;
            grid-area: two;
          }
          .card:nth-child(3) {
            justify-self: center;
            grid-area: three;
            width: 100%;
          }
          a {
            margin: 0;
            button {
              margin: 0;
            }
          }
        }
      }
    }
    @media screen and (max-width: 340px) {
      .wrapper {
        /* hero section */

        .hero_section {
          background-position: center 65vh;
          background-size: 65vw;
          min-height: 90vh;
          .overlay {
            padding-top: 15vh;
            min-height: 100vh;
          }
        }
        /* burner one  section */
        .burner_one {
          background-position: center 49vh;
          background-size: auto 50vw;
          .overlay {
            padding-top: 10vh;
          }
        }
      }
    }
  }
`;

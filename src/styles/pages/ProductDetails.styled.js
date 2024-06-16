import styled from 'styled-components'

export const ProductDetailsWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (width < 950px) {
    padding: 2rem;
  }
`

export const Card = styled.div`
  width: 892px;
  height: auto;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0;

  .left {
    min-width: 55%;
    height: 553px;
    background: ${({ theme }) => theme.brown};
    background-image: ${({ theme }) => theme.goldGradient};
    border-radius: 23px;
    display: flex;
    align-items: center;
    /* overflow: hidden; */
    padding-left: 2rem;

    .wordmark {
      /* border: 5px solid ${({ theme }) => theme.lightBrown}; */
      font-size: 8rem;
      font-weight: bolder;
      font-style: italic;
      text-align: center;
      line-height: 0.75;
      color: ${({ theme }) => theme.dark};
      opacity: 0.2;
      /* margin-left: -90px; */
      transform: rotate(-90deg) scale(1.2) translateX(-70%);
      transform-origin: left top;
    }
  }

  .right {
    min-width: 70%;
    height: 485px;
    background: ${({ theme }) => theme.dark};
    position: relative;
    transform: translateX(-35%);
    border-radius: 23px;
    display: flex;
    align-items: center;
    justify-content: center;

    &::before {
      content: '';
      position: absolute;
      top: -2rem;
      right: 0;
      width: 50%;
      height: 20px;
      border-radius: 23px;
      background: ${({ theme }) => theme.brown};
      background-image: ${({ theme }) => theme.goldGradient};
      z-index: -1;
    }
    &::after {
      content: '';
      position: absolute;
      bottom: -2rem;
      right: 15%;
      width: 40%;
      height: 20px;
      border-radius: 23px;
      background: ${({ theme }) => theme.brown};
      background-image: ${({ theme }) => theme.goldGradient};
      z-index: -1;
    }

    .item-img {
      position: absolute;
      top: 50%;
      left: -35%;
      transform: translateY(-50%);
      width: 350px;
    }

    .info {
      margin: auto;
      width: 80%;
      height: 100%;
      transform: translateX(10%);
      padding: 2rem;
      color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .top,
    .middle,
    .bottom {
      padding-block: 2rem;
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
      border-bottom: 1px solid ${({ theme }) => theme.lightBrown};
    }

    .bottom {
      border: none;
      flex-direction: row;
      justify-content: space-between;
    }

    .item-name {
      font-size: 1.8rem;
      font-weight: bolder;
      color: ${({ theme }) => theme.lightBrown};
    }

    .item-price {
      font-size: 1.4rem;
      font-weight: bolder;
    }

    .item-desc {
      color: ${({ theme }) => theme.light};
      font-weight: 400;
    }

    .rating {
      display: flex;
      align-items: center;
      gap: 2rem;
      color: ${({ theme }) => theme.light};
    }

    .stars {
      display: flex;
      gap: 0.1rem;
    }

    .reviews {
      font-size: 1rem;
      color: ${({ theme }) => theme.light};
    }

    .add-to-cart,
    .add-to-saved {
      padding: 1rem 1.5rem;
      border: none;
      border-radius: 100px;
      font-size: 0.7rem;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 1px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      transition: all 0.1s linear;
    }

    .add-to-cart {
      background: ${({ theme }) => theme.lightBrown};
      color: ${({ theme }) => theme.dark};
    }

    .add-to-saved {
      background: transparent;
      color: ${({ theme }) => theme.lightBrown};
    }

    .add-to-saved:hover {
      color: ${({ theme }) => theme.white};
      background: ${({ theme }) => theme.lightBrown};
    }

    .add-to-cart:hover {
      color: ${({ theme }) => theme.white};
      transform: scale(1.05);
      font-weight: 600;
    }
  }

  @media (width < 950px) {
    width: 100%;
    max-width: 892px; /* Maintain the maximum width for larger screens */
    height: auto;
    margin-top: 1.5rem;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0;
    flex-direction: column; /* Stack components vertically on smaller screens */

    .left {
      min-width: 100%; /* Take full width on smaller screens */
      height: auto; /* Allow height to adjust based on content */
      background: ${({ theme }) => theme.brown};
      background-image: ${({ theme }) => theme.goldGradient};
      border-radius: 23px;
      display: flex;
      align-items: center;
      padding: 2rem;
      text-align: center;

      .wordmark {
        opacity: 0;
        font-size: 4rem; /* Adjust font size for smaller screens */
        transform: rotate(0) scale(1); /* Reset transformation for smaller screens */
      }
      &::before {
        content: 'TAP STORE';
        position: absolute;
        top: 2%;
        left: 50%;
        transform: translateX(-50%);
        font-size: 3rem;
        font-weight: 800;
        font-style: italic;
        opacity: 0.3;
        color: ${({ theme }) => theme.dark};
      }
    }

    .right {
      padding: 1rem 0;
      width: 90%;
      max-width: 90%; /* Take full width on smaller screens */
      height: auto; /* Allow height to adjust based on content */
      background: ${({ theme }) => theme.dark};
      position: relative;
      border-radius: 23px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column; /* Stack components vertically on smaller screens */
      transform: translate(
        0,
        -15%
      ); /* Reset transformation for smaller screens */

      &::before {
        top: 25%;
        right: -2rem;
        width: 20px;
        height: 45%;
      }
      &::after {
        bottom: 5%;
        left: -2rem;
        width: 20px;
        height: 60%;
      }

      .item-img {
        position: static; /* Reset position for smaller screens */
        transform: none; /* Reset transformation for smaller screens */
        width: 250px; /* Adjust image width for smaller screens */
        /* margin: 1.25rem 0 0; Add margin for spacing */
      }

      .info {
        width: 90%; /* Take full width on smaller screens */
        padding: 0 1rem; /* Adjust padding for smaller screens */
        transform: translateX(0); /* Reset transformation for smaller screens */
      }

      .top,
      .middle,
      .bottom {
        padding: 1rem 0; /* Adjust padding for smaller screens */
        /* border-bottom: none; Remove border bottom on smaller screens */
      }

      .bottom {
        /* flex-direction: column; Stack buttons vertically on smaller screens */
        align-items: center; /* Center buttons horizontally on smaller screens */
      }

      .add-to-cart,
      .add-to-saved {
        padding: 0.8rem 1.2rem; /* Adjust padding for smaller screens */
        font-size: 0.9rem; /* Adjust font size for smaller screens */
      }
    }
  }

  @media (width < 570px) {
    .right {
      .item-name {
        font-size: 1.4rem;
      }
      .item-price {
        font-size: 1.2rem;
      }
      .item-desc {
        font-size: 0.9rem;
      }

      .add-to-cart,
      .add-to-saved {
        padding: 0.5rem 0.8rem;
        font-size: 0.65rem;
      }
    }
  }

  @media (width <= 450px) {
    .right {
      .item-name {
        font-size: 1.2rem;
      }
      .item-price {
        font-size: 1rem;
      }
      .item-desc {
        font-size: 0.8rem;
      }

      .add-to-cart,
      .add-to-saved {
        padding: 0.4rem 0.7rem;
        font-size: 0.5rem;
      }
    }
  }

  @media (width <= 400px) {
    .left {
      display: none;
    }
    .right {
      .item-img {
        width: 150px;
      }
      margin-top: 3.5rem;
    }
  }
`

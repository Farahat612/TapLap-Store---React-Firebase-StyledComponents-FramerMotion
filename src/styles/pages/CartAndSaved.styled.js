import styled from 'styled-components'

// Cart and Saved Items Page Styles

// Page Wrapper
export const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding-top: 100px;
  position: relative;
  min-height: 100dvh;
  padding-bottom: 120px;
`

// Page Heading
export const Heading = styled.h1`
  width: 100%;
  padding: 1rem 2rem;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 1rem;
  text-align: left;
  color: ${({ theme }) => theme.dark};
  background-color: ${({ theme }) => theme.lightBrown};
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.2);

  @media (width < 991px) {
    font-size: 1.5rem;
  }

  @media (width < 768px) {
    font-size: 1.2rem;
    text-align: center;
  }
`

// Flex Layout
export const Layout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  align-items: stretch;
  justify-content: space-between;

  @media (width < 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`

// Items List on left
export const ItemsList = styled.div`
  width: 55%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;

  @media (width < 768px) {
    width: 100%;
  }
`

// Item Wrapper
export const Item = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 0;
  border-top: 1px solid ${({ theme }) => theme.light};
  width: 100%;
  color: ${({ theme }) => theme.dark};

  &:last-child {
    border-bottom: 1px solid ${({ theme }) => theme.light};
    padding-bottom: 2rem;
  }

  .img-wrapper {
    padding: 1rem;
    background-color: ${({ theme }) => theme.inputField};
    display: flex;
    align-items: center;
    box-shadow: -5px 5px 0px 0 ${({ theme }) => theme.dark};

    img {
      width: 80px;
    }
  }
  .info {
    width: 65%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    .title {
      font-size: 1.5rem;
      font-weight: 700;
    }
    .price {
      font-size: 1.2rem;
      font-weight: 700;
      height: 35px;
    }
    .quantity {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.5rem 0;
      margin-bottom: 0.65rem;

      .value {
        font-size: 1.2rem;
        font-weight: 700;

        .count {
          display: inline-block;
          margin-left: 0.4rem;
        }
      }

      .increment,
      .decrement {
        width: 2rem;
        font-size: 1.2rem;
        letter-spacing: normal;
      }
    }
    .buttons-wrapper {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      justify-content: space-between;
    }

    // for saved items page
    .remove-saved {
      line-height: 2.5rem;
    }
  }

  .insert-quantity {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 0.5rem;
    justify-content: space-between;

    label {
      flex-basis: 100%;
      flex-grow: 1;
      font-size: 1.1rem;
      font-weight: 500;
    }

    input {
      width: 50%;
      padding: 0.5rem;
      font-size: 0.7rem;
      font-weight: 700;
      color: inherit;
      background-color: ${({ theme }) => theme.inputField};
      border: none;
      outline: 1px solid ${({ theme }) => theme.light};

      &::placeholder {
        color: inherit;
        font-weight: 300;
      }

      &:focus {
        outline: 1px solid ${({ theme }) => theme.dark};
      }
    }
  }

  .footer {
    border-top: 1px solid ${({ theme }) => theme.light};
    margin-top: 1rem;
    display: flex;
    align-items: end;
    justify-content: space-between;
    gap: 1rem;
    padding: 1rem 0;

    span {
      font-size: 1rem;
      font-weight: 700;
    }
  }

  @media (width<=768px) {
    flex-direction: column;

    .img-wrapper {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 150px !important;
      }
    }

    .info {
      width: 100%;
    }
  }
`

// Summary section on right
export const Summary = styled.div`
  // summary section styles
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 2rem;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.dark};
  color: ${({ theme }) => theme.white};
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.2);
  max-height: 40vh;

  // Summary section children styles
  .summary-title {
    width: 100%;
    font-size: 1.2rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    background-color: ${({ theme }) => theme.lightBrown};
    padding: 1rem;
    margin-bottom: 1rem;
    text-align: center;
  }
  .summary-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;

    .total {
      font-size: 1.1rem;
      font-weight: 500;
      width: 100%;
      padding: 0.1rem 1rem;
    }
  }

  .summary-buttons {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 0.4rem;
    /* margin-top: auto; */

    button {
      background-color: ${({ theme }) => theme.brown};
      min-width: 150px;
      line-height: 3rem;

      &:hover {
        background-color: ${({ theme }) => theme.lightBrown};
      }
    }

    .clear-saved {
      width: 100%;
      padding: 0 1rem;
      margin: auto;
    }
  }

  // Media Queries
  @media (width<= 1200px) {
    .summary-title {
      font-size: 1.1rem;
    }
    .total {
      font-size: 1rem;
    }
  }

  @media (width<= 991px) {
    .summary-title {
      font-size: 1rem;
    }
    .total {
      font-size: 0.8rem;
    }
    .summary-buttons button {
      width: 100%;
    }
  }

  @media (width<= 768px) {
    .summary-title {
      font-size: 0.9rem;
    }
    width: 100%;

    .total {
      font-size: 1rem;
    }
  }

  @media (width<= 560px) {
    .summary-title {
      font-size: 0.8rem;
    }
    .total {
      font-size: 0.7rem;
    }
  }
`

// General button component for cart and saved items pages
export const ActionBtn = styled.button`
  background-color: ${({ theme }) => theme.lightBrown};
  color: ${({ theme }) => theme.white};
  border: none;
  /* width: 100px; */
  padding: 0.1rem 1rem;
  line-height: 2rem;
  font-size: 0.9rem;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s ease;
  &:hover {
    background-color: ${({ theme }) => theme.dark};
  }
`

export const FooterAbsolute = styled.div`
  position: absolute;
  bottom: 0;
  width: 100vw;
`

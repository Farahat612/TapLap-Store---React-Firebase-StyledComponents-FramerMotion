import styled from "styled-components";

export const NavbarContainer = styled.nav`
  position: fixed;
  z-index: 1000;
  width: 100%;
  height: ${({ $extendNavbar }) => ($extendNavbar ? "100vh" : "80px")};
  background-color: ${({ $hasScrolled, theme }) => ($hasScrolled ? theme.navbarBg : 'transparent')};
  ${({ $hasScrolled }) => ($hasScrolled && "box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.2);" )}
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease; 

  @media (min-width: 800px) {
    height: 80px;
  }
`;

export const LeftContainer = styled.div`
  flex: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 3rem;


  @media (width > 1200px ){
    padding-right: 3rem;
  }

  @media (width <= 800px) {
    padding-left: 1rem;
  
  }

`;

export const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  gap: 2rem;
  justify-content: flex-end;
  align-items: center;
  padding-right: 3rem;
  font-size: x-large;

  /* border: 2px solid ; */
  @media (width <= 800px) {
    padding-right: 1rem;
  
  }
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
`;



export const NavbarIcon = styled.span`
  color: ${({ theme }) => theme.dark};
  font-size: x-large;
  text-decoration: none;
  height: 1em;
  position: relative;
  cursor: pointer;


  & .cart-counter {
    position: absolute;
    top: -10px;
    right: -10px;
    display: inline-block;
    width: 15px;
    height: 15px;
    text-align: center;
    line-height: 15px;
    background-color: ${({ theme }) => theme.blue};
    color: ${({ theme }) => theme.white};
    border-radius: 50%;
    padding: 0.1rem;
    font-size: 0.8rem;
    box-sizing: content-box;

    opacity: ${({ $count }) => ($count > 0 ? "1" : "0")};
  }
`;

export const Logo = styled.img`
  margin: 0.7rem;
  max-width: 8rem;
  height: auto;

  @media (width <= 560px) {
    max-width: 6rem;
  }
`;

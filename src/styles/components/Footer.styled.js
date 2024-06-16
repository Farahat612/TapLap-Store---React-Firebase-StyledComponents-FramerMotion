import styled from "styled-components";



export const FooterContainer = styled.footer`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: ${({theme}) => theme.lightBrown};
    color: ${({theme}) => theme.dark};

    margin-top: 1rem;

    .copy-rights {
        font-size: 1rem;
        font-weight: 500;
        letter-spacing: 0.1rem;
        text-transform: uppercase;
    }

    .logo {
        max-width: 8rem;
        height: auto;

        @media (width <= 560px) {
            max-width: 6rem;
        }
    }

    @media (width <= 560px) {
        flex-direction: column;
        gap: 1rem;
    }

`;
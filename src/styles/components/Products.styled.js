import styled from 'styled-components';
import ReactPaginate from "react-paginate";


export const StyledReactPaginate = styled(ReactPaginate)`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-top: 3rem;
    padding: 0 1rem;
    list-style: none;
    cursor: pointer;

    & li {
        width: 55px;
        height: 55px;
        line-height: 55px;
        text-align: center;
        border: 0.1px solid ${({theme}) => theme.lightBrown};
        background-color: ${({theme}) => theme.inputField};
        transition: all .2s ease-in-out;
    }

    & li:hover {
        background-color: ${({theme}) => theme.lightBrown};
        color: ${({theme}) => theme.white};
    }
`;


export const ProductsContainer = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-top: 3rem;


    
`;


export const ProductsSectionHeading = styled.h2`
    text-align: center;
    margin-top: 3rem;
    color: ${({theme}) => theme.dark};
    font-size: 2rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    padding: 1rem;
    border-bottom: 0.1rem solid ${({theme}) => theme.lightBrown};
    width: 100%;
    max-width: 100%;
    margin-bottom: 3rem;
    background-color: ${({theme}) => theme.inputField};
    box-shadow: 0 0 5px 0 rgba(0,0,0,0.1);
    /* border-radius: 5px; */
    transition: all .2s ease-in-out;
    &:hover {
        background-color: ${({theme}) => theme.lightBrown};
        color: ${({theme}) => theme.white};
    }


    @media (width<= 1200px) {
        font-size: 1.8rem;
    }


    @media (width<= 991px) {
        font-size: 1.6rem;
    }

    @media (width<= 750px) {
        font-size: 1.4rem;
    }

    @media (width<= 560px) {
        font-size: 1.2rem;
    }
`;


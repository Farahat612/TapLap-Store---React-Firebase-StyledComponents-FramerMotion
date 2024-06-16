import { Link } from "react-router-dom";
import styled from "styled-components";


export const NotFound = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f4f4f4;
    color: #374955;
    font-size: 3rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    text-align: center;
    padding: 0 1rem;
    line-height: 1.5;
    flex-direction: column;
    
`;


export const BackToHome = styled(Link)`
    text-decoration: none;
    color: #374955;
    font-size: 1.5rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    margin-top: 2rem;
    padding: 1rem 2rem;
    border: 0.1rem solid #374955;
    transition: all .2s ease-in-out;
    &:hover {
        background-color: #374955;
        color: #f4f4f4;
    }
`
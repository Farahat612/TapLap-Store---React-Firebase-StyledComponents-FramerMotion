import styled from "styled-components";
import { Link } from "react-router-dom";

export const Card = styled.div`
    position: relative;
    width: 320px;
    height: 450px;
    background-color: ${({theme}) => theme.dark};
    border-radius: 1.25rem;
    overflow: hidden;


    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: ${({theme}) => theme.goldGradient};
        clip-path: circle(150px at 80% 20%);
        transition: all .5s ease-in-out;
    }

    &:hover::before {
        clip-path: circle(300px at 80% -20%);
    }


    &::after {
        content: "TAP";
        position: absolute;
        top: 30%;
        left: 50%;
        transform: translateX(-50%);
        font-size: 8rem;
        font-weight: 800;
        font-style: italic;
        color: rgba(255, 255, 255, .05);
    
    }



    &:hover .img-wrapper{
        top: 0;
        transform: translateY(0);
    }

    &:hover .card-data {
        height: 210px;
    }

    &:hover .card-desc {
        opacity: 1;
        transition-delay: 0.25s;
    }

    &:hover .card-btn {
        opacity: 1;
        transform: translateY(0);
        transition-delay: 0.35s;
    }

    @media (width <= 768px) {
        .img-wrapper{
            top: 10px;
            transform: translateY(0);
        }

        .card-data {
            height: 200px;
        }

        .card-desc {
            opacity: 1;
        }

        .card-btn {
            opacity: 1;
            transform: translateY(0px);
        }
    }


`;

export const ImageWrapper = styled.div`
    position: absolute;
    z-index: 50;
    top: 35%;
    transform: translateY(-50%);
    width: 100%;
    height: 220px;
    transition: .5s;

    /* border: 2px solid red; */
    
`;

export const CardImage = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 270px;
    transition: all .5s ease-in-out;

`;

export const CardData = styled.div`
    position: absolute;
    z-index: 10;
    bottom: 5%;
    width: 100%;
    height: 100px;
    text-align: center;
    transition: all .5s ease-in-out;

    /* border : 2px solid blue; */
    
`;


export const CardTitle = styled.h2`
    position: relative;
    font-weight: 600;
    letter-spacing: 1px;
    color: #fff;
    font-size: 1.3rem;

    @media (width <= 1200px) {
        font-size: 1.2rem;
    }

    @media (width <= 991px) {
        font-size: 1.1rem;
    }

    @media (width <= 768px) {
        font-size: 1rem;
    }
`;

export const CardPrice = styled.span`
    display: inline-block;
    font-size: 1.25rem;
    font-weight: 500;
    font-style: italic;
    margin-bottom: 1.25rem;
    transition: all .5s ease-in-out;
    color: #fff;

    @media (width <= 1200px) {
        font-size: 1.1rem;
    }

    @media (width <= 991px) {
        font-size: 1rem;
    }

    @media (width <= 768px) {
        font-size: 0.9rem;
    }


`;

export const CardDescription = styled.p`
    width: 90%;
    margin-inline: auto;
    font-size: 0.75rem;
    font-weight: 400;
    color: #fff;
    margin-bottom: 1.2rem;
    transition: .5s;
    opacity: 0;
`;


export const ButtonsWrapper = styled.div`
    width: 90%;
    margin-inline: auto;
    margin-block: 0.5rem;
    display: flex;
    justify-content: space-between;
`;

export const CardButton = styled(Link)`
    text-decoration: none;
    width: 140px;
    height: 40px;
    /* margin: auto; */
    border-radius: 12px;
    border: none;
    background-color: ${({theme}) => theme.lightBrown};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition-duration: .5s;
    overflow: hidden;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.103);
    position: relative;


    opacity: 0;
    transform: translateY(50px);

    &:hover {
        text-decoration: none;
    }

    .IconContainer {
        position: absolute;
        left: -50px;
        width: 30px;
        height: 30px;
        background-color: transparent;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        z-index: 2;
        transition-duration: .5s;
    }

    .cart-icon {
        border-radius: 1px;
    }

    .btn-text {
        height: 100%;
        width: fit-content;
        display: flex;
        align-items: center;
        justify-content: center;
        color: rgb(17, 17, 17);
        z-index: 1;
        transition-duration: .5s;
        font-size: 0.8rem;
        font-weight: 600;
    }

    &:hover .IconContainer {
        transform: translateX(58px);
        border-radius: 40px;
        transition-duration: .5s;
    }

    &:hover .btn-text {
        transform: translate(10px,0px);
        transition-duration: .5s;
        pointer-events: none;
    }

    &:active {
        transform: scale(0.95);
        transition-duration: .5s;
    }
`;


export const InfoButton = styled(CardButton)`
    width: 100%;


    .cart-icon {
        transform: scale(0.75);
    }
`
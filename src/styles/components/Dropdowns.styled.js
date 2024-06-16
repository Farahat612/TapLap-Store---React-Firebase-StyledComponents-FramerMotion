import styled from "styled-components";
import { Link } from "react-router-dom";

// Cart and profile specific variables object
const variables = {
    cart : {
        width : '240px',
        minHeight : '340px',
        right : '-20px',
    },
    profile : {
        width : '150px',
        minHeight : '80px',
        right : '-18px',
    }
}


// Dropdowns Styles
export const Dropdown = styled.div`
    position: absolute;
    width: ${({$type}) => variables[$type].width};
    min-height: ${({$type}) => variables[$type].minHeight};
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 1rem;
    padding: 0.75rem;
    border-radius: 8px;
    background-color: ${({theme}) => theme.lightBrown};
    top: 40px;
    right: ${({$type}) => variables[$type].right};
    z-index: 5;
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.2);
    transition: .3s;
    visibility: ${({$isOpen}) => $isOpen ? 'visible' : 'hidden'};
    opacity: ${({$isOpen}) => $isOpen ? '1' : '0'};
    transform: scale(${({$isOpen}) => $isOpen ? '1' : '0.5'});
    transform-origin: top right;

    &::before {
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 10px solid ${({theme}) => theme.lightBrown};
        top: -10px;
        right: 20px;
    }

    // --------- profile dropdown specific styles ---------
    .profile-btns {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        .nav-btn {
            padding: 0.5rem 1rem;
            text-decoration: none;
            border: none;
            border-radius: 8px;
            background-color: ${({theme}) => theme.dark};
            color: ${({theme}) => theme.light};
            font-size: 1rem;
            cursor: pointer;
            transition: .3s;
            text-align: center;
            &:hover {
                color: ${({theme}) => theme.white};
            }
        }
    }


    // -------------- cart dropdown specific styles --------------
    // cart dropdown header
    .title {
        font-size: 1.2rem;
        width: 90%;
        height: 15%;
        text-align: center;
        margin: 0;
        padding-bottom: 0.3rem;
        border-bottom: 1px solid ${({theme}) => theme.dark};
        color: ${({theme}) => theme.dark};
    }
    // Cart dropdown buttons wrapper
    .cart-btns {
        width: 100%;
        display: flex;
        flex-direction: row;
        gap: 0.3rem;
        margin-top: auto;
        // Clear cart button
        .clear {
            width: 40%;
            height: 3rem;
            line-height: 3rem;
            font-size: 0.8rem;
            border: none;
            text-align: center;
            text-decoration: none;
            text-transform: uppercase;
            font-weight: 600;
            letter-spacing: 2.5px;
            color: ${({theme}) => theme.light};
            background-color: ${({theme}) => theme.red};
            border-radius: 5px;
            transition: .3s;
            overflow: hidden;
            cursor: pointer;
            // trash icon
            .trash {
                font-size: 1.2rem;
                transform: translateY(5px);
                color: ${({theme}) => theme.white};
                transition: .3s;
            }
            .txt {
                transition: .3s;
            }

            &:hover {
                color: ${({theme}) => theme.white};
                .trash {
                    transform: translateY(-40px);
                }
                .txt {
                    transform: translateY(-48px);
                }
            }
        }
    }
    
`;



// ----------- Components for cart dropdown -----------


export const CartItems = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    padding: 0 10px;
    .empty {
        font-size: 1.1rem;
        text-align: center;
        color: ${({theme}) => theme.dark};
    }
    `;


export const CartItem = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    border-bottom: 1px solid ${({theme}) => theme.dark};
    transition: .3s;
    color: ${({theme}) => theme.dark};
    padding: 0.1rem 0;
    &:hover {
        background-color: ${({theme}) => theme.dark};
        border-color: ${({theme}) => theme.white};
        color: ${({theme}) => theme.light};
    }
    img {
        /* width: 40px; */
        height: 40px;
    }
    .info {
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 0.1rem;
        text-align: left;
        padding: 0.2rem 0;
    }
    .title {
        width: 100%;
        text-align: left;
        font-size: 0.9rem;
        font-weight: 600;
        color: inherit;
        border: none;
        line-height: 1rem;
    }
    .price {
        font-size: 0.8rem;
        color: inherit;
    }
    .quantity {
        display: flex;
        gap: 0.5rem;
        align-items: center;
        font-size: 0.8rem;
        color: inherit;   
    }
    & .quantity .count {
        font-weight: 600;
        background-color: ${({theme}) => theme.blue};
        padding-inline: 0.2rem;
        height: 16px;
        border-radius: 3px;
        color: ${({theme}) => theme.white};
    }
`;


export const GoToCart = styled(Link)`
    width: 60%;
    height: 3rem;
    line-height: 3rem;
    font-size: 0.8rem;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 2.5px;
    color: ${({theme}) => theme.light};
    background-color: ${({theme}) => theme.dark};
    border-radius: 5px;
    transition: .3s;

    &:hover {
        font-size: 0.82rem;
        color: ${({theme}) => theme.white};
    }
`


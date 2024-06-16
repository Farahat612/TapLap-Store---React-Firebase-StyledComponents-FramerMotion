import styled, { keyframes } from 'styled-components';

// ----------- Utility objects and functions for the carousel items -----------
// Positions for the carousel items
const itemsPositions = {
    item1 : {
        transform : 'translate(-100% , -5%) scale(1.5)',
        filter : 'blur(30px)',
        zIndex : 11,
        opacity : 0,
    },
    item2 : {
        transform : 'translateX(0)',
        filter : 'blur(0px)',
        zIndex : 10,
        opacity : 1,
    },
    item3 : {
        transform : 'translate(50%,10%) scale(0.8)',
        filter : 'blur(10px)',
        zIndex : 9,
        opacity : 1,
    },
    item4 : {
        transform : 'translate(90%,20%) scale(0.5)',
        filter : 'blur(30px)',
        zIndex : 8,
        opacity : 1,
    },
}

// Keyframes for the carousel items animations:
// 1. Sliding next animation
const slidingNextAnimation = {
    item1 : keyframes`
        // Animates from item2 position to item1 position
        from {
            transform: ${itemsPositions.item2.transform};
            filter: ${itemsPositions.item2.filter};
            opacity: ${itemsPositions.item2.opacity};
        }
    `,
    item2 : keyframes`
        // Animates from item3 position to item2 position
        from {
            transform: ${itemsPositions.item3.transform};
            filter: ${itemsPositions.item3.filter};
            opacity: ${itemsPositions.item3.opacity};
        }
    `,
    item3 : keyframes`
        // Animates from item4 position to item3 position
        from {
            transform: ${itemsPositions.item4.transform};
            filter: ${itemsPositions.item4.filter};
            opacity: ${itemsPositions.item4.opacity};
        }
    `,
    item4 : keyframes`
        // Animates from item1 position to item4 position
        from {
            transform: ${itemsPositions.item1.transform};
            filter: ${itemsPositions.item1.filter};
            opacity: ${itemsPositions.item1.opacity};
        }
    `,
}
// 2. Sliding previous animation
const slidingPrevAnimation = {
    item1 : keyframes`
        // Animates from item4 position to item1 position
        from {
            transform: ${itemsPositions.item4.transform};
            filter: ${itemsPositions.item4.filter};
            opacity: ${itemsPositions.item4.opacity};
        }
    `,
    item2 : keyframes`
        // Animates from item1 position to item2 position
        from {
            transform: ${itemsPositions.item1.transform};
            filter: ${itemsPositions.item1.filter};
            opacity: ${itemsPositions.item1.opacity};
        }
    `,
    item3 : keyframes`
        // Animates from item2 position to item3 position
        from {
            transform: ${itemsPositions.item2.transform};
            filter: ${itemsPositions.item2.filter};
            opacity: ${itemsPositions.item2.opacity};
        }
    `,
    item4 : keyframes`
        // Animates from item3 position to item4 position
        from {
            transform: ${itemsPositions.item3.transform};
            filter: ${itemsPositions.item3.filter};
            opacity: ${itemsPositions.item3.opacity};
        }
    `,
}
// Functions to return the animation keyframes
// 1. Sliding next animation
const nextItemAnimation = (item) => {
    return slidingNextAnimation[item];
}
// 2. Sliding previous animation
const prevItemAnimationNext = (item) => {
    return slidingPrevAnimation[item];
}
// ----------- End of Utility objects and functions for the carousel items -----------



// Styled Carousel component and its children
export const Carousel = styled.div`
    // ---------- Carousel Styles ----------
    position: relative;
    height: 100dvh;
    overflow: hidden;
    background-image: radial-gradient(circle, #dda25e, #ce9552, #c08845, #b17b39, #a36e2d);

    // ---------- Carousel Children Styles in nested hierarchy ----------
    //  ---------- Items List styles ----------
    .items-list {
        position: absolute;
        width: 1360px;
        max-width: 90%;
        height: 80%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        //  ---------- Item styles ----------
        .item {
            position: absolute;
            left: 0%;
            width: 70%;
            height: 100%;
            font-size: 1rem;
            transition: left 0.5s, opacity 0.5s, width 0.5s;
            
            //  ---------- Item image styles ----------
            img {
                width: 50%;
                position: absolute;
                right: 0;
                top: 50%;
                transform: translateY(-50%);
                transition: right 1.5s;
            }
            //  ---------- Item content styles ----------
            .item-content {
                opacity: 0; // only content of second item is visible [styled down below]
                pointer-events: none;

                .title {
                    font-size: 3.5rem;
                    font-weight: 900;
                    line-height: 1;
                    text-transform: uppercase;
                    margin-block: 2rem;
                    color: ${({ theme }) => theme.white};
                }

                .desc{
                    font-size: 1rem;
                    font-weight: 500;
                    color: ${({ theme }) => theme.inputField};
                    width: 90%;
                }
            }

            //  ---------- Item positions ----------
            &:nth-child(1) {
                transform: ${itemsPositions.item1.transform};
                filter: ${itemsPositions.item1.filter};
                z-index: ${itemsPositions.item1.zIndex};
                opacity: ${itemsPositions.item1.opacity};
                pointer-events: none;
            }
            &:nth-child(2){
                z-index: 10;
                transform: translateX(0);

                .item-content {
                    opacity: 1;
                    pointer-events: auto;
                    width: 400px;
                    position: absolute;
                    top: 50%;
                    transform:  translateY(-50%);
                    transition: opacity 0.5s;
                }
            }
            &:nth-child(3) {
                transform: ${itemsPositions.item3.transform};
                filter: ${itemsPositions.item3.filter};
                z-index: ${itemsPositions.item3.zIndex};
            }
            &:nth-child(4) {
                transform: ${itemsPositions.item4.transform};
                filter: ${itemsPositions.item4.filter};
                z-index: ${itemsPositions.item4.zIndex};
            }
        }
    }
    // ----------------- End of Carousel Children Styles ----------------
    
    
    // --------------- Carousel Items Animation on sliding --------------
    // Items Animations in sliding next
    &.next .item:nth-child(1) {
        animation: ${nextItemAnimation('item1')} 0.6s ease-in-out 1 forwards;
    }
    &.next .item:nth-child(2) {
        animation: ${nextItemAnimation('item2')} 0.8s ease-in-out 1 forwards;
    }
    &.next .item:nth-child(3) {
        animation: ${nextItemAnimation('item3')} 1s ease-in-out 1 forwards;
    }
    &.next .item:nth-child(4) {
        animation: ${nextItemAnimation('item4')} 1.2s ease-in-out 1 forwards;
    }

    // Items Animations in sliding previous
    &.prev .item:nth-child(1) {
        animation: ${prevItemAnimationNext('item1')} 0.6s ease-in-out 1 forwards;
    }
    &.prev .item:nth-child(2) {
        animation: ${prevItemAnimationNext('item2')} 0.8s ease-in-out 1 forwards;
    }

    &.prev .item:nth-child(3) {
        animation: ${prevItemAnimationNext('item3')} 1s ease-in-out 1 forwards;
    }

    &.prev .item:nth-child(4) {
        animation: ${prevItemAnimationNext('item4')} 1.2s ease-in-out 1 forwards;
    }
    // --------------- End Of Items Animation on sliding --------------

    // -------------------- Carousel Media Queries --------------------
    @media (width <= 1200px) {
        .items-list {
            .item {
                width: 75%;
                .item-content {
                    .title {
                        font-size: 3rem;
                    }
                    .desc {
                        width: 85%;
                    }
                }
            }
        }
    }

    @media (width <= 991px) {
        .items-list {  
            .item {
                width: 90%;

                .item-content {
                    .title {
                        width: 80%;
                        font-size: 2.3rem;
                    }
                    .desc{
                        width: 80%;
                    
                    }
                }
            }
        }
    }

    @media (width <= 768px) {
        height: 600px;

        .items-list {
            height: 100%;

            .item {
                width: 100%;

                img {
                    width: 40%;
                }

                .item-content {
                    width: 50%;

                    .title {
                        font-size: 2rem;
                    }

                    .desc {
                        width: 70%;
                        font-size: 0.9rem;
                    }
                }
            }
        }
    }

    @media (width <= 560px) {
        .items-list {            
            .item {
                .item-content {
                    .title {
                        font-size: 1.5rem;
                    }

                    .desc {
                        width: 60%;
                        font-size: 0.7rem;
                    }
                }
            }
        }
    }
    // ---------------- End of Carousel Media Queries ----------------
`;






export const ArrowWrapper = styled.div`
    position: absolute;
    bottom: 50px;
    width: 1360px;
    max-width: 90%;
    display: flex;
    justify-content: space-between;
    left: 50%;
    transform: translateX(-50%);
`;

export const ArrowButton = styled.button`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;


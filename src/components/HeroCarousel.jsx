/* eslint-disable no-unused-vars */

// importing the useState hook from react for using state
import  { useState } from 'react';
// importing the styled components
import { 
    Carousel,
    ArrowWrapper,
    ArrowButton,
} from '../styles/components/HeroCarousel.styled';
// importing the carousel items list from the assets
import items from '../assets/carousel/items'
// importing the right and left arrows svgs for the carousel navigation
import rightArrow from '/images/svg/right.svg';
import leftArrow from '/images/svg/left.svg';


const HeroCarousel = () => {
    // using the useState hook to create the currentItems and direction state variables
    const [currentItems, setCurrentItems] = useState(items);
    const [direction, setDirection] = useState(null);

    // Sliding the carousel based on the direction
    const slide = (direction) => {
        // setting the direction state to null [needed for Carousel wrapper className]
        setDirection(null);

        // setting the direction state to the passed direction after a small delay [needed for Carousel wrapper className]
        setTimeout(() => {
            setDirection(direction);
            
            // function to manipulate the order of the items based on the direction
            setCurrentItems((prevItems) => {
                // if the direction is next, move the first item to the end of the array
                if (direction === 'next') {
                    // making a copy of the currentItems array to avoid mutating the state directly
                    const updatedItems = [...prevItems];
                    // removing the first item then pushing it to the end of the array
                    updatedItems.push(updatedItems.shift());
                    return updatedItems;
                }
                // if the direction is prev, move the last item to the start of the array
                else if (direction === 'prev') {
                    // making a copy of the currentItems array to avoid mutating the state directly
                    const updatedItems = [...prevItems];
                    // removing the last item then insrting it to the start of the array
                    updatedItems.unshift(updatedItems.pop());
                    return updatedItems;
                }
                // if the direction is null, return the currentItems
                return prevItems;
            });
        }, 50); // A small delay to ensure proper reset before applying new direction
    };


    // Handling buttons click events
    const handleNextClick = () => {
        slide('next');
    };
    const handlePrevClick = () => {
        slide('prev'); 
    };

    
    return (
        <Carousel className={direction} >
            <div className='items-list'>
                {
                    // mapping the currentItems array to render the items
                    currentItems.map((item, index) => (
                        <div key={index} className='item'>
                            <img src={item.image} alt={item.title} />
                            <div className='item-content' >
                                <h2 className='title'>{item.title}</h2>
                                <p className='desc'>{item.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <ArrowWrapper>
                <ArrowButton id="prev" onClick={handlePrevClick}>
                    <img src={leftArrow} alt="left"  />
                </ArrowButton>
                <ArrowButton id="next" onClick={handleNextClick}>
                    <img src={rightArrow} alt="right"  />
                </ArrowButton>
            </ArrowWrapper>
        </Carousel>
    );
}

export default HeroCarousel;

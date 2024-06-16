/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

import Alert from './Alert';
// importing the useState hook from react
import { useState } from 'react';
// importing the ProductCard component
import ProductCard from './ProductCard';
// importing the styled components
import {
	StyledReactPaginate,
	ProductsContainer,
	ProductsSectionHeading
	} from '../styles/components/Products.styled';

// importing the laptops data from json file
import laptopsData from '../assets/db/laptops.json';
// importing the right and left arrows svgs for the pagination
import rightArrow from '/images/svg/right.svg';
import leftArrow from '/images/svg/left.svg';

// getting the laptops array from the laptopsData josn file
const laptops = laptopsData;

// Items component to render the ProductCard component for each pagination page
function Items({ currentItems }) {
    return (
      <>
        {currentItems &&
          currentItems.map((item, index) => {
            return <ProductCard key={index} item={item} />
        })}
      </>
    );
}

// Products component to render the Items component and the pagination
function Products({ itemsPerPage }) {
    // itemOffset state to keep track of the current pagination page
    const [itemOffset, setItemOffset] = useState(0);

    // setting the items per page to the passed prop
    const endOffset = itemOffset + itemsPerPage;

	// slicing the laptops array to get the current items for the current pagination page
    const currentItems = laptops.slice(itemOffset, endOffset);

	// getting how many pagination pages are needed
    const pageCount = Math.ceil(laptops.length / itemsPerPage);
  
    // handling the pagination click event
    const handlePageClick = (event) => {
		// calulating the new offset for the next pagination page and setting it to the itemOffset state
		const newOffset = (event.selected * itemsPerPage) % laptops.length;
		setItemOffset(newOffset);
    };


    return (
        <>
			<ProductsSectionHeading>Explore Our Laptops </ProductsSectionHeading>
			<ProductsContainer>
				<Alert/>
				<Items currentItems={currentItems}/>
			</ProductsContainer>

			{/* Pagination links from react-paginate */}
			<StyledReactPaginate
				breakLabel='...'
				marginPagesDisplayed={2}
				nextLabel={<img src={rightArrow} alt="right arrow" />}
				onPageChange={handlePageClick}
				pageRangeDisplayed={2}
				pageCount={pageCount}
				previousLabel={<img src={leftArrow} alt="left arrow" />}
				renderOnZeroPageCount={null}
				
			/>
			
        </>
      );
    }


export default Products

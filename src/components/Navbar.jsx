/* eslint-disable no-unused-vars */

// importing needed hooks from react
import  { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// importing needed hooks from the contexts
import { useAuth } from "../contexts/authContext.jsx";
import { useCart } from "../contexts/cartContext.jsx";

// importing dropdown components
import CartDropdown from "./CartDropdown.jsx";
import ProfileDropdown from "./ProfileDropdown.jsx";
// importing the styled components
import { 
	NavbarContainer,
	NavbarInnerContainer,
	LeftContainer,
	RightContainer,
	Logo,
	NavbarIcon,
	} from "../styles/components/Navbar.styled";

// importing the logo image
import LogoImg from "/images/logo/logo.png";
// importing icons from react-icons
import { FaRegUserCircle , FaShoppingCart } from "react-icons/fa";


const Navbar = () => {
	// tracking scroll event to change the navbar style
	const [hasScrolled, setHasScrolled] = useState(false);
	useEffect(() => {
		const handleScroll = () => {
			const scrolled = window.scrollY > 80;
			setHasScrolled(scrolled);
		};
		// adding the scroll event listener
		window.addEventListener('scroll', handleScroll);
		// removing the scroll event listener when the component is unmounted
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
	

	// ---------------------------------------------------------------- //
	// All functionalities needed for handling the dropdowns
	
	// 1. tracking and toggling the dropdowns
				// ----- cart dropdown -----
	const[dropdownCart, setDropdownCart] = useState(false); // state to track the cart dropdown
	const toggleCartDropdown = () => {
		setDropdownCart((curr) => !curr);
		setDropdownProfile(false); // close the profile dropdown if it's open
	}
				// ----- profile dropdown -----
	const[dropdownProfile, setDropdownProfile] = useState(false); // state to track the profile dropdown
	const toggleProfileDropdown = () => {
		setDropdownProfile((curr) => !curr);
		setDropdownCart(false); // close the cart dropdown if it's open
	}

	// 2. tracking the click event outside the dropdowns to close them
	// refs for the dropdowns to manipulate the DOM
	const cartRef = useRef(null);
	const profileRef = useRef(null);
	// close the dropdowns when the user clicks outside
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (cartRef.current && !cartRef.current.contains(event.target)) {
				setDropdownCart(false);
			}
			if (profileRef.current && !profileRef.current.contains(event.target)) {
				setDropdownProfile(false);
			}
		};
		document.addEventListener("click", handleClickOutside);
		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, []);


	// needed hooks from contexts for cart counter 
	// cartItems list to know the number of items in the cart
	const { state } = useCart();
	const { cartItems } = state;
	// user to know if the user is logged in to show or hide the cart counter
	const { user } = useAuth();
	
	return (
		<NavbarContainer $hasScrolled={hasScrolled}>
			<NavbarInnerContainer>
				<LeftContainer>
					<Link to="/">
						<Logo src={LogoImg}></Logo>
					</Link>
				</LeftContainer>

				<RightContainer>
					{/* cart icon */}
					<NavbarIcon ref={cartRef}  $count={cartItems.length} onClick={toggleCartDropdown}>
						<FaShoppingCart/>
						<CartDropdown expanded={dropdownCart} />
						{
							// if the user is logged in, show the cart counter
							user && (
										<span className="cart-counter">
											{cartItems.reduce((total, item) => total + item.quantity, 0)}
										</span>
									) 
						}
					</NavbarIcon>

					{/* profile icon */}
					<NavbarIcon ref={profileRef} onClick={toggleProfileDropdown} >
						<FaRegUserCircle />
						<ProfileDropdown expanded={dropdownProfile} />
					</NavbarIcon>
				</RightContainer>
			</NavbarInnerContainer >	
		</NavbarContainer>
	);
}

export default Navbar

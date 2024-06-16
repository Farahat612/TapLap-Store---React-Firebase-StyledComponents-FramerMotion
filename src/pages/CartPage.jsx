/* eslint-disable react-refresh/only-export-components */
import { useState } from 'react';

// importing other components
import Footer from '../components/Footer.jsx';
import PageTransition from '../components/PageTransition.jsx';

// importing styled components
import { Container } from '../styles/utilities/layout-utilities.styles'; 
import {
	Wrapper,
	Heading,
	Item,
	ItemsList,
	Layout,
	Summary,
	ActionBtn,
	FooterAbsolute
} from "../styles/pages/CartAndSaved.styled.js";

// importing the useCart hook from the cartContext
import { useCart } from "../contexts/cartContext.jsx";
// importing the useAlert hook from the alertContext
import { useAlert } from "../contexts/alertContext.jsx";
import Alert from '../components/Alert.jsx';

const CartPage = () => {
	// using the useCart hook to access the cart state	
    const { state, dispatch } = useCart();
	const { cartItems } = state;
	
	// ---------------------------------------------------------------//
	// Functions for handling actions in the cart item

	// 1. handling item increment and decrement functionality
	const handleIncrement = (item) => {
		dispatch({ type: 'INCREMENT_CART_ITEM', payload: item });
	}
	const handleDecrement = (item) => {
		dispatch({ type: 'DECREMENT_CART_ITEM', payload: item });
	}
				//----------------//
	// 2. handling the quantity input functionality
	const [quantityInput, setQuantityInput] = useState({}); // state to store the quantity input
	const handleQuantityChange = (itemId, value) => {
		setQuantityInput((prevQuantity) => ({
			...prevQuantity,
			[itemId]: value
		}));
	}; 
	const handleConfirmQuantity = (item) => {
		const confirmedQuantity = parseFloat(quantityInput[item.id]) || item.quantity ; // Ensure the value is a positive integer
		// dispatch the action to update the quantity
		dispatch({ type: 'SET_CART_ITEM_QUANTITY', payload: { item, quantity: confirmedQuantity } }); 
	}

				//----------------//
	// 3. handling remove item functionality
	const handleRemoveItem = (item) => {
		dispatch({ type: 'REMOVE_FROM_CART', payload: item });
	}
	// ---------------------------------------------------------------//

	// handling the checkout and clear cart functionality
	const showAlert = useAlert();
	const handleCheckout = () => {
		showAlert('Successfully purchased the items', 'success');
		dispatch({ type: 'CLEAR_CART' });
	}
	const handleClearCart = () => {
		dispatch({ type: 'CLEAR_CART' });
		showAlert('Shopping Cart cleared', 'success');
	}
	

	// rendering the CartPage
    return (

		<Container>
			<Wrapper>
				<Alert />
				<Heading>Your Cart</Heading>
				<Layout>
					{/* Items List on left Side */}
					<ItemsList>
						{
							// mapping through the unique items and displaying them in the cart
							cartItems.length > 0 
								// if there are items in the cart, display them
								? cartItems.map((item) => (
									<Item key={item.id}>
										<div className="img-wrapper">
											<img src={item.image} alt={item.title} />
										</div>
										<div className='info'>
											<p className='title'>{item.title}</p>
											<p className='price'>Price: {item.price} $</p>
											<hr />
											<div className="quantity">
												<ActionBtn className='increment' onClick={() => handleDecrement(item)}>
													-
												</ActionBtn>
												<span className='value'>
													Quantity : <span className="count">{item.quantity}</span> 
												</span>												
												<ActionBtn className='decrement' onClick={() => handleIncrement(item)}>
													+
												</ActionBtn>
											</div>

											<hr />

											<div className="insert-quantity">
												<label htmlFor="qty-ip"> Or Insert your quantity : </label>
												<input 
													id='qty-ip'
													type="text"
													placeholder='Quantity'
													value={quantityInput[item.id] || ''}
													onChange={(e) => handleQuantityChange(item.id, e.target.value)} />

												<ActionBtn onClick={() => handleConfirmQuantity(item)}>
													Confirm
												</ActionBtn>
											</div>
											
											<div className="footer">
												<span>
													{/* calculating the total price of the item based on quantity */}
													Total : {parseFloat(parseFloat(item.price) * item.quantity).toFixed(2)} $
												</span>
												<ActionBtn className="remove" onClick={() => handleRemoveItem(item)}>
													Remove
												</ActionBtn>
											</div>
											
										</div>										
									</Item>
								))
								// if the cart is empty, display a message
								: <p>Your cart is empty</p>
						}
					</ItemsList>

					{/* Summary section on right Side */}
					<Summary>
						<h2 className='summary-title'>Cart Summary</h2>
						<div className="summary-content">
							<p className='total'>
								{/* calculating the total price of the items in the cart */}
								Total: {parseFloat(cartItems.reduce((acc, item) => acc + parseFloat(item.price) * item.quantity, 0)).toFixed(2)} $ 
							</p>
							<p className='total'>Items: {cartItems.reduce((total, item) => total + item.quantity, 0)}</p>
						</div>

						<div className="summary-buttons">
							<ActionBtn className='checkout' onClick={handleCheckout}>Checkout</ActionBtn>
							<ActionBtn className='clear' onClick={handleClearCart}>Empty</ActionBtn>
						</div>
					</Summary>
				</Layout>
				<FooterAbsolute>
					<Footer />
				</FooterAbsolute>
			</Wrapper>
		</Container>

	)
}

export default PageTransition(CartPage)

/* eslint-disable no-case-declarations */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
// CartContext.js
import { createContext, useContext, useReducer, useEffect,  } from 'react';

// Reducer function to handle state changes
const cartReducer = (state, action) => {
    switch (action.type) {
		// Adding item to cart
        case 'ADD_TO_CART':
			// Check if item already exists in cart
			const existingCartItem = state.cartItems.find(
				(item) => item.id === action.payload.id
			);

			if (existingCartItem) {
				// If item exists, increment quantity
				const updatedCartItems = state.cartItems.map((item) =>
					item.id === action.payload.id
						? { ...item, quantity: item.quantity + 1 }
						: item
				);
				localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
				return {
					...state,
					cartItems: updatedCartItems,
				};
			} else {
				// If item does not exist, add to cart with quantity 1
				const updatedCartItems = [
					...state.cartItems,
					{ ...action.payload, quantity: 1 },
				];
				localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
				return {
					...state,
					cartItems: updatedCartItems,
				};
			}
		
		
		// Increment cart item
		case 'INCREMENT_CART_ITEM':
			const updatedItems = state.cartItems.map((item) =>
			item.id === action.payload.id
				? { ...item, quantity: item.quantity + 1 }
				: item
			);
			localStorage.setItem('cartItems', JSON.stringify(updatedItems));
			return {
				...state,
				cartItems: updatedItems
			};
		
			
		// Decrement cart item
		case 'DECREMENT_CART_ITEM':
			const decrementedItems = state.cartItems.map(item => {
				if (item.id === action.payload.id) {
					return {
						...item,
						quantity: item.quantity - 1
					};
				}
				return item;
			}).filter(item => item.quantity > 0);
			localStorage.setItem('cartItems', JSON.stringify(decrementedItems));
			return {
				...state,
				cartItems: decrementedItems
			};
		
		
		// Set cart item quantity
		case 'SET_CART_ITEM_QUANTITY':
			const updatedCart = state.cartItems.map((item) =>
				item.id === action.payload.item.id ? { ...item, quantity: parseInt(action.payload.quantity) } : item
			);

			localStorage.setItem('cartItems', JSON.stringify(updatedCart));

			return {
				...state,
				cartItems: updatedCart,
			};
		// Remove item from cart
		case 'REMOVE_FROM_CART':
			const filteredCart = state.cartItems.filter(
				(item) => item.id !== action.payload.id
				);
			localStorage.setItem('cartItems', JSON.stringify(filteredCart));
			return {
				...state,
				cartItems: filteredCart,
			};
					
		
		// Clear cart
		case 'CLEAR_CART':
			localStorage.removeItem('cartItems');
			return {
				...state,
				cartItems: [],
			};
		
		
		// Set cart items from localStorage
		case 'SET_CART_ITEMS':
		return {
			...state,
			cartItems: action.payload,
		};
		default:
        return state;
    }
};

// Create context
const CartContext = createContext();

// Custom hook to access the context
const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

// CartProvider component to wrap your app and provide the context
const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, { cartItems: [] });

    useEffect(() => {
      // Load cart items from localStorage on component mount
      const savedCartItems = localStorage.getItem('cartItems');
    //   console.log('Saved Cart Items:', savedCartItems);
      if (savedCartItems) {
        dispatch({
          type: 'SET_CART_ITEMS',
          payload: JSON.parse(savedCartItems),
        });
      }
    }, []); // Empty dependency array ensures it runs only once on mount

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, useCart };

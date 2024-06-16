/* eslint-disable react/prop-types */

// importing the useCart hook from the cartContext
import { useCart } from "../contexts/cartContext";
// importing the styled components
import {
    Dropdown,
    CartItems,
    GoToCart,
    CartItem
    } from "../styles/components/Dropdowns.styled";

// Importing Trash Icon
import { FaTrash } from "react-icons/fa6";

const CartDropdown = ({expanded}) => {
    // using the useCart hook to access the cart state
    const { state, dispatch } = useCart();
	const { cartItems } = state;
    
    // Clear cart functionality
    const clearCart = (e) => {
        // preventing the event from propagating to the parent elements so that the dropdown doesn't close
        e.stopPropagation();
        // dispatching the CLEAR_CART action
        dispatch({ type: "CLEAR_CART" });
    };
    
    // rendering the Cart Dropdown  with the expanded prop
    return (
        <>
            {/* expanded is a boolean prop for the dropdown state */}
            <Dropdown $type='cart' $isOpen={expanded}>
                <h2 className="title">Your Cart</h2>
                <CartItems>
                    {cartItems.length > 0
                        // if the cart is not empty, display the items
                        ? cartItems.map((item) => (
                            <CartItem key={item.id}>
                                <img src={item.image} alt={item.title} />
                                <div className="info">
                                    <p className="title">{item.title}</p>
                                    <p className="price">Price: {item.price} $</p>
                                    <p className="quantity">
                                        Quantity: <span className="count">{item.quantity}</span>
                                    </p>
                                </div>
                            </CartItem>
                        ))
                        // if the cart is empty, display a message
                        : <p className="empty">Your cart is empty</p>
                    }
                </CartItems>
                <div className="cart-btns">
                    <GoToCart to="/cart">Go to Cart</GoToCart>
                    <button className="clear" onClick={(e) => clearCart(e)}>
                        <FaTrash className="trash" />
                        <p className="txt">Clear</p>
                    </button>
                </div>
            </Dropdown>
        </>
    );
}

export default CartDropdown

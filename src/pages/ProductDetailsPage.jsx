/* eslint-disable react-refresh/only-export-components */

// importing the PageTransition component
import PageTransition from '../components/PageTransition.jsx';

// importing the useParams hook from react-router-dom
import { useParams } from 'react-router-dom';
// importing the useAuth hook from the authContext
import { useAuth } from "../contexts/authContext.jsx";
// importing the useCart hook from the cartContext
import { useCart } from "../contexts/cartContext.jsx";
// importing the useSaved hook from the favoritesContext
import { useSaved } from "../contexts/favoritesContext.jsx";
// importing Alert context and Alert component
import { useAlert } from "../contexts/alertContext.jsx";

// importing the laptops data from json file
import laptopsData from '../assets/db/laptops.json';

// importing the heart icon from react-icons/fa6
import { FaHeart, FaCartShopping } from "react-icons/fa6";

// importing styled components
import {ProductDetailsWrapper, Card} from '../styles/pages/ProductDetails.styled.js';
import { FooterAbsolute } from '../styles/pages/CartAndSaved.styled.js';
import Footer from '../components/Footer.jsx';
import Alert from '../components/Alert.jsx';
// getting the laptops array from the laptopsData josn file
const laptops = laptopsData;

// getting the selected product id from the url params
const ProductDetailsPage = () => {
    const { productId } = useParams();
    const product = laptops.find((item) => item.id ==productId);

    // using the useContext hook to access the alert state
    const showAlert = useAlert();

    // using the useAuth hook to access the user state for checking if the user is signed in
    const { user } = useAuth();
    
    // Adding items to the cart using the useCart hook dispatch
    const { dispatch: cartDispatch } = useCart();
    const addToCart = () => {
        if (user) {
            cartDispatch({ type: 'ADD_TO_CART', payload: product });
            showAlert("Item added to the cart", "success");
        } else {
            showAlert("Please sign in to add items to the cart", "danger");
        }
    };
    
    // Adding items to the saved items using the useSaved hook dispatch
    const { dispatch: savedDispatch } = useSaved();
    const addToSaved = () => {
        if (user) {
            savedDispatch({ type: 'ADD_TO_SAVED', payload: product });
            showAlert("Item added to the saved items list", "success");
        } else {
            showAlert("Please sign in to add items to the saved list", "danger");
        }
    }


    return (
        <>
            <ProductDetailsWrapper>
                <Card>
                    <div className="left">
                        <h1 className="wordmark">
                            TAP <br /> STORE
                        </h1>
                    </div>
                    <div className="right">
                        <img src={product.image} alt={product.title} className='item-img'/>
                        <div className="info">
                            <div className="top">
                                <h1 className="item-name">{product.title}</h1>
                                <h3 className="item-price">{product.price} $</h3>
                                <p className="item-desc">{product.description}</p>
                            </div>
                            <div className="middle">
                                <p className="item-brand">Brand : {product.brand}</p>
                                <p className="item-category">Category : {product.category}</p>
                                <div className="rating">
                                    <div className="stars">
                                        {Array(product.rating).fill().map((_, i) => (
                                            <span key={i}>⭐</span>
                                        ))}
                                    </div>
                                    <div className="reviews">
                                        {product.reviews} reviews
                                    </div>
                                </div>
                            </div>
                            <div className="bottom">
                                <button className="add-to-cart" onClick={addToCart} >
                                    <FaCartShopping />
                                    <span>Add to Cart</span>
                                </button>
                                <button className="add-to-saved" onClick={addToSaved} >    
                                    <FaHeart />
                                    <span>Add to Wishlist</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </Card>
                <Alert/>
                <FooterAbsolute>
                    <Footer />
                </FooterAbsolute>
            </ProductDetailsWrapper>
        </>
    )
}

export default PageTransition(ProductDetailsPage)

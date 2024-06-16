/* eslint-disable react/prop-types */

// importing the useAuth hook from the authContext
import { useAuth } from "../contexts/authContext.jsx";
// importing the useCart hook from the cartContext
import { useCart } from "../contexts/cartContext.jsx";
// importing the useSaved hook from the favoritesContext
import { useSaved } from "../contexts/favoritesContext.jsx";
// importing Alert context and Alert component
import { useAlert } from "../contexts/alertContext.jsx";

// importing the styled components
import { 
    Card,
    ImageWrapper,
    CardImage,
    CardData,
    CardTitle,
    CardPrice,
    CardDescription,
    ButtonsWrapper,
    CardButton,
    InfoButton,
    } from '../styles/components/ProductCard.styled';
    
// importing the cart and favorite icons
import cartIcon from "/images/svg/cart.svg"
import favIcon from "/images/svg/favorite.svg"
import infoIcon from "/images/svg/info.svg"




const ProductCard = ({item}) => {
    // using the useContext hook to access the alert state
    const showAlert = useAlert();

    // using the useAuth hook to access the user state for checking if the user is signed in
    const { user } = useAuth();
    
    // Adding items to the cart using the useCart hook dispatch
    const { dispatch: cartDispatch } = useCart();
    const addToCart = () => {
        if (user) {
            cartDispatch({ type: 'ADD_TO_CART', payload: item });
            showAlert("Item added to the cart", "success");
        } else {
            showAlert("Please sign in to add items to the cart", "danger");
        }
    };
    
    // Adding items to the saved items using the useSaved hook dispatch
    const { dispatch: savedDispatch } = useSaved();
    const addToSaved = () => {
        if (user) {
            savedDispatch({ type: 'ADD_TO_SAVED', payload: item });
            showAlert("Item added to the saved items list", "success");
        } else {
            showAlert("Please sign in to add items to the saved list", "danger");
        }
    }

    // rendering the ProductCard using the item prop passed from the parent component
    return (
        <Card>
            <ImageWrapper className='img-wrapper'>
                <CardImage src={item.image} alt="laptop" className='card-img' />  
            </ImageWrapper>
            <CardData className='card-data'>
                <CardTitle className='card-title'>
                    {item.title}
                </CardTitle>
                <CardPrice className='card-price'>
                    {item.price} $ 
                </CardPrice>
                <CardDescription className='card-desc'>
                    {item.description} 
                </CardDescription>
                <ButtonsWrapper>
                    <InfoButton className='card-btn' to={`/product/${item.id}`} >
                        <span className="IconContainer">
                            <img src={infoIcon} alt="cart" className='cart-icon' />
                        </span>
                        <p className="btn-text">Show Details</p>
                    </InfoButton>
                    
                </ButtonsWrapper>
                <ButtonsWrapper>
                    <CardButton className='card-btn' onClick={addToCart} >
                        <span className="IconContainer">
                            <img src={cartIcon} alt="cart" className='cart-icon' />
                        </span>
                        <p className="btn-text">Add to Cart</p>
                    </CardButton>
                    <CardButton className='card-btn' onClick={addToSaved}>
                        <span className="IconContainer">
                            <img src={favIcon} alt="fav" className='cart-icon'/>
                        </span>
                        <p className="btn-text">Save</p>
                    </CardButton>
                </ButtonsWrapper>
            </CardData>
        </Card>
    );
};

export default ProductCard;


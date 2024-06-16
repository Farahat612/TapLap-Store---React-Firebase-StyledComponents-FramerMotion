/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

// importing the useAuth hook from the authContext for determining whether the user is logged in or not
import { useAuth } from "../contexts/authContext";
// importing the needed functions from the firebase for logging out functionality
import { signOut } from "firebase/auth";
import {auth} from "../config/firebase";
// importing the useCart hook from the cartContext for clearing the cart when the user logs out
import { useCart } from "../contexts/cartContext.jsx";
// importing the styled components
import { Dropdown } from "../styles/components/Dropdowns.styled";



const ProfileDropdown = ({expanded}) => {
    // using the useAuth hook to access the user state
    const { user } = useAuth();

    // using the useCart hook to access the cart dispatch function for clearing the cart
    const { dispatch } = useCart();
    
    // function to log out the user
    const logOut = async () => {
        // clearing the cart when the user logs out
        localStorage.removeItem('cartItems');
        dispatch({ type: 'CLEAR_CART' });
        // logging out the user
		try {
			await signOut(auth);
		} 
		catch (error) {
			console.error(error);
		}
	}

    // rendering the Profile Dropdown with the expanded prop
    return (
        <>
            {/* expanded is a boolean prop for the dropdown state */}
            <Dropdown $type='profile' $isOpen={expanded}>
                <div className="profile-btns">
                    {user
                        // if the user is logged in, display the logout button
                        ? <Link onClick={logOut} className="nav-btn"> Logout</Link>
                        // if the user is not logged in, display the login button
                        : <Link to="/auth" className="nav-btn"> Login</Link>
                    }
                    
                    <Link to="/saved" className="nav-btn"> 
                        &#9829; Saved
                    </Link>
                
                </div>
            </Dropdown>
        </>
    )
}

export default ProfileDropdown

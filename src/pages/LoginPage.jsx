/* eslint-disable react-refresh/only-export-components */


import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import PageTransition from '../components/PageTransition.jsx';


// importing firebase authentication
import { auth, googleProvider, gitHubProvider, twitterProvider } from "../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";

// importing styled components
import { 
    PageWrapper,
    FormsWrapper,
    Forms,
    Form,
    SocialIcon,
    PanelsWrapper,
    Panel,
} from "../styles/pages/Login.styled.js";

// importing react-icons
import { FaUser, FaGoogle, FaGithub, FaEnvelope} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { PiPasswordFill } from "react-icons/pi";

// importing SVGs
import SigninSVG from "/images/svg/signin.svg";
import SignupSVG from "/images/svg/signup.svg";



// user information [for To Do --> store user specific data]
const userInfo = {};

const LoginPage = () => {
    // tracking and toggling the mode of the form
    const [mode, setMode] = useState('signin');
    const changeMode = () => {
        setMode((prevMode) => (prevMode === 'signin' ? 'signup' : 'signin'));
    }

    // tracking the input fields
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // for navigating to the home page after successful sign in and sign up
    const navigate = useNavigate();
    // handling sign up and sign in using firebase authentication
    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            navigate('/');
            userInfo.username = username;
            userInfo.email = email;
            userInfo.password = password;
        } 
        catch (error) {
            console.error(error);
        } 
    }
    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password)
            navigate('/');
        } 
        catch (error) {
            console.error(error);
        } 
    }
    const signInWithGoogle = async (e) => {
        e.preventDefault();
        try {
            await signInWithPopup(auth, googleProvider);
            navigate('/');
        } 
        catch (error) {
            console.error(error);
        }
    }
    const signInWithGitHub = async (e) => {
        e.preventDefault();
        try {
            await signInWithPopup(auth, gitHubProvider);
            navigate('/');
        } 
        catch (error) {
            console.error(error);
        }
    }
    const signInWithTwitter = async (e) => {
        e.preventDefault();
        try {
            await signInWithPopup(auth, twitterProvider);
            navigate('/');
        } 
        catch (error) {
            console.error(error);
        }
    }



    return (
        <PageWrapper $mode ={mode}>
            <FormsWrapper>
                <Forms $mode={mode}>
                    <Form $formType='signin' $mode={mode} >
                        <h2 className="form-title">Sign in</h2>
                        <div className="input-field">
                            <i><FaUser /></i>
                            <input type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="input-field">
                            <i><PiPasswordFill /></i>
                            <input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <input className="submit-btn" type='submit' value='Sign in' onClick={(e) => handleSignIn(e)}/>
                        <p className="social-txt">Or Sign in with social platforms</p>
                        <div className="social-media">
                            <SocialIcon onClick={signInWithGoogle}><FaGoogle /></SocialIcon>
                            <SocialIcon onClick={signInWithGitHub}><FaGithub /></SocialIcon>
                            <SocialIcon onClick={signInWithTwitter}><FaXTwitter /></SocialIcon>
                        </div>
                    </Form>
                    <Form $formType='signup' $mode={mode} >
                        <h2 className="form-title">Sign Up</h2>
                        <div className="input-field">
                            <i><FaUser /></i>
                            <input type='text' placeholder='Username' onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className="input-field">
                            <i><FaEnvelope /></i>
                            <input type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="input-field">
                            <i><PiPasswordFill /></i>
                            <input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <input className="submit-btn" type='submit' value='Sign Up' onClick={(e) => handleSignUp(e)}/>
                        <p className="social-txt">Or Sign in with social platforms</p>
                        <div className="social-media">
                            <SocialIcon onClick={signInWithGoogle}><FaGoogle /></SocialIcon>
                            <SocialIcon onClick={signInWithGitHub}><FaGithub /></SocialIcon>
                            <SocialIcon onClick={signInWithTwitter}><FaXTwitter /></SocialIcon>
                        </div>
                    </Form>
                </Forms>
            </FormsWrapper>

            <PanelsWrapper>
                <Panel $placement='left' $mode={mode}>
                    <div className="panel-content">
                        <h3>New in our store?</h3>
                        <p>Register and enjoy the best deals ever on our collection of laptops.</p>
                        <button className="panel-btn" onClick={changeMode}>Sign Up</button>
                    </div >
                    <img className="panel-img" src={SignupSVG} alt='signup' />
                </Panel>
                <Panel $placement='right' $mode={mode}>
                    <div className="panel-content">
                        <h3>One of us?</h3>
                        <p>If you already have an account, just sign in. We missed you!</p>
                        <button className="panel-btn" onClick={changeMode}>Sign In</button>
                    </div>
                    <img className="panel-img" src={SigninSVG} alt='signin' />
                </Panel>
            </PanelsWrapper>
        </PageWrapper>
    );
}


export default PageTransition(LoginPage);


export {userInfo}

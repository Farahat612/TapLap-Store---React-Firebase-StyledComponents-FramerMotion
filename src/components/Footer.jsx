// importing the styled components
import {FooterContainer} from "../styles/components/Footer.styled"
// importing the logo image
import LogoImg from "/images/logo/logo.png";


const Footer = () => {
    return (
        <>
            <FooterContainer>
                <img src={LogoImg} alt="" className="logo" />
                <p className="copy-rights">
                    &copy; 2023, All rights reserved
                </p>
            </FooterContainer> 
        </>
    )
}

export default Footer

/* eslint-disable react-refresh/only-export-components */
import PageTransition from '../components/PageTransition.jsx';


import { Container } from '../styles/utilities/layout-utilities.styles';

import HeroCarousel from '../components/HeroCarousel';
import Products from '../components/Products';
import Footer from '../components/Footer';



const HomePage = () => {

  return (
    <>
		<HeroCarousel/>
		<Container>
			<Products itemsPerPage={8}/>
		</Container>
    <Footer />
    </>
  )
}

export default PageTransition(HomePage)

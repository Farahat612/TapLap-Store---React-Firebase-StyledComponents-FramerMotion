/* eslint-disable no-unused-vars */
import { Routes, Route, useLocation } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import CartPage from './pages/CartPage';
import NotFoundPage from './pages/NotFoundPage';
import SavedItemsPage from './pages/SavedItemsPage';
import ProductDetailsPage from './pages/ProductDetailsPage';

import Navbar from './components/Navbar';

import { AuthProvider } from './contexts/authContext';
import { CartProvider } from './contexts/cartContext';
import { SavedProvider } from './contexts/favoritesContext';

import {AlertProvider} from './contexts/alertContext';




const App = () => {

    const location = useLocation();

    return (
        <>
            <AuthProvider>
                <CartProvider>
                    <SavedProvider>
                        <AlertProvider>
                            <Navbar />
                            <AnimatePresence mode='wait'>
                                <Routes location={location} key={location.pathname}>
                                    <Route path="/" element={<HomePage />} />
                                    <Route path="/auth" element={<LoginPage />} />
                                    <Route path="/cart" element={<CartPage />} />
                                    <Route path="/saved" element={<SavedItemsPage />} />
                                    <Route path="/product/:productId" element={<ProductDetailsPage/>} />
                                    <Route path="/*" element={<NotFoundPage />} />
                                </Routes>
                            </AnimatePresence>
                        </AlertProvider>
                    </SavedProvider>
                </CartProvider>
            </AuthProvider>
        </>
    );
};

export default App;

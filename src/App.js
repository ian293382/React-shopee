import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import ProductCollectionPage from './pages/ProductCollectionPage';
import ProductPage from './pages/ProductPage';
import ScrollToTop from './components/common/ScrollToTop';
import { AuthProvider } from './components/auth/AuthContext';
import LoginPage from './pages/LoginPage';

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Navigate to="/mall" replace />} />
          <Route path="/mall" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/mall/:categoryName" element={<ProductCollectionPage />} />
          <Route path="/:productName" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

import './App.css';
import React, { useContext, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, json } from 'react-router-dom';
import Shop from './components/Shop/Shop';
import Header from './components/Header/Header';
import Cart from './components/Cart/Cart';
import Recipes from './components/Recipes/Recipes';
import About from './components/About/About';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import { createContext } from 'react';
import { AuthProvider } from './components/Auth/AuthProvider';
import ProtectedRoute from './components/Auth/ProtectedRoute';

export const CartContext = createContext(null);

function App() {
  const [cartItems, setCartItems] = useState([]);

  const cart = {
    cartItems: cartItems,
    setCartItems: (value) => {
      setCartItems((oldItems) => [...oldItems, value]);
    },
    buyItems: () => {
      let orders = [];
      if(localStorage.getItem('orders') !== null) {
        orders = JSON.parse(localStorage.getItem('orders'))
      } 
      orders.push(cartItems)
      localStorage.setItem('orders', JSON.stringify(orders));
      setCartItems([]);
    }
  };

  return (
    <AuthProvider>
      <Router>
        <CartContext.Provider value={cart}>
          <Header cartItems={cartItems} />
        </CartContext.Provider>
        <Routes>
          <Route
            path="/"
            element={
              <CartContext.Provider value={cart}>
                <Shop />
              </CartContext.Provider>
            }
          />
          <Route path="/opskrifter" element={<Recipes />} />
          <Route path="/omos" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/kurv"
            element={
              <CartContext.Provider value={cart}>
                <Cart />
              </CartContext.Provider>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

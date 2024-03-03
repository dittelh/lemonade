import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Shop from './components/Shop/Shop';
import Header from './components/Header/Header';
import Cart from './components/Cart/Cart';
import Recipes from './components/Recipes/Recipes';
import About from './components/About/About';
import { createContext } from 'react';

export const CartContext = createContext(null);

function App() {
  const [cartItems, setCartItems] = useState([]);

  const cart = {
    cartItems: cartItems,
    setCartItems: (value) => {
      setCartItems((oldItems) => [...oldItems, value]);
    },
    buyItems: () => {
      setCartItems([]);
    },
  };

  return (
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
  );
}

export default App;

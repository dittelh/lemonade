import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Shop from './components/Shop/Shop';
import Header from './components/Header/Header';
import Cart from './components/Cart/Cart';
import Recipes from './components/Recipes/Recipes';
import About from './components/About/About';

function App() {
  const [cartCount, setCartCount] = useState(0);

  const updateCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <Router>
      <Header cartCount={cartCount} />
      <Routes>
        <Route  path="/" element={<Shop updateCart={updateCart}/>} />
        <Route path="/opskrifter" element={<Recipes />} />
        <Route path="/omos" element={<About />} />
        <Route path="/kurv" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;

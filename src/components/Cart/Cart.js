import React from 'react';
import { CartContext } from '../../App';
import { useContext } from 'react';
import ShopItem from '../Shop/ShopItem';

const Cart = () => {
  const cart = useContext(CartContext);
  var totalPrice = 0;
  console.log(cart.cartItems)
  for (let i = 0; i < cart.cartItems.length; i++) {
    totalPrice += cart.cartItems[i].price;
  }

  if (cart.cartItems.length === 0) {
    return (
      <div className="container mt-5 pt-5">
        <p>Der er ikke lagt nogle lækkerier i kurven endnu {':-('}</p>
      </div>
    );
  }

  return (
    <div className="container row mt-5 pt-5">
      {cart.cartItems.map((item, i) => (
        <div key={i} className="col-6 col-lg-3 mb-5">
          <ShopItem key={item.id} item={item} />
        </div>
      ))}
      <p>Pris i alt: {totalPrice} kr.</p>
    </div>
  );
};

export default Cart;

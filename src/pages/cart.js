import React from "react";
import { useContext } from "react";
import { CartContext } from "../components/CartContext";

const Cart = () => {
  const cart = useContext(CartContext);

  return (
      <React.Fragment>
     { cart.cartList.length === 0 ? <p> No products in your cart</p> : cart.cartList.map((list) => <p>{list.name}</p>   )}
      </React.Fragment> );
}

export default Cart;
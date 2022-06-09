import React from "react";
import { useContext } from "react";
import { CartContext } from "../components/CartContext";

function Cart() {
  const cart = useContext(CartContext)

  return (
      <>
     {
       cart.lenght === 0 ? <p> No products in your cart</p> : cart.map((item)=>{
      <p>{item.name}</p> 
       })    }
      </>

  );
}

export default Cart;
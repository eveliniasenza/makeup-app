import { createContext , useState} from "react";
import React from 'react'

export const CartContext= createContext();


const CartContextProvider = ({children}) => {
    const addToCart = (list) => {
        setCartList([...cartList, list])
    }

    const calcItemsQty = () => {
       cartList.length()
    }

    const [cartList, setCartList] = useState([
        {
            "id": 3,
            "name": "rubor",
            "shopId": "MAC",
            "imgUrl": ""
        
          }
    ])
    return(
        <CartContext.Provider value={{cartList, addToCart, calcItemsQty}}>
        {children}
        </CartContext.Provider>   
    )
 
}

export default CartContextProvider
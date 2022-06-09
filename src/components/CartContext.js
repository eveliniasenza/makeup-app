import { createContext , useState} from "react";

export const CartContext= createContext();


const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([
        {
            "id": 3,
            "name": "rubor",
            "shopId": "MAC",
            "imgUrl": ""
        
          }
    ])
    return(
        <CartContext.Provider value={cartList}>
        {children}
        </CartContext.Provider>   
    )
 
}

export default CartContextProvider
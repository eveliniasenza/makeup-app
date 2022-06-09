import React from "react";
import { AppRouter } from "./Routes/routes";
import { BrowserRouter } from "react-router-dom";
import NavBar from './components/NavBar'
import CartContext from "./components/CartContext";

const App = () => {
  return (
    <>
    <CartContext.Provider value={"cart"}>
      <BrowserRouter>
        <NavBar />
        <AppRouter />
      </BrowserRouter>
    </CartContext.Provider>
    </>

  );
};

export default App;
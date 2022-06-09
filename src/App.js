import React from "react";
import { AppRouter } from "./Routes/routes";
import { BrowserRouter } from "react-router-dom";
import NavBar from './components/NavBar'
import CartContextProvider from "./components/CartContext";

const App = () => {
  return (
    <>
      <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <AppRouter />
      </BrowserRouter>
      </CartContextProvider>
    </>

  );
};

export default App;
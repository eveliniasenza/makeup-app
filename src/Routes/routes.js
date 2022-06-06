import { Route, Routes } from "react-router-dom";
import React from "react";
import ItemList from "../pages/itemList";
import DetailItemContainer from "../components/DetailitemContainer";
import Cart from '../pages/cart'

export const AppRouter = () => {
  return (

    <Routes>
      <Route path="/" element={<ItemList />} />
      <Route path="/listDetail" element={<DetailItemContainer />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};
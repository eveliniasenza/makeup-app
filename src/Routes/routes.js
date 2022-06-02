import { Route, Routes } from "react-router-dom";
import React from "react";
import ItemList from "../pages/itemList";
import ItemDetailList from "../pages/itemDetail";
import DetailItemContainer from "../components/DetailitemContainer";

export const AppRouter = () => {
  return (

    <Routes>
      <Route path="/" element={<ItemList />} />
      <Route path="/listDetail" element={<DetailItemContainer />} />
    </Routes>
  );
};
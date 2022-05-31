import {Route, Routes} from "react-router-dom";
import React from "react";
import ItemList from "../pages/itemList";
import ItemDetailList from "../pages/itemDetail";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<ItemList />} />
      <Route path="/itemDetail" element={<ItemDetailList/>} />
    </Routes>
  );
};

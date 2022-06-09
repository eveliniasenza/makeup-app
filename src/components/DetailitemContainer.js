import React, { useState, useEffect, useContext } from "react";
import customFetch from '../utils/customFetch';
import CartContext from "./CartContext";
import ItemDetail from './ItemDetail';

const { makeUp } = require('../makeUp')

function DetailItemContainer() {
  const [list, setList] = useState({});
  const cart = useContext(CartContext)

  useEffect(() => {
    customFetch(2000, makeUp)
      .then(result => setList(result.find(item => item.id === 1)))
      .catch(err => console.log(err));

  }, []);

  return (
    <>
      <ItemDetail list={list} />
    </>

  );
}

export default DetailItemContainer;
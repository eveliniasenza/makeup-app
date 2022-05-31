import React, { useState, useEffect } from "react";
import customFetch from '../utils/customFetch';
import ItemDetail from './ItemDetail';

const {makeUp} = require('../makeUp')

function DetailItemContainer() {
  const [list, setList] = useState([]);

  useEffect(() => {
      customFetch(2000, makeUp)
      .then(result => setList(result.find(item => item.id === 1)))
      .catch(err => console.log(err));

  }, []);
   
  return (
      <>
        <ItemDetail list={list}/>
      </>

  );
}

export default DetailItemContainer;
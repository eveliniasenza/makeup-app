import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea} from '@mui/material';
import Counter from "../components/Counter"
import React, { useState, useEffect } from "react";
import customFetch from '../utils/customFetch';

const {makeUp} = require('../makeUp')

function Item() {
  const [list, setList] = useState([]);

  useEffect(() => {
      customFetch(2000, makeUp)
      .then(result => setList(result))
      .catch(err => console.log(err));
  }, []);

  
  return (
      <>
        {list?.map((item) => (
  <Card sx={{ maxWidth: 345 , marginBottom: 10}}>
     <CardActionArea>
         <CardContent>
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.shopId}</p>
            <Counter/>
          </div>   
        </CardContent> 
    </CardActionArea>
    </Card>
        ))}  
      </>

  );
}

export default Item;
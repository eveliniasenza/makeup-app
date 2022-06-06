
   
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import React, { useState } from "react";
import  Counter from '../components/Counter'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';




export const ItemDetail = ({ list }) => {
 const [itemCount, setItemCount] = useState(0)


const handleClik = (qyt) =>
{
   alert('Ha agregado los elementos al carrito');
   setItemCount(qyt);
}

  return (
    <>
      <Card sx={{ maxWidth: 345, marginBottom: 10 }}>
        <CardActionArea>
          <CardContent>
            <div key={list.id}>
              <h3>{list.name}</h3>
              <p>{list.shopId}</p>
              <Counter/>
            </div>
          </CardContent>
           { itemCount === 0 ? 
           <Button onClick={handleClik}>
                ADD TO CART
              </Button>
              : <Link to="/cart">
               <Button>
              CHECKOUT
              </Button>
              </Link>}
        </CardActionArea>
      </Card>


    </>

  );
}

export default ItemDetail;
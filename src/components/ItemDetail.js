
   
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import React from "react";

export const ItemDetail = ({ list }) => {
  return (
    <>
      <Card sx={{ maxWidth: 345, marginBottom: 10 }}>
        <CardActionArea>
          <CardContent>
            <div key={list.id}>
              <h3>{list.name}</h3>
              <p>{list.shopId}</p>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>


    </>

  );
}

export default ItemDetail;
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea} from '@mui/material';
import React from "react";

  export const ItemDetail = ({list}) => {
  return (
      <>
        {list?.map((item) (
  <Card sx={{ maxWidth: 345 , marginBottom: 10}}>
     <CardActionArea>
         <CardContent>
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.shopId}</p>
          </div>   
        </CardContent> 
    </CardActionArea>
    </Card>
        ))}  
      </>

  );
}

export default ItemDetail;
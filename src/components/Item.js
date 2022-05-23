import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea} from '@mui/material';
import Counter from "../components/Counter"
import React, { useState, useEffect } from "react";
import Axios from "axios";

function Item() {
  const [list, setList] = useState([]);

  useEffect(() => {
    setTimeout(() => {
    Axios({
      url: "https://jsonplaceholder.typicode.com/posts",
    })
      .then((response) => {
        setList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
      }, 2000);
  }, [setList]);


  
  return (
      <>
        {list.map((item) => (
  <Card sx={{ maxWidth: 345 , marginBottom: 10}}>
     <CardActionArea>
         <CardContent>
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
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
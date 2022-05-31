import * as React from 'react';
import Grid from '@mui/material/Grid';
import Item from '../components/Item';
import { Link } from "react-router-dom";

export default function ItemList() {
  return (
<Grid item xs={2} sm={4} md={4}>
<Link to="/listDetail">
			<Item/> 	
		</Link>
  </Grid>
  );
}



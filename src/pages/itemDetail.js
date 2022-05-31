import * as React from 'react';
import Grid from '@mui/material/Grid';
import DetailItemContainer from '../components/DetailitemContainer'

export default function ItemDetailList() {
  return (
<Grid item xs={2} sm={4} md={4}>
<DetailItemContainer/> 
  </Grid>
  );
}



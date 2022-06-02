
import * as React from 'react';
import Grid from '@mui/material/Grid';
import DetailItemContainer from './DetailitemContainer'

export default function ItemList() {
  return (
<Grid item xs={2} sm={4} md={4}>
<DetailItemContainer/> 
  </Grid>
  );
}

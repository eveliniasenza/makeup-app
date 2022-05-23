import * as React from 'react';
import Item from './Item';
import Grid from '@mui/material/Grid';

export default function ItemList() {
  return (
<Grid container paddingTop={10} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
  {Array.from(Array(6)).map((_, index) => (
    <Grid item xs={2} sm={4} md={4} key={index}>
      <Item/>
    </Grid>
  ))}
</Grid>

  );
}



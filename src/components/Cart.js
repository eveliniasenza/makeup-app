import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import Counter from "../components/Counter"
import Grid from '@mui/material/Grid';

export default function MultiActionAreaCard() {
  return (
      <Grid container rowSpacing={1} margin={10} paddingLeft={20} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={6}> 
        <Card sx={{ maxWidth: 345 , marginBottom: 10}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://getthelookar.vteximg.com.br/arquivos/ids/161537-1000-1000/218919_delineador-de-ojos-rimmel-wonder-ink_imagen-1.jpg?v=637384507942000000"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           Delineador
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Counter/>
      </CardActions>
    </Card>
  </Grid>
  <Grid item xs={6}>
   <Card sx={{ maxWidth: 345 ,  marginBottom: 10}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://www.cosmeticsparagon.com/wp-content/uploads/2018/07/mac-blush-pro-longwear-big.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Rubor
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        <Counter/>
        </CardActions>
      </Card>
  </Grid>
  <Grid item xs={6}>
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://s1.eestatic.com/2020/05/18/actualidad/actualidad_490962412_152168522_1706x960.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Labial
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Counter/>
      </CardActions>
    </Card>
  </Grid>
  <Grid item xs={6}>
        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://www.cruzverde.com.co/dw/image/v2/BDPM_PRD/on/demandware.static/-/Sites-masterCatalog_Colombia/default/dwb5c36c73/images/large/51486-1-CREMA-S-24-HIDRAT-NUTRITIVA-POND'S-FCO-X-100GR-REF-119353.jpg?sw=1000&sh=1000"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Crema Facial
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        <Counter/>
        </CardActions>
      </Card>
  </Grid>
</Grid>
  

  );
}



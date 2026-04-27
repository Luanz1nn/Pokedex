import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import PokedexModal from '../PokedexModal/PokedexModal';
import { useState } from 'react';

export default function PokemonCard({ name, image, types }) {
   const [open, setOpen] = useState();
    const handleOpen = () => setOpen(true);

  const typeHandle = () => {
    if (types[1]) {
      return types[0].type.name + " | " + types[1].type.name
    }
    return types[0].type.name
  }
  
  
  return (
    <Card sx={{ maxWidth: 345 }}>
      <PokedexModal openModal={open ? true : false}/>
      <CardActionArea onClick={handleOpen}>
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt="pokemon-image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" >
            {name}
          </Typography>
          <Typography gutterBottom variant="p" component="div">
            {typeHandle()}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

import { CardMedia } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import pokedex from '../../assets/pokedex.png';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '24em',
  p: 4,
};

export default function PokedexModal({openModal}) {
  const [open, setOpen] = useState(openModal);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
          <CardMedia
          component="img"
          image={pokedex}
          alt="pokemon-image"
          sx={{}}
        />
        </Box>
      </Modal>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { Button, IconButton } from '@mui/material';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';

function Navbar() {
  return (
    <header className='px-5 py-2 flex items-center gap-x-5 shadow top-0 sticky bg-white text-indigo-400 z-10'>
      <Link to='/' className='text-indigo-400 text-4xl'>Small Connect</Link>
      <div className='flex-1'></div>
      <Link to='/cart'>
        <IconButton aria-label="delete" size="large">
          <ShoppingCartRoundedIcon color='primary' />
        </IconButton>
      </Link>
      <Link to='/signin'>
        <Button variant="contained" >
          Sign In
        </Button>
      </Link>
    </header>
  );
}

export default Navbar;

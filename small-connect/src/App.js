import React from 'react'
import './App.css';
import { Route, Routes } from 'react-router-dom'
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Home from './Pages/Home';
import Category from './Pages/Category';
import Cart from './Pages/Cart';
import { ThemeProvider, createTheme } from '@mui/material/styles';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: 'rgb(129,140,248)',
        dark: 'rgb(109,120,228)',
        contrastText: 'white',
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/' element={<Home />} />
        <Route path='/category' element={<Category />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/*' element={<Home />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;

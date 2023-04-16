import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3D3D3D',
    },
    secondary: {
      main: '#282828',
    },
  },
  typography: {
    h1: {
      fontSize: '3rem',
      color: '#E1E1E1',
    },
    h2: {
      fontSize: '2rem',
      color: '#E1E1E1',
    },
    h5: {
      color: '#E1E1E1',
    }
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename='/'>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);

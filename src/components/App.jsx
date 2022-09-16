/**
 * References
 * 1. https://mui.com/material-ui/react-card/
*/

import "./App.css"
import { Cards } from './Cards';
import React from "react";
import { ThemeProvider, createTheme, Theme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useParams } from "react-router-dom";


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
const normalTheme = createTheme({

});

function App() {
  const { src } = useParams()

  return (

    <ThemeProvider
      theme={normalTheme}
    >
      {src}
      <CssBaseline />
      <Cards />
    </ThemeProvider>

  );
}


export { App };
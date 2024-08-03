import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

import ErrorPage from './routes/ErrorPage';
import App from './App';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
  }
]);

const theme = createTheme({
  palette: {
    common: {
      black: "#15110e",
      white: "#efebe7",
    },
    primary: {
      main: "#008510",
    },
    secondary: {
      main: "#104015",
      light: "#00C040",
    },
    text: {
      primary: "#15110e",
      secondary: "#4D4D4D",
      disabled: "#B2B2B2",
    },
  },
  typography: {
    h1: {
      fontSize: "3rem",
      fontWeight: 800,
    },
    h2: {
      fontSize: "1.75rem",
      fontWeight: 800,
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 800,
    },
    fontFamily: ["Nunito"].join(","),
  },
});


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </CssBaseline>
  </React.StrictMode>,
)

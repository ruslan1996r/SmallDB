import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';

import App from './App';
import { theme } from "./styles/muiTheme"
import { SmallState } from "./context/state"

ReactDOM.render(
  // <React.StrictMode>
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <SmallState>
        <App />
      </SmallState>
    </ThemeProvider>
  </BrowserRouter>,
  // </React.StrictMode>,
  document.getElementById('root')
);

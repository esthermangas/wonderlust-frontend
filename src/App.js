import React from 'react';
import './App.css';
import { StylesProvider,ThemeProvider} from '@material-ui/core/styles';
import {BrowserRouter} from 'react-router-dom';
import Theme from './Theme';
import Router from './Router';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <div>
        <StylesProvider injectFirst>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </StylesProvider>
      </div>
    </ThemeProvider>

  );
}

export default App;

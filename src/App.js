import React from 'react';
import './App.css';
import { StylesProvider,ThemeProvider} from '@material-ui/core/styles';
import SignUp from './Views/Sing Up';
import Theme from './Theme';


function App() {
  return (
    <ThemeProvider theme={Theme}>
      <div>
        <StylesProvider injectFirst>
          <SignUp />
        </StylesProvider>
      </div>
    </ThemeProvider>

  );
}

export default App;

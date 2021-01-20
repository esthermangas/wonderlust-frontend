import {createMuiTheme} from '@material-ui/core/styles';

const Theme = createMuiTheme({
  palette: {
    primary: {
      main: "#009688",
      dark: "#005b4d",
      light: "#00f2e4",
    },
    secondary: {
      main: "#7e4974",
      dark: "#967588",
      light: "#ffe9e6"
    }
  }
})

export default Theme;

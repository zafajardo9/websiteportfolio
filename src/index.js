import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import CssBaseline from '@material-ui/core/CssBaseline'

import { createMuiTheme ,ThemeProvider } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#5A867F",
      main: "#27555B",
      dark: "#5CA1C3"
    },
    secondary: {
      light: "#e9c0b1",
      main: "#d89076",
      dark: "#c7613b"
    }
  }
})

ReactDOM.render(

  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline>
            <App />
      </CssBaseline>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

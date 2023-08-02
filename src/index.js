import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'stylesheet/theme';
import { GlobalStyles } from 'stylesheet/GlobalStyles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/pavuchky-frontend">
        <App />
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import i18n from './i18n';
import { I18nextProvider } from 'react-i18next';
import { LanguageProvider } from 'utils/LanguageContext';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'stylesheet/theme';
import { GlobalStyles } from 'stylesheet/GlobalStyles';
import { ToastContainer } from 'react-toastify';
import { App } from 'App';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={theme}>
        <BrowserRouter basename="/">
          <LanguageProvider>
            <App />
            <ToastContainer autoClose={2000} />
          </LanguageProvider>
        </BrowserRouter>
        <GlobalStyles />
      </ThemeProvider>
    </I18nextProvider>
  </React.StrictMode>
);

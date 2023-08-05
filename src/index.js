import React from 'react';
import ReactDOM from 'react-dom/client';
import i18n from './i18n';
import { I18nextProvider } from 'react-i18next';
import { LanguageProvider } from 'utils/LanguageContext';
import { App } from 'App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'stylesheet/theme';
import { GlobalStyles } from 'stylesheet/GlobalStyles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={theme}>
        <BrowserRouter basename="/pavuchky-frontend">
          <LanguageProvider>
            <App />
          </LanguageProvider>
        </BrowserRouter>
        <GlobalStyles />
      </ThemeProvider>
    </I18nextProvider>
  </React.StrictMode>
);

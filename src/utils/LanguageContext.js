import i18n from 'i18n';
import React, { createContext, useEffect, useState } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    const selectedLanguage = localStorage.getItem('selectedLanguage');
    if (selectedLanguage) {
      return selectedLanguage;
    } else {
      return i18n.resolvedLanguage;
    }
  });

  const changeLanguage = lang => {
    setLang(lang);
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    const selectedLanguage = localStorage.getItem('selectedLanguage');
    if (selectedLanguage) {
      setLang(selectedLanguage);
      i18n.changeLanguage(selectedLanguage);
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

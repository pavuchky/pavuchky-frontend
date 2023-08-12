import React, { useContext, useState } from 'react';
import i18n from 'i18n';
import { useMediaQuery } from 'react-responsive';
import { useTranslation } from 'react-i18next';
import Icon from '../../assets/images/sprite.svg';
import { LanguageContext } from 'utils/LanguageContext';
import { MobileMenu } from 'components/MobileMenu/MobileMenu';
import { DesktopNav } from 'components/DesktopNav/DesktopNav';
import {
  DonateBtn,
  Header,
  LangContainer,
  LangList,
  LangSelect,
  Logo,
  LogoLink,
  NavBar,
} from './Navbar.styled';

export const Navbar = () => {
  const locales = { ua: { title: 'UA' }, en: { title: 'EN' } };
  const { t } = useTranslation();
  const { changeLanguage } = useContext(LanguageContext);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(prev => !prev);
  };

  const handleLanguageChange = locale => {
    i18n.changeLanguage(locale);
    changeLanguage(locale);
    setIsOpen(false);
  };

  const isDesktop = useMediaQuery({
    query: '(min-width: 1440px)',
  });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1439px)' });

  return (
    <Header>
      <NavBar>
        <LogoLink to="/">
          <Logo>
            <use href={Icon + '#logo'}></use>
          </Logo>
        </LogoLink>
        {isDesktop && <DesktopNav />}

        <LangContainer>
          <LangSelect onClick={toggleDropdown}>
            {locales[i18n.language].title}
          </LangSelect>
          {isOpen && (
            <LangList>
              {Object.keys(locales).map(locale => (
                <li key={locale}>
                  <div onClick={() => handleLanguageChange(locale)}>
                    {locales[locale].title}
                  </div>
                </li>
              ))}
            </LangList>
          )}
        </LangContainer>

        <DonateBtn to="/#donation">{t('nav.donate')}</DonateBtn>
        {isTabletOrMobile && <MobileMenu />}
      </NavBar>
    </Header>
  );
};

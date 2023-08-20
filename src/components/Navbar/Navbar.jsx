import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
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
  //
  const navigate = useNavigate();
  const location = useLocation();
  //

  const locales = { ua: { title: 'UA' }, en: { title: 'EN' } };
  const { t } = useTranslation();
  const { changeLanguage } = useContext(LanguageContext);

  const [isOpen, setIsOpen] = useState(false);

  //
  useEffect(() => {
    if (location.hash === '#donation') {
      const element = document.getElementById('donation');
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 500);
      }
    }
  }, [location.hash]);
  //

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

        <DonateBtn
          onClick={() => {
            navigate(`/#donation`);
            setTimeout(() => {
              const element = document.getElementById('donation');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }, 500);
          }}
        >
          {t('nav.donate')}
        </DonateBtn>
        {isTabletOrMobile && <MobileMenu />}
      </NavBar>
    </Header>
  );
};

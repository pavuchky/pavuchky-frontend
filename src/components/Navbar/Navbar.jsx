import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../assets/images/sprite.svg';
import { DonatBtn, Header, LangBtn, Logo, NavBar } from './Navbar.styled';
import { MobileMenu } from 'components/MobileMenu/MobileMenu';
import { useMediaQuery } from 'react-responsive';
import { DesktopNav } from 'components/DesktopNav/DesktopNav';

export const Navbar = () => {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1280px)',
  });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1279px)' });

  return (
    <Header>
      <NavBar>
        <Link to="/">
          <Logo>
            <use href={Icon + '#logo'}></use>
          </Logo>
        </Link>
        {isDesktop && <DesktopNav />}
        <LangBtn>UA</LangBtn>
        <Link to="/donation">
          <DonatBtn>Задонатити</DonatBtn>
        </Link>
        {isTabletOrMobile && <MobileMenu />}
      </NavBar>
    </Header>
  );
};

import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import styled from 'styled-components';

export const Header = styled.header`
  padding: 16px 8px 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    padding: 24px 62px;
  }

  @media (min-width: 1440px) {
    padding: 24px 80px;
  }
`;

export const NavBar = styled.nav`
  position: relative;
  max-width: 768px;
  display: flex;
  justify-content: center;
  align-items: center;

  Link {
    height: 41px;

    @media (min-width: 1440px) {
      height: 69px;
    }
  }
`;

export const LogoLink = styled(Link)`
  svg {
    transition: transform ${({ theme }) => theme.transitions.regular};
  }

  &:hover svg,
  &:focus svg {
    transform: scale(1.07);
  }
`;

export const Logo = styled.svg`
  width: 68px;
  height: 34px;

  @media (min-width: 375px) {
    margin-right: 47px;
  }

  @media (min-width: 768px) {
    width: 92px;
    height: 64px;
    margin-right: 258px;
  }

  @media (min-width: 1440px) {
    width: 101px;
    height: 70px;
    margin-right: 90px;
  }
`;

export const LangContainer = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
`;

export const LangSelect = styled.div`
  border: none;
  appearance: none;
  cursor: pointer;
  padding: 12px 10px;
  border-radius: 41px;
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.regular};
  background-color: ${({ theme }) => theme.colors.lightGrey};

  @media (min-width: 768px) {
    padding: 12px 9px;
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }

  @media (min-width: 1440px) {
    padding: 14px 10px;
    margin-left: 64px;
    font-size: ${({ theme }) => theme.fontSizes.s};
  }
`;

export const LangList = styled.ul`
  z-index: 1;
  position: absolute;
  padding: 12px 10px;
  top: 0;
  left: 0;
  border-radius: 41px;
  display: flex;
  flex-direction: column;
  gap: 39px;
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.regular};
  background-color: ${({ theme }) => theme.colors.lightGrey};
  cursor: pointer;

  @media (min-width: 768px) {
    padding: 12px 9px;
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }

  @media (min-width: 1440px) {
    left: 65px;
    padding: 14px 10px;
    font-size: ${({ theme }) => theme.fontSizes.s};
  }
`;

export const DonateBtn = styled(HashLink)`
  min-width: 107px;
  padding: 12px 5px 12px 10px;
  margin-left: 10px;
  border-radius: 10px;
  text-align: center;
  font-size: 14px;
  background-color: ${({ theme }) => theme.colors.yellow};
  transition: color ${({ theme }) => theme.transitions.regular};

  &:hover {
    color: ${({ theme }) => theme.colors.blue};
  }

  @media (min-width: 375px) {
    margin-left: 16px;
  }

  @media (min-width: 768px) {
    min-width: 108px;
    padding: 12px 10px;
    margin-left: 34px;
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }

  @media (min-width: 1440px) {
    min-width: 193px;
    padding: 14px 31px;
    margin-left: 24px;
    font-size: ${({ theme }) => theme.fontSizes.s};
  }
`;

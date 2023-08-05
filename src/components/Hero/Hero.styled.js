import { HashLink } from 'react-router-hash-link';
import styled from 'styled-components';

export const HeroContainer = styled.section`
  position: relative;
  padding: 28px 16px;
  margin: 5px 0 36px 0;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.gradientMain};

  @media only screen and (min-width: 768px) {
    padding: 32px;
    margin: 12px 0 44px 0;
    border-radius: 20px;
  }

  @media only screen and (min-width: 1440px) {
    padding: 140px 64px 44px 64px;
    margin: 0 0 64px 0;
  }
`;

export const HeroText = styled.p`
  display: none;

  @media only screen and (min-width: 768px) {
    margin-left: 12px;
    display: block;
    font-size: 18px;
  }
`;

export const HeroListTitle = styled.h1`
  ::after {
    content: '';
    max-width: 327px;
    height: 1px;
    margin: 12px 0;
    display: block;
    background-color: ${({ theme }) => theme.colors.secondaryFont};

    @media only screen and (min-width: 768px) {
      max-width: 656px;
      margin: 24px 0;
    }

    @media only screen and (min-width: 1440px) {
      max-width: 1280px;
      margin: 23px 0 119px 0;
    }
  }
`;

export const HeroTitle = styled.span`
  margin-bottom: 8px;
  font-family: ${({ theme }) => theme.fonts.headLight};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  font-size: 32px;

  @media only screen and (min-width: 768px) {
    margin-bottom: 0;
    font-size: 80px;
  }

  @media only screen and (min-width: 1440px) {
    font-size: 100px;
  }
`;

export const HeroSubTitle = styled.span`
  display: block;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.headLight};
  font-size: ${({ theme }) => theme.fontSizes.m};

  @media only screen and (min-width: 768px) {
    font-size: 50px;
  }

  @media only screen and (min-width: 1440px) {
    font-size: 60px;
    text-align: start;
    padding-left: 217px;
  }
`;

export const IconTank = styled.img`
  display: none;

  @media only screen and (min-width: 1440px) {
    display: block;
    position: absolute;
    top: 140px;
    left: 663px;
    width: 584px;
    height: 247px;
  }
`;

export const HeroBtnList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media only screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 64px;
  }
`;

export const HeroItem = styled.li`
  min-width: 100%;
  border-radius: 12px;
  overflow: hidden;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.fontSizes.xs};

  @media only screen and (min-width: 768px) {
    border-radius: 16px;
    font-size: ${({ theme }) => theme.fontSizes.m};
  }

  @media only screen and (min-width: 1440px) {
    min-width: 519px;
  }
`;

export const HeroLink = styled(HashLink)`
  padding: 10px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.white};

  &:hover,
  &:focus {
    color: #004b81;
  }

  @media only screen and (min-width: 768px) {
    padding: 9.5px;
  }

  @media only screen and (min-width: 1440px) {
    padding: 17.5px;
  }
`;

export const HeroDonate = styled(HashLink)`
  padding: 10px;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.blue};
  transition: color ${({ theme }) => theme.transitions.regular};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.yellow};
  }

  @media only screen and (min-width: 768px) {
    padding: 9.5px;
  }

  @media only screen and (min-width: 1440px) {
    padding: 17.5px;
  }
`;

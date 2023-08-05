import styled from 'styled-components';

export const Header = styled.header`
  padding: 16px 8px 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    padding: 24px 62px;
  }

  @media (min-width: 1280px) {
    padding: 24px 80px;
  }
`;

export const NavBar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  Link {
    height: 41px;

    @media (min-width: 1280px) {
      height: 69px;
    }
  }
`;

export const Logo = styled.svg`
  width: 68px;
  height: 34px;
  margin-right: 47px;

  @media (min-width: 768px) {
    width: 92px;
    height: 64px;
    margin-right: 258px;
  }

  @media (min-width: 1280px) {
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
  font-weight: 600;
  background-color: ${({ theme }) => theme.colors.lightGrey};

  @media (min-width: 768px) {
    padding: 12px 9px;
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }

  @media (min-width: 1280px) {
    padding: 14px 10px;
    margin-left: 64px;
    font-size: ${({ theme }) => theme.fontSizes.s};
  }
`;

export const LangList = styled.ul`
  position: absolute;
  /* width: 52px; */
  padding: 10px;
  top: 0;
  left: 0;
  border-radius: 41px;
  display: flex;
  flex-direction: column;
  gap: 39px;
  font-size: 14px;
  font-weight: 600;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  cursor: pointer;

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }

  @media (min-width: 1280px) {
    left: 65px;
    font-size: ${({ theme }) => theme.fontSizes.s};
  }
`;

export const DonatBtn = styled.button`
  min-width: 107px;
  padding: 12px 5px 12px 10px;
  margin-left: 16px;
  border-radius: 10px;
  font-size: 14px;
  background-color: ${({ theme }) => theme.colors.yellow};

  &:hover {
    color: ${({ theme }) => theme.colors.blue};
  }

  @media (min-width: 768px) {
    min-width: 108px;
    padding: 12px 10px;
    margin-left: 34px;
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }

  @media (min-width: 1280px) {
    min-width: 193px;
    padding: 14px 31px;
    margin-left: 24px;
    font-size: ${({ theme }) => theme.fontSizes.s};
  }
`;
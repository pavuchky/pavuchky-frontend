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
  height: 41px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 1280px) {
    height: 69px;
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

export const LangBtn = styled.button`
  padding: 8px 10px;
  border-radius: 41px;
  font-size: 14px;
  background-color: ${({ theme }) => theme.colors.lightGrey};

  @media (min-width: 768px) {
    padding: 10px;
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }

  @media (min-width: 1280px) {
    margin-left: 64px;
  }
`;

export const DonatBtn = styled.button`
  padding: 12px 5px 12px 10px;
  margin-left: 16px;
  border-radius: 10px;
  font-size: 14px;
  background-color: ${({ theme }) => theme.colors.yellow};

  &:hover {
    color: ${({ theme }) => theme.colors.blue};
  }

  @media (min-width: 768px) {
    margin-left: 34px;
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }

  @media (min-width: 1280px) {
    font-size: ${({ theme }) => theme.fontSizes.s};
    padding: 14px 31px;
    margin-left: 24px;
  }
`;

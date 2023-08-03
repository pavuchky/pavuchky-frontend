import styled from 'styled-components';

export const MenuBtn = styled.button`
  position: relative;
  padding: 8px 10px;
  margin-left: 16px;
  border-radius: 10px;
  font-size: 14px;
  background-color: ${({ theme }) => theme.colors.lightGrey};

  &:hover {
    color: ${({ theme }) => theme.colors.blue};
  }

  @media (min-width: 768px) {
    margin-left: 34px;
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }
`;

export const MenuList = styled.ul`
  position: absolute;
  top: 70px;
  left: 52%;
  padding: 32px 34px;
  border-radius: 16px;
  box-shadow: rgba(25, 0, 0, 0.09) -4px 8px 19px,
    rgba(22, 0, 0, 0.1) -18px 31px 35px, rgba(12, 0, 0, 0.13) -28px 50px 48px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  background-color: ${({ theme }) => theme.colors.white};

  opacity: ${({ showMenu }) => (showMenu ? 1 : 0)};
  visibility: ${({ showMenu }) => (showMenu ? 'visible' : 'hidden')};
  transition: opacity 0.3s ease-in-out;

  li {
    &:hover {
      color: ${({ theme }) => theme.colors.blue};
    }
  }

  @media (min-width: 768px) {
    left: 70%;
  }
`;

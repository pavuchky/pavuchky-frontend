import styled from 'styled-components';

export const MenuBtn = styled.button`
  padding: 12px 8px;
  margin-left: 10px;
  border-radius: 10px;
  font-size: 14px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  transition: color ${({ theme }) => theme.transitions.regular};

  &:hover {
    color: ${({ theme }) => theme.colors.blue};
  }

  @media (min-width: 375px) {
    margin-left: 16px;
  }

  @media (min-width: 768px) {
    padding: 12px 10px;
    margin-left: 34px;
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }
`;

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  background-color: ${({ theme }) => theme.colors.white};

  li {
    transition: color ${({ theme }) => theme.transitions.regular};

    &:hover {
      color: ${({ theme }) => theme.colors.blue};
    }
  }

  @media only screen and (min-width: 768px) {
    gap: 28px;
    font-size: 18px;
  }
`;

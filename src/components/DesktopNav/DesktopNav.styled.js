import styled from 'styled-components';

export const NavList = styled.ul`
  display: flex;
  gap: 65px;

  li {
    transition: color ${({ theme }) => theme.transitions.regular};

    &:hover {
      color: ${({ theme }) => theme.colors.blue};
    }
  }
`;

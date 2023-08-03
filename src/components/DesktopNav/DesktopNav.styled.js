import styled from 'styled-components';

export const NavList = styled.ul`
  display: flex;
  gap: 65px;

  li {
    &:hover {
      color: ${({ theme }) => theme.colors.blue};
    }
  }
`;

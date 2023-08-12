import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ViewAllLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;

  &:hover span,
  &:focus span {
    color: ${({ theme }) => theme.colors.blue};
  }

  &:hover svg,
  &:focus svg {
    stroke: ${({ theme }) => theme.colors.blue};
  }
`;

export const ViewAllIcon = styled.svg`
  width: 10px;
  height: 10px;
  transition: stroke ${({ theme }) => theme.transitions.regular};

  @media only screen and (min-width: 768px) {
    width: 11px;
    height: 11px;
  }
`;

export const ViewAllText = styled.span`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.secondaryFont};
  transition: color ${({ theme }) => theme.transitions.regular};

  @media only screen and (min-width: 768px) {
    font-family: ${({ theme }) => theme.fonts.light};
    font-weight: ${({ theme }) => theme.fontWeights.light};
  }

  @media only screen and (min-width: 1440px) {
    font-family: ${({ theme }) => theme.fonts.regular};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    font-size: ${({ theme }) => theme.fontSizes.xs};
    line-height: ${({ theme }) => theme.lineHeights.secondary};
  }
`;

import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ViewAllLink = styled(Link)`
  display: flex;
`;

export const ViewAllIcon = styled.svg`
  width: 11px;
  height: 13px;
`;

export const ViewAllText = styled.span`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.secondaryFont};

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

import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PathWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
  padding-left: ${({ theme }) => theme.spacing(4)};
  margin-bottom: ${({ theme }) => theme.spacing(6.5)};

  @media only screen and (min-width: 768px) {
    gap: ${({ theme }) => theme.spacing(3)};
    padding-left: ${({ theme }) => theme.spacing(8)};
    margin-top: 0;
    margin-bottom: ${({ theme }) => theme.spacing(11)};
  }

  @media only screen and (min-width: 1440px) {
    padding-left: ${({ theme }) => theme.spacing(16)};
    margin-bottom: ${({ theme }) => theme.spacing(16)};
  }
`;

export const PathLink = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: 12px;
  line-height: 1.33;

  color: ${({ theme }) => theme.colors.grey};

  @media only screen and (min-width: 1440px) {
    font-size: 14px;
    line-height: normal;
  }
`;

export const PathArrow = styled.svg`
  width: 10px;
  height: 12px;
`;

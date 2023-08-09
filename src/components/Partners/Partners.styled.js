import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PartnersContainer = styled.section`
  padding: 28px 16px 30px 16px;
  margin-bottom: 36px;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.gradientReversed};

  @media (min-width: 768px) {
    padding: 32px;
  }

  @media (min-width: 1440px) {
    padding: 44px 64px;
  }
`;

export const PartnersTitle = styled.h3`
  margin-bottom: 24px;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes.m};

  @media (min-width: 768px) {
    font-family: ${({ theme }) => theme.fonts.headRegular};
    font-size: ${({ theme }) => theme.fontSizes.l};
    letter-spacing: -1.44px;
  }

  @media (min-width: 1440px) {
    margin-bottom: 44px;
    font-size: ${({ theme }) => theme.fontSizes.xl};
    letter-spacing: -2.4px;
  }
`;

export const PartnersList = styled.ul`
  margin-bottom: 24px;
  display: flex;
  gap: 21px;

  @media (min-width: 768px) {
    margin-bottom: 28px;
    gap: 24px;
  }

  @media (min-width: 1440px) {
    margin-bottom: 44px;
  }
`;

export const PartnersImg = styled.img`
  width: 95px;
  height: 95px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.blue};

  @media (min-width: 768px) {
    width: 202px;
    height: 157px;
    border-radius: ${({ theme }) => theme.radii.s};
    border: 1px solid ${({ theme }) => theme.colors.blue};
  }

  @media (min-width: 1440px) {
    width: 411px;
    height: 318px;
  }
`;

export const PartnersTablet = styled.div`
  @media (min-width: 768px) {
    display: flex;
    align-items: end;
    gap: 109px;
  }

  @media (min-width: 1440px) {
    align-items: center;
    gap: 87px;
  }
`;

export const PartnersSubTitle = styled.h4`
  margin-bottom: 12px;
  font-family: ${({ theme }) => theme.fonts.headRegular};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes.s};
  letter-spacing: -0.8px;

  @media (min-width: 768px) {
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${({ theme }) => theme.fontSizes.m};
    letter-spacing: normal;
  }

  @media (min-width: 1440px) {
    margin-bottom: 16px;
    font-family: ${({ theme }) => theme.fonts.light};
    font-weight: ${({ theme }) => theme.fontWeights.light};
    font-size: 26px;
  }
`;

export const PartnersText = styled.p`
  margin-bottom: 24px;
  font-size: ${({ theme }) => theme.fontSizes.xs};

  @media (min-width: 768px) {
    width: 260px;
    margin-bottom: 0;
    font-size: 18px;
  }

  @media (min-width: 1440px) {
    width: 753px;
    font-size: ${({ theme }) => theme.fontSizes.s};
  }
`;

export const PartnersBtn = styled(Link)`
  padding: 10px 16px;
  text-align: center;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.blue};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  background-color: ${({ theme }) => theme.colors.white};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.white};
  }

  @media (min-width: 768px) {
    width: 287px;
    height: 48px;
    padding: 12px 16px;
    border-radius: ${({ theme }) => theme.radii.s};
    font-size: ${({ theme }) => theme.fontSizes.s};
  }

  @media (min-width: 1440px) {
    width: 440px;
    height: 76px;
    padding: 26px 16px;
    border-radius: ${({ theme }) => theme.radii.l};
  }
`;

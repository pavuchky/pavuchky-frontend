import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const GratitudeWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding-top: ${({ theme }) => theme.spacing(9)};
  padding-bottom: ${({ theme }) => theme.spacing(7)};
  padding-left: ${({ theme }) => theme.spacing(4)};
  padding-right: ${({ theme }) => theme.spacing(4)};
  margin-bottom: ${({ theme }) => theme.spacing(9)};

  text-align: center;

  background: ${({ theme }) => theme.colors.gradientBackground};
  border-radius: 16px;

  @media only screen and (min-width: 768px) {
    gap: ${({ theme }) => theme.spacing(6)};
    padding: ${({ theme }) => theme.spacing(8)};
    margin-bottom: ${({ theme }) => theme.spacing(11)};
  }

  @media only screen and (min-width: 1440px) {
    position: relative;
    padding: ${({ theme }) => theme.spacing(11)};
    margin-bottom: ${({ theme }) => theme.spacing(16)};
  }
`;

export const GratitudeTitle = styled.h3`
  margin-bottom: ${({ theme }) => theme.spacing(8)};

  font-family: ${({ theme }) => theme.fonts.headRegular};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes.m};
  letter-spacing: -0.96px;

  @media only screen and (min-width: 768px) {
    margin-bottom: 0;
    font-size: ${({ theme }) => theme.fontSizes.l};
    letter-spacing: -1.44px;
  }

  @media only screen and (min-width: 1440px) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    letter-spacing: -2.4px;
  }
`;

export const GratitudeText = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing(11)};

  font-family: ${({ theme }) => theme.fonts.regular};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: 18px;

  color: ${({ theme }) => theme.colors.secondaryFont};

  @media only screen and (min-width: 768px) {
    margin-bottom: 0;
    font-size: ${({ theme }) => theme.fontSizes.m};
  }

  @media only screen and (min-width: 1440px) {
    position: absolute;
    top: 152px;

    font-family: ${({ theme }) => theme.fonts.headRegular};
    font-size: ${({ theme }) => theme.fontSizes.l};
  }
`;

export const GratitudeImg = styled.img`
  margin-bottom: ${({ theme }) => theme.spacing(6)};
  opacity: 0.2;

  @media only screen and (min-width: 768px) {
    margin-top: ${({ theme }) => theme.spacing(7)};
    margin-bottom: 0;
  }

  @media only screen and (min-width: 1440px) {
    margin-top: 0;
  }
`;

export const GratitudeLink = styled(Link)`
  width: 100%;
  padding: 10.5px;

  font-family: ${({ theme }) => theme.fonts.regular};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes.xs};

  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.blue};
  border-radius: 12px;

  transition: color ${({ theme }) => theme.transitions.regular};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.yellow};
  }

  @media only screen and (min-width: 768px) {
    padding: 9.5px;
    font-size: ${({ theme }) => theme.fontSizes.m};
    border-radius: 16px;
  }

  @media only screen and (min-width: 1440px) {
    max-width: 520px;
    padding: 17.5px;
    border-radius: ${({ theme }) => theme.radii.m};
  }
`;

export const GratitudeReviewImg = styled.img`
  margin-bottom: ${({ theme }) => theme.spacing(8)};

  @media only screen and (min-width: 768px) {
    margin-top: ${({ theme }) => theme.spacing(3.5)};
    margin-bottom: ${({ theme }) => theme.spacing(2)};
  }

  @media only screen and (min-width: 1440px) {
    margin: 0;
  }
`;

import styled from 'styled-components';

import { theme } from 'stylesheet/theme';
const { fontSizes, fontWeights, colors, radii, fonts } = theme;

export const OurNeedsHeading = styled.h3`
  font-size: ${fontSizes.m};
  font-weight: ${fontWeights.regular};
  font-family: ${fonts.regular};

  @media (min-width: 768px) {
    font-size: ${fontSizes.l};
    font-family: ${fonts.headRegular};
    letter-spacing: -1.44px;
  }

  @media (min-width: 1440px) {
    font-size: ${fontSizes.xl};

    letter-spacing: -2.4px;
  }
`;

export const OurNeedsSection = styled.section`
  display: inline-flex;
  padding: 28px 16px;
  margin-bottom: 36px;
  flex-direction: column;
  justify-content: center;

  gap: 20px;

  border-radius: 16px;
  background: ${colors.gradientBackground};

  @media (min-width: 768px) {
    padding: 32px;
    padding-right: 0px;
    margin-bottom: 44px;
    width: 720px;
    overflow: hidden;
    border-radius: ${radii.m};
    gap: 35px;
  }

  @media (min-width: 1440px) {
    padding: 44px 64px;
    margin-bottom: 64px;
    width: 1408px;
    border-radius: ${radii.xl};
    gap: 44px;
  }
`;

export const OurNeedsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 24px;
  }

  @media (min-width: 1440px) {
    gap: 27px;
  }
`;

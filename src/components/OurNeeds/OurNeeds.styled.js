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
  }

  @media (min-width: 1280px) {
  }
`;

export const OurNeedsSection = styled.section`
  display: inline-flex;
  padding: 28px 16px;
  flex-direction: column;
  justify-content: center;

  gap: 20px;

  border-radius: 16px;
  width: 359px;
  background: ${colors.gradientBackground};

  @media (min-width: 768px) {
    padding: 32px;
    width: 720px;
    overflow: hidden;
    border-radius: ${radii.m};
    gap: 35px;
  }

  @media (min-width: 1280px) {
    padding: 44px 64px;
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

  @media (min-width: 1280px) {
    gap: 27px;
  }
`;

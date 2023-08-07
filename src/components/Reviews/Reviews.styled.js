import styled from 'styled-components';

import { theme } from 'stylesheet/theme';
const { colors, radii, fonts, fontWeights, fontSizes } = theme;

export const ReviewsSection = styled.section`
  display: inline-flex;
  padding: 28px 16px;
  margin-bottom: 36px;
  flex-direction: column;
  justify-content: center;

  gap: 20px;

  border-radius: 16px;
  width: 359px;
  background: ${colors.gradientBackground};
  margin-bottom: 36px;

  @media (min-width: 768px) {
    padding: 32px 26px;

    width: 720px;
    overflow: hidden;
    border-radius: ${radii.m};
    gap: 35px;
    margin-bottom: 44px;
  }

  @media (min-width: 1440px) {
    padding: 44px 64px;
    padding-right: 0px;
    width: 1408px;
    margin-bottom: 64px;
    border-radius: ${radii.xl};
    gap: 44px;
    margin-bottom: 64px;
  }
`;

export const ReviewsTitle = styled.h3`
  font-family: ${fonts.regular};
  font-weight: ${fontWeights.regular};
  font-size: ${fontSizes.m};

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

export const ReviewsTitlePartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 64px;

  @media (min-width: 1440px) {
    padding-left: 11px;
  }
`;

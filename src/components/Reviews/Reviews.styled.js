import styled from 'styled-components';

import { theme } from 'stylesheet/theme';
const { colors, radii, fonts, fontWeights, fontSizes } = theme;

export const ReviewsSection = styled.section`
  display: inline-flex;
  padding: 28px 16px;
  flex-direction: column;
  justify-content: center;

  gap: 20px;

  border-radius: 16px;
  width: 359px;
  background: ${colors.gradientBackground};

  @media (min-width: 768px) {
    padding: 32px 26px;

    width: 720px;
    overflow: hidden;
    border-radius: ${radii.m};
    gap: 35px;
  }

  @media (min-width: 1440px) {
    padding: 44px 64px;
    width: 1408px;
    border-radius: ${radii.xl};
    gap: 44px;
  }
`;

export const ReviewsTitel = styled.h3`
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

export const ReviewsTitelPartContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (min-width: 1440px) {
    padding-left: 11px;
  }
`;

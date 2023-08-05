import styled from 'styled-components';

import { theme } from 'stylesheet/theme';
const { colors, borders, fontWeights, fonts, fontSizes, radii } = theme;

export const ReviewsSwiperItemContainer = styled.div`
  position: relative;
  width: 327px;
  min-height: 263px;
  padding: 12px;
  padding-top: 44px;

  border: ${borders.normal};
  border-color: ${colors.blue};
  border-radius: 8px;

  @media (min-width: 768px) {
  }

  @media (min-width: 1440px) {
  }
`;

export const ReviewsSwiperItemParagraph = styled.p`
  font-size: ${fontSizes.xs};
  font-weight: ${fontWeights.light};
  font-family: ${fonts.regular};
  color: ${colors.secondaryFont};
  margin-bottom: 12px;

  @media (min-width: 768px) {
  }

  @media (min-width: 1440px) {
  }
`;

export const ReviewsSwiperItemImageContainer = styled.div`
  width: 303px;
  height: 157px;
  overflow: hidden;
  border-radius: ${radii.s};

  @media (min-width: 768px) {
    width: 268px;
    height: 197px;
  }

  @media (min-width: 1440px) {
    width: 377px;
    height: 320px;
  }
`;

export const ReviewsSwiperItemImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: ${radii.s};

  @media (min-width: 768px) {
  }

  @media (min-width: 1440px) {
  }
`;

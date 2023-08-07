import styled from 'styled-components';

import { theme } from 'stylesheet/theme';
const { colors, borders, fontWeights, fonts, fontSizes, radii } = theme;

export const ReviewsSwiperItemContainer = styled.div`
  position: relative;
  width: 327px;
  height: 263px;
  padding: 12px;
  padding-top: 44px;

  border: ${borders.normal};
  border-color: ${colors.blue};
  background-color: ${colors.white};
  border-radius: 8px;

  @media (min-width: 768px) {
    width: 316px;
    height: 369px;
    padding: 18px;
    padding-top: 68px;
    padding-bottom: 24px;
    border-radius: ${radii.s};
  }

  @media (min-width: 1440px) {
    width: 409px;
    height: 554px;
    padding: 16px;
    padding-top: 86px;
  }
`;

export const ReviewsSwiperItemParagraph = styled.p`
  font-size: ${fontSizes.xs};
  font-weight: ${fontWeights.light};
  font-family: ${fonts.light};
  color: ${colors.secondaryFont};

  height: 50px;
  overflow: auto;
  /* margin-bottom: 12px; */

  @media (min-width: 768px) {
    font-weight: ${fontWeights.regular};
    font-family: ${fonts.regular};

    height: 80px;
    overflow: auto;
    /* margin-bottom: 42px; */
  }

  @media (min-width: 1440px) {
    font-size: ${fontSizes.s};
    font-weight: ${fontWeights.light};
    font-family: ${fonts.light};

    height: 132px;
    overflow: auto;
    /* margin-bottom: 84px; */
  }
`;

export const ReviewsSwiperItemImageContainer = styled.div`
  width: 303px;
  height: 157px;
  overflow: hidden;
  border-radius: ${radii.s};

  @media (min-width: 768px) {
    width: 280px;
    height: 197px;
    padding-left: 6px;
    padding-right: 6px;
  }

  @media (min-width: 1440px) {
    padding: 0;
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

export const ReviewsSvg = styled.svg`
  position: absolute;
  top: 12px;
  right: 12px;

  @media (min-width: 768px) {
    top: 24px;
    right: 24px;
  }
`;

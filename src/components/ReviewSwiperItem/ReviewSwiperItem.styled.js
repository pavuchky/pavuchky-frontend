import styled from 'styled-components';

import { theme } from 'stylesheet/theme';
const { colors, borders, fontWeights, fonts, fontSizes, radii } = theme;

export const ReviewsSwiperItemContainer = styled.div`
  display: flex;
  flex-direction: column;

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

  min-height: 42px; //////////////////

  overflow-y: auto;
  overflow-x: hidden;
  margin-bottom: 8px;

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${colors.blue};
    border-radius: 2px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${colors.grey};
    border-radius: 2px;
  }

  @media (min-width: 768px) {
    font-weight: ${fontWeights.regular};
    font-family: ${fonts.regular};

    min-height: 75px; //////////////////
    margin-bottom: 5px;
  }

  @media (min-width: 1440px) {
    font-size: ${fontSizes.s};
    font-weight: ${fontWeights.light};
    font-family: ${fonts.light};

    min-height: 124px; //////////////////////////

    margin-bottom: 8px;

    &::-webkit-scrollbar {
      width: 4px;
    }
  }
`;

export const ReviewsSwiperItemImageContainer = styled.div`
  width: 303px;
  min-height: 157px;
  max-height: 157px;
  overflow: hidden;
  border-radius: ${radii.s};
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    width: 280px;

    min-height: 197px;
    max-height: 197px;
    padding-left: 6px;
    padding-right: 6px;
  }

  @media (min-width: 1440px) {
    padding: 0;
    width: 377px;

    min-height: 320px;
    max-height: 320px;
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

export const Test = styled.div`
  //////////////
  width: 50px;
  height: 100%;
  background-color: red;
`;

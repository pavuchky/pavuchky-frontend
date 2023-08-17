import styled from 'styled-components';

import { theme } from '../../stylesheet/theme';

const { fontSizes, fontWeights, colors, fonts, borders, radii } = theme;

export const GalleryTabGridContainer = styled.ul`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  margin-bottom: 32px;
  justify-content: center;
`;

export const GalleryItem = styled.li`
  display: flex;
  flex-basis: calc((100% - 24px) / 2);
`;

export const GalleryTabImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  vertical-align: middle;
  border-radius: 10px;
`;

export const GalleryTabButton = styled.button`
  width: 656px;
  height: 48px;
  border-radius: 16px;
  background: ${colors.blue};
  padding: 10px;
  justify-content: center;
  align-items: center;
  font-family: ${fonts.regular};
  font-size: ${fontSizes.m};
  font-style: normal;
  font-weight: ${fontWeights.regular};
  line-height: normal;
  cursor: pointer;
  outline: transparent;
  color: ${colors.white};

  &:hover {
    color: ${colors.yellow};
  }
  &:focus {
    outline: transparent;
    color: ${colors.yellow};
  }
  @media (min-width: 1440px) {
    display: none;
  }
`;

/**==============StylesForDesktop======================== */

export const GalleryDesktopGridContainer = styled.ul`
  display: flex;
  gap: 26px;
  flex-wrap: wrap;
  margin-bottom: 44px;
  justify-content: center;
`;

export const GalleryDesktopItem = styled.li`
  display: flex;
  flex-basis: calc((100% - 52px) / 3);
  justify-content: center;
`;

export const GalleryDesktopImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  vertical-align: middle;
  border-radius: 10px;
`;

export const GalleryPaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GalleryFirstSvgButton = styled.button`
  display: none;

  @media (min-width: 1440px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 84px;
    height: 84px;
    border: ${borders.normal};
    color: ${colors.blue};
    border-radius: ${radii.round};
    position: absolute;
    top: 50%;
    left: 3%;
    z-index: 99999999;
  }
`;

export const GallerySecondSvgButton = styled.button`
  display: none;

  @media (min-width: 1440px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 84px;
    height: 84px;
    border: ${borders.normal};
    color: ${colors.blue};
    border-radius: ${radii.round};
    position: absolute;
    top: 50%;
    right: 3%;
    z-index: 99999999;
  }
`;

export const GalleryDesctopSvg = styled.svg`
  stroke: ${colors.blue};
`;

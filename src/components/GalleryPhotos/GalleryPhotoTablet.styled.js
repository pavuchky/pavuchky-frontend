import styled from 'styled-components';

import { theme } from '../../stylesheet/theme';

const { fontSizes, fontWeights, colors, fonts, borders, radii } = theme;

export const GalleryTabGridContainer = styled.div`
  display: grid;
  grid-template-columns: 316px 316px;
  gap: 24px;
  
  margin-bottom: 32px;
  @media (min-width: 1440px) {
    grid-template-columns: 409px 409px 409px;
    gap: 26px;
    margin-bottom: 44px;
   
  }
 
`;
export const GalleryTabImg = styled.img`
  width: 316px;
  height: 398px;
  margin: 0;
  padding: 0;
  border-radius: 10px;
  @media (min-width: 1440px) {
    width: 409px;
    height: 543px;
  }
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

export const GalleryDesctopGridContainer = styled.div`
  display: grid;
  grid-template-columns: 409px 409px 409px;
  gap: 26px;
  margin-top: 44px;
  margin-bottom: 44px;
  
`;
export const GalleryDestopImg = styled.img`
  width: 100%;
  margin: 0;
  padding: 0;
  border-radius: 10px;
  height: 543px;
`;

export const GalleryPaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const GalleryFirstSvgButton = styled.button`
    @media (min-width: 375px) {
    display: none;
  }
  @media (min-width: 768px) {
    display: none;
  }

  @media (min-width: 1440px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 84px;
    height: 84px;
    border: ${borders.normal};
    color: ${colors.blue};
    border-radius: ${radii.round};
    position: relative;
    top: 366px;
    left: 51px;
    z-index: 99999999;
  }
`;

export const GallerySecondSvgButton = styled.button`
  @media (min-width: 375px) {
    display: none;
  }
  @media (min-width: 768px) {
    display: none;
  }

  @media (min-width: 1440px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 84px;
    height: 84px;
    border: ${borders.normal};
    color: ${colors.blue};
    border-radius: ${radii.round};
    position: relative;
    top:-391px;
    left: 995px;
    z-index: 99999999;
  }
`;

export const GalleryDesctopSvg = styled.svg`
  stroke: ${colors.blue};
`;

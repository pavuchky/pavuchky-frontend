import styled from 'styled-components';

import { theme } from '../../stylesheet/theme';

const { fontSizes, fontWeights, colors, fonts, borders, radii } = theme;

export const GalleryTabGridContainer = styled.ul`
  /* Variant 1 */

  /* display: flex;
  gap: 24px;
  flex-wrap: wrap;
  margin-bottom: 32px; */

  /* Variant 2 3 */

  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  margin-bottom: 32px;
  justify-content: center;

  /* Variant 4 */

  /* display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;
  margin-bottom: 32px; */

  /* display: grid;
  grid-template-columns: 316px 316px;
  gap: 24px;
  
  margin-bottom: 32px;
  @media (min-width: 1440px) {
    grid-template-columns: 409px 409px 409px;
    gap: 26px;
    margin-bottom: 44px;
   
  } */
`;

export const GalleryItem = styled.li`
  /* Variant 1 */
  /* height: 398px;
  flex: auto; */

  /* Variant 2 */

  /* flex-basis: calc((100% - 24px) / 2); */

  /* Variant 3 */
  /* 
  display: flex;
  flex-basis: calc((100% - 24px) / 2); */

  /* Variant 4 */

  /* max-height: 398px;
  border-radius: 10px;
  overflow: hidden; */
`;

export const GalleryTabImg = styled.img`
  /* Variant 1 */
  /* width: 100%;
  height: 100%;
  object-fit: cover;
  vertical-align: middle;
  border-radius: 10px; */

  /* Variant 2 */

  /* width: 100%;
  height: auto;
  max-height: 398px;
  object-fit: cover;
  vertical-align: middle;
  border-radius: 10px; */

  /* Variant 3 */

  /* width: 100%;
  height: auto;
  object-fit: cover;
  vertical-align: middle;
  border-radius: 10px; */

  /* Variant 4 */

  border-radius: 10px;

  /* width: 316px;
  height: 398px;
  margin: 0;
  padding: 0;
  border-radius: 10px;
  @media (min-width: 1440px) {
    width: 409px;
    height: 543px;
  } */
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

export const GalleryDesctopGridContainer = styled.ul`
  /* Variant 1 */

  /* display: flex;
  gap: 26px;
  flex-wrap: wrap;
  margin-bottom: 44px; */

  /* Variant 2 3 */

  /* display: flex;
  gap: 26px;
  flex-wrap: wrap;
  margin-bottom: 44px;
  justify-content: center; */

  /* Variant 4 */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 24px;
  margin-bottom: 32px;

  /* display: grid;
  grid-template-columns: 409px 409px 409px;
  gap: 26px;
  margin-top: 44px;
  margin-bottom: 44px; */
`;

export const GalleryDesktopItem = styled.li`
  /* Variant 1 */
  /* height: 543px;
  flex: auto; */

  /* Variant 2 */

  /* flex-basis: calc((100% - 52px) / 3); */

  /* Variant 3 */

  /* display: flex;
  flex-basis: calc((100% - 52px) / 3);
  justify-content: center; */

  /* Variant 4 */
  max-height: 543px;
  border-radius: 10px;
  overflow: hidden;
`;

export const GalleryDestopImg = styled.img`
  /* Variant 1 */
  /* width: 100%;
  height: 100%;
  object-fit: cover;
  vertical-align: middle;
  border-radius: 10px; */

  /* Variant 2 */

  /* width: 100%;
  height: auto;
  max-height: 543px;
  object-fit: cover;
  vertical-align: middle;
  border-radius: 10px; */

  /* Variant 3 */

  /* width: 100%;
  height: auto;
  object-fit: cover;
  vertical-align: middle;
  border-radius: 10px; */

  /* Variant 4 */

  border-radius: 10px;

  /* width: 100%;
  margin: 0;
  padding: 0;
  border-radius: 10px;
  height: 543px; */
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
    position: absolute;
    top: 50%;
    left: 3%;
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
    position: absolute;
    top: 50%;
    right: 3%;
    z-index: 99999999;
  }
`;

export const GalleryDesctopSvg = styled.svg`
  stroke: ${colors.blue};
`;

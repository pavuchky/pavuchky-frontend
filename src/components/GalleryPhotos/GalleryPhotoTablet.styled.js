import styled from 'styled-components';

import { theme } from '../../stylesheet/theme';

const { fontSizes, fontWeights, colors, fonts } = theme;


export const GalleryTabGridContainer = styled.div`
display: grid;
grid-template-columns: 50% 50%;
gap:13px;
margin-top: 45px;
margin-bottom: 32px;
`
export const GalleryTabImg = styled.img`
width: 316px;
height: 398px;
margin:0;
padding: 0;
border-radius: 10px;

`

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
  height: 100%;
  margin: 0;
  padding: 0;
  border-radius: 10px;
`;

export const GalleryPaginationContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;

`
import styled from "styled-components";
import { theme } from '../../stylesheet/theme';
import { Link } from "react-router-dom";
const { fontSizes, fontWeights, colors, fonts } = theme;


export const GallerySection = styled.section`
  padding: 28px 16px 29px;
  margin-bottom: 36px;
  border-radius: 20px;
  background: ${colors.gradientBackground};

  @media (min-width: 768px) {
    margin-bottom: 44px;
    padding: 32px 32px 28px 32px;
    border-radius: 20px;
  }
  @media (min-width: 1440px) {
    margin-bottom: 64px;
    padding: 44px 64px;
    border-radius: 25px;
  }
`;

export const GalleryTitle = styled.h3`
color: ${colors.primaryFont};
font-family: ${fonts.headRegular};
font-size: ${fontSizes.m};
font-style: normal;
font-weight: ${fontWeights.regular};
line-height: normal;
margin-bottom: 24px;
`

export const GalleryTabs = styled.div`
display: flex;
flex-direction: row;
gap: 75px;
margin-bottom: 22px;
`
export const GlleryTabLinks = styled(Link)`
  padding: 8px 12px 8px 12px;

  text-decoration: none;
  color: black;

  &.active {
    border-bottom: 2px solid rgba(43, 43, 43, 1);
  }

  &:hover,
  &:focus {
    text-decoration: none;
    border-bottom: 2px solid rgba(43, 43, 43, 1);
  }
`;
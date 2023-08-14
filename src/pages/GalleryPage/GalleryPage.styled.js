import styled from 'styled-components';
import { theme } from '../../stylesheet/theme';
import { NavLink } from 'react-router-dom';
const { fontSizes, fontWeights, colors, fonts } = theme;

export const GallerySection = styled.section`
  padding: 28px 16px 28px;
  margin-bottom: 36px;
  border-radius: 20px;
  background: ${colors.gradientBackground};

  @media (min-width: 768px) {
    margin-bottom: 44px;
    padding: 32px;
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
  font-family: ${fonts.regular};
  font-size: ${fontSizes.m};
  font-style: normal;
  font-weight: ${fontWeights.regular};
  line-height: normal;
  margin-bottom: 24px;
  @media (min-width: 768px) {
    font-size: ${fontSizes.l};
    font-weight: ${fontWeights.light};
    font-family: ${fonts.headLight};
    margin-bottom: 24px;
  }
  @media (min-width: 1440px) {
    font-size: ${fontSizes.xl};
    font-weight: ${fontWeights.light};
    letter-spacing: -2.4px;
    margin-bottom: 44px;
  }
`;

export const GalleryTabs = styled.div`
  display: flex;
  flex-direction: row;
  gap: 75px;
  margin-bottom: 24px;
  @media (min-width: 768px) {
    margin-bottom: 32px;
  }
  @media (min-width: 1440px) {
    margin-bottom: 46px;
  }
`;
export const GlleryTabLinks = styled(NavLink)`
  padding: 8px 12px 8px 12px;
  font-family: ${fonts.light};
  font-size: 18px;
  text-decoration: none;
  color: ${colors.grey};
  font-weight: ${fontWeights.regular};
  &.active {
    border-bottom: 2px solid rgba(43, 43, 43, 1);
    color: ${colors.black};
  }

  &:hover,
  &:focus {
    text-decoration: none;
    border-bottom: 2px solid rgba(43, 43, 43, 1);
    color: ${colors.black};
  }
  @media (min-width: 768px) {
    font-size: ${fontSizes.s};
    font-weight: ${fontWeights.light};
  }
  @media (min-width: 1440px) {
    font-weight: ${fontWeights.regular};
  }
`;

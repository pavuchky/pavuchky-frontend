import styled from 'styled-components';
import { theme } from '../../stylesheet/theme';
import { NavLink } from 'react-router-dom';
const { fontSizes, fontWeights, colors, fonts, transitions } = theme;

export const GallerySection = styled.section`
  padding: 28px 16px;
  margin-bottom: 36px;
  border-radius: 20px;
  background: ${colors.gradientBackground};

  @media (min-width: 768px) {
    margin-bottom: 44px;
    padding: 32px;
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
  font-weight: ${fontWeights.regular};
  margin-bottom: 24px;

  @media (min-width: 768px) {
    font-family: ${fonts.headRegular};
    font-size: ${fontSizes.l};
  }

  @media (min-width: 1440px) {
    font-size: ${fontSizes.xl};
    letter-spacing: -2.4px;
    margin-bottom: 44px;
  }
`;

export const GalleryTabs = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 55px;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    margin-bottom: 32px;
  }

  @media (min-width: 1440px) {
    margin-bottom: 44px;
  }
`;
export const GalleryTabLink = styled(NavLink)`
  padding: 8px 10px;
  font-family: ${fonts.regular};
  font-size: 18px;
  font-weight: ${fontWeights.regular};
  text-decoration: none;
  color: ${colors.grey};
  transition: color ${transitions.regular};

  &.active {
    border-bottom: 2px solid ${colors.primaryFont};
    color: ${colors.primaryFont};
  }

  &:hover,
  &:focus {
    color: ${colors.blue};
  }

  @media (min-width: 768px) {
    font-family: ${fonts.light};
    font-size: ${fontSizes.s};
    font-weight: ${fontWeights.light};
  }

  @media (min-width: 1440px) {
    font-family: ${fonts.regular};
    font-weight: ${fontWeights.regular};
  }
`;

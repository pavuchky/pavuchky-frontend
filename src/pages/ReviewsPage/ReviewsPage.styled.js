import styled from 'styled-components';

import { theme } from 'stylesheet/theme';
const { colors, radii, borders, fontWeights, fonts, fontSizes, transitions } =
  theme;

export const ReviewsPageSection = styled.section`
  margin-bottom: 36px;
  @media (min-width: 768px) {
    margin-bottom: 44px;
  }

  @media (min-width: 1440px) {
    margin-bottom: 64px;
  }
`;
export const ReviewsPageGradientContainer = styled.div`
  display: inline-flex;
  padding: 28px 16px;

  flex-direction: column;
  justify-content: center;

  gap: 24px;

  border-radius: 16px;

  background: ${colors.gradientBackground};

  margin-bottom: 34px;
  @media (min-width: 768px) {
    padding: 32px;

    width: 720px;
    overflow: hidden;
    border-radius: ${radii.m};
    gap: 24px;
    margin-bottom: 0;
  }

  @media (min-width: 1440px) {
    padding: 44px 64px;

    width: 1408px;

    border-radius: ${radii.xl};
    gap: 44px;
  }
`;

export const ContactUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 16px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    padding-left: 0px;
  }

  @media (min-width: 1440px) {
  }
`;

export const ContactUsTextContainer = styled.div`
  margin-bottom: 24px;

  @media (min-width: 768px) {
    margin-bottom: 0px;
  }

  @media (min-width: 1440px) {
  }
`;

export const ContactUsHeader = styled.h4`
  font-weight: ${fontWeights.regular};
  font-size: 18px;
  font-family: ${fonts.regular};

  margin-bottom: 12px;
  @media (min-width: 768px) {
    font-size: ${fontSizes.m};
  }

  @media (min-width: 1440px) {
    font-weight: ${fontWeights.light};
    font-size: 26px;
    font-family: ${fonts.light};

    margin-bottom: 16px;
  }
`;

export const ContactUsParagraph = styled.p`
  font-weight: ${fontWeights.light};
  font-size: ${fontSizes.xs};
  font-family: ${fonts.light};

  @media (min-width: 768px) {
    width: 316px;
    font-size: ${fontSizes.s};
  }

  @media (min-width: 1440px) {
    width: 745px;
  }
`;

export const ContactUsButton = styled.button`
  width: 327px;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  border: ${borders.normal};
  border-color: ${colors.blue};
  border-radius: 8px;
  padding: 10.5px;

  background-color: ${colors.white};

  font-weight: ${fontWeights.light};
  font-size: ${fontSizes.xs};
  font-family: ${fonts.light};

  transition: background-color ${transitions.regular},
    color ${transitions.regular};

  &:hover,
  &:focus {
    background-color: ${colors.blue};
    color: ${colors.white};
  }

  @media (min-width: 768px) {
    width: 288px;
    height: 48px;
    padding: 12px;
    font-size: ${fontSizes.s};
    border-radius: ${radii.s};
  }

  @media (min-width: 1440px) {
    width: 440px;
    height: 76px;
    padding: 26px;

    border-radius: ${radii.l};
  }
`;

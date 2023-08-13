import styled from 'styled-components';

import { theme } from 'stylesheet/theme';
const { colors, radii } = theme;

export const ReviewsPageSection = styled.section`
  display: inline-flex;
  padding: 28px 16px;
  margin-bottom: 34px;
  flex-direction: column;
  justify-content: center;

  gap: 24px;

  border-radius: 16px;
  width: 359px;
  background: ${colors.gradientBackground};
  margin-bottom: 36px;

  @media (min-width: 768px) {
    padding: 32px 26px;

    width: 720px;
    overflow: hidden;
    border-radius: ${radii.m};
    gap: 24px;
    margin-bottom: 44px;
  }

  @media (min-width: 1440px) {
    padding: 44px 64px;
    padding-right: 0px;
    width: 1408px;
    margin-bottom: 64px;
    border-radius: ${radii.xl};
    gap: 44px;
    margin-bottom: 64px;
  }
`;

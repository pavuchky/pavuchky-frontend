import styled from 'styled-components';

import { theme } from 'stylesheet/theme';
const { colors, radii } = theme;

export const ReviewsSection = styled.section`
  display: inline-flex;
  padding: 28px 16px;
  flex-direction: column;
  justify-content: center;

  gap: 20px;

  border-radius: 16px;
  width: 359px;
  background: ${colors.gradientBackground};

  @media (min-width: 768px) {
    padding: 32px;
    padding-right: 0px;
    width: 720px;
    overflow: hidden;
    border-radius: ${radii.m};
    gap: 35px;
  }

  @media (min-width: 1440px) {
    padding: 44px 64px;
    width: 1408px;
    border-radius: ${radii.xl};
    gap: 44px;
  }
`;

export const ReviewsTitel = styled.h3``;

export const ReviewsTitelPartContainer = styled.div``;

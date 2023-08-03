import styled from 'styled-components';

import { theme } from 'stylesheet/theme';
const { fontSizes, fontWeights, colors } = theme;

export const OurNeedsHeading = styled.h3`
  font-size: ${fontSizes.m};
  font-weight: ${fontWeights.regular};
`;

export const OurNeedsSection = styled.section`
  display: inline-flex;
  padding: 28px 16px;
  flex-direction: column;
  justify-content: center;

  gap: 20px;

  border-radius: 16px;
  width: 359px;
  background: ${colors.gradientBackground};
`;

export const OurNeedsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

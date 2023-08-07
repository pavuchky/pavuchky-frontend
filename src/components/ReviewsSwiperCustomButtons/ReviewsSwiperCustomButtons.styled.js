import styled from 'styled-components';

import { theme } from 'stylesheet/theme';
const { colors, borders, radii } = theme;

export const ReviewsSwiperCustomButtonsContainer = styled.div`
  display: flex;

  gap: 23px;
  padding-right: 34px;
  padding-top: 72px;
`;

export const ReviewsSwiperCustomButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 85px;
  height: 85px;
  border: ${borders.normal};
  color: ${colors.blue};
  border-radius: ${radii.round};
`;

export const ReviewsSwiperCustomButtonSvg = styled.svg`
  stroke: ${colors.blue};
`;

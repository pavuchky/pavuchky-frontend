import styled from 'styled-components';

import { theme } from 'stylesheet/theme';
const { colors, borders, radii } = theme;

export const ReviewsSwiperCustomButtonsContainer = styled.div`
  display: flex;
  gap: 23px;
`;

export const ReviewsSwiperCustomButton = styled.button`
  width: 85px;
  height: 85px;
  border: ${borders.normal};
  color: ${colors.blue};
  border-radius: ${radii.round};
`;

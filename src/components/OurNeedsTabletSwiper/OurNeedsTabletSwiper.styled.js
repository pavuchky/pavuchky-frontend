import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

import { theme } from 'stylesheet/theme';
const { colors, borders } = theme;

export const OurNeedsItemDiv = styled.div`
  width: 316px;
  height: 178px;
  border: ${borders.normal};
  border-color: ${colors.blue};
  border-radius: 10px;
  background-color: ${colors.white};
  margin: 0;
  padding: 16px;
`;

export const SwiperSlideContainer = styled(SwiperSlide)`
  width: 316px;
  min-height: 178px;
  padding-bottom: 24px;
`;

export const SwiperContainer = styled(Swiper)`
  width: 688px;
  padding-right: 24px;

  .swiper-scrollbar {
    background-color: ${colors.grey};
    width: 654px;
    height: 2px;
  }

  .swiper-scrollbar-drag:last-child {
    background-color: ${colors.blue};
    /* max-width: 127px; */
    /* margin-left: 38px; */
    min-height: 2px;
  }
  /* .swiper-scrollbar-drag:first-child {
    display: none;
  } */
`;

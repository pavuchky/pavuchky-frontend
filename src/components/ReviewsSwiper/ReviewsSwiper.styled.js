import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

import { theme } from 'stylesheet/theme';
const { colors } = theme;

export const ReviewSwiperWrapper = styled.div`
  display: flex;
  width: 100%;

  .swiper-button-disabled {
    color: ${colors.grey};
    border-color: ${colors.grey};

    & svg {
      stroke: ${colors.grey};
    }
  }
`;

export const ReviewsSwiperSlideContainer = styled(SwiperSlide)`
  width: 327px;
  min-height: 263px;
  padding-bottom: 24px;

  @media (min-width: 768px) {
    width: 316px;
    min-height: 369px;
  }

  @media (min-width: 1440px) {
    width: 409px;
  }
`;

export const ReviewsSwiperContainer = styled(Swiper)`
  position: relative;
  width: 327px;
  overflow: hidden;

  .swiper-scrollbar {
    background-color: ${colors.grey};
    width: 327px;
    height: 2px;
  }

  .swiper-scrollbar-drag:last-child {
    background-color: ${colors.blue};
    /* max-width: 60px; */
    /* margin-left: 48px; */

    min-height: 2px;
  }

  @media (min-width: 768px) {
    width: 656px;

    /* .swiper-scrollbar-drag:last-child {
      max-width: 127px;
    } */

    .swiper-scrollbar {
      width: 656px;
    }
  }

  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;

    width: 1117px;
    padding-right: 48px;
    .swiper-scrollbar-drag:last-child {
      display: none;
    }

    .swiper-scrollbar {
      display: none;
    }
  }
`;

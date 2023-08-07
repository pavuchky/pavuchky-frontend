import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

import { theme } from 'stylesheet/theme';
const { colors, borders } = theme;

export const ReviewsSwiperSlideContainer = styled(SwiperSlide)`
  width: 327px;
  min-height: 263px;
  padding-bottom: 24px;

  @media (min-width: 768px) {
  }

  @media (min-width: 1440px) {
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
    max-width: 60px;
    margin-left: 48px;
    min-height: 2px;
  }

  .swiper-button-prev,
  .swiper-button-next {
    display: none;
  }

  @media (min-width: 768px) {
    width: 656px;

    .swiper-scrollbar-drag:last-child {
      max-width: 127px;
    }

    .swiper-scrollbar {
      width: 656px;
    }
  }

  @media (min-width: 1440px) {
    width: 1344px;
    padding-left: 227px;

    .swiper-scrollbar-drag:last-child {
      display: none;
    }

    .swiper-scrollbar {
      display: none;
    }

    .swiper-button-prev {
      position: absolute;

      display: block;
      top: 95px;
      left: 0px;
      width: 85px;
      height: 85px;
      border: ${borders.normal};
      border-color: ${colors.blue};
      border-radius: 50%;
    }

    .swiper-button-next {
      position: absolute;
      display: block;
      top: 95px;
      left: 108px;
      width: 85px;
      height: 85px;
      border: ${borders.normal};
      border-color: ${colors.blue};
      border-radius: 50%;
    }

    .swiper-button-prev::after,
    .swiper-button-next::after {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .swiper-button-disabled {
      color: ${colors.grey};
      border-color: ${colors.grey};
    }
  }
`;

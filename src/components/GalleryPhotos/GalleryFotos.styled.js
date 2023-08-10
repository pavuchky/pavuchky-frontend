import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

import { theme } from 'stylesheet/theme';
const { colors } = theme;


export const GallerySwiperWrapper = styled.div`
  display: flex;
  width: 100%;`


  export const GallerySwiperSlideContainer = styled(SwiperSlide)`
  width: 327px;
  min-height: 263px;
  padding-bottom: 25px;`

export const GallerySwiperContainer = styled(Swiper)`
  position: relative;
  width: 327px;
  overflow: hidden;

  .swiper-scrollbar {
    background-color: ${colors.grey};
    width: 327px;
   
  }

  .swiper-scrollbar-drag:last-child {
    background-color: #0069b5;
    min-height: 2px;
  }
`;

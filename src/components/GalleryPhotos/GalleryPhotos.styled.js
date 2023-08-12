import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

import { theme } from 'stylesheet/theme';
const { colors } = theme;

export const GallerySwiperWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const GallerySwiperSlideContainer = styled(SwiperSlide)`
  width: 327px;
  min-height: 263px;
  padding-bottom: 25px;
`;

export const GallerySwiperContainer = styled(Swiper)`
  position: relative;
  width: 327px;
  overflow: hidden;

  .swiper-scrollbar {
    width: 327px;
  }

  .swiper-scrollbar.swiper-scrollbar-horizontal {
    height: 2px;
  }
  .swiper-scrollbar-drag:last-child {
    background-color: ${colors.blue};
    height: 3px;
  }
  .swiper-scrollbar-drag {
    background-color: rgba(184, 182, 183, 1);
  }
`;

export const LightBoxImg = styled.img`
  width: 273px;
  height: 344px;
  border-radius: 16px;
  opacity: 1;
  @media (min-width: 768px) {
    width: 550px;
    height: 690px;
    border-radius: 10px;
    opacity: 1;
  }
`;


export const SwiperImg = styled.img`
  width: 254px;
  height: 300px;
  border-radius: 16px;
`;
/**==============Styles For Light Box================== */


export const ImageModalOverlay = styled.div`
  position: fixed;
  top: 116px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 1);
  opacity: 0.9;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageModalContent = styled.div`
  padding: 20px;
  border-radius: 4px;
  max-width: 80%;
  max-height: 80%;
  overflow: auto;
  position: fixed;
`;

export const ImageModalCloseBtn = styled.button`
  position: absolute;
  top: 0;
  right: 1px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
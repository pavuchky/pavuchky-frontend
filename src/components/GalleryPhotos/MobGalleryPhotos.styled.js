import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

import { theme } from 'stylesheet/theme';
import { createGlobalStyle } from 'styled-components';

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
    background-color: ${colors.grey};
    height: 2px;
  }

  .swiper-scrollbar-drag:last-child {
    background-color: ${colors.blue};
    min-height: 2px;
  }

  .swiper-scrollbar-drag:not(:last-child) {
    display: none;
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
  top: -65px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(255 255 255 / 90%);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageModalContent = styled.div`
  border-radius: 4px;
  max-width: 80%;
  max-height: 80%;
  overflow: auto;
  position: fixed;

  .slider-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 344px;
  }

  .carousel .slide img {
    max-width: 100%;
    max-height: 100%;
    height: auto;
    width: auto;
  }

  @media (min-width: 768px) {
    .slider-wrapper {
      max-height: 690px;
    }
  }

  @media (min-width: 1440px) {
    .slider-wrapper {
      max-height: 700px;
    }
  }
`;

export const LightBoxImg = styled.img`
  max-width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const LightBoxImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 344px;
  max-width: 273px;
  margin: 0 auto;

  @media (min-width: 768px) {
    max-width: 550px;
    height: 690px;
  }

  @media (min-width: 1440px) {
    max-width: 850px;
    height: 700px;
  }
`;

export const GlobalStyles = createGlobalStyle`
  body.modal-open {
    overflow: hidden;
  }
`;

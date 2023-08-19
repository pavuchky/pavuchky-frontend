import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReactPlayer from 'react-player';
import { theme } from '../../stylesheet/theme';
const { fonts, fontSizes, fontWeights, colors } = theme;

export const VideoGallerySwiperWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const VideoReactPlayer = styled(ReactPlayer)`
  width: 100% !important;
`;

export const VideoSwiperSlideContainer = styled(SwiperSlide)`
  width: 100%;
  height: 427px;
`;

export const VideoText = styled.span`
  display: flex;
  padding-top: 16px;
  padding-left: 16px;
  padding-bottom: 16px;
  margin-bottom: 24px;

  font-family: ${fonts.regular};
  font-size: ${fontSizes.xs};
  font-weight: ${fontWeights.regular};

  border: 1px solid ${colors.blue};
  border-top: 0px;
  border-radius: 0px 0px 8px 8px;

  background-color: ${colors.white};

  @media (min-width: 768px) {
    font-family: ${fonts.light};
    font-size: ${fontSizes.s};
    font-weight: ${fontWeights.light};
    padding-bottom: 0;
    margin-bottom: 0;
    border: 0;
    border-top: 0px;
    border-radius: 0px;
    padding: 16px 16px 24px 16px;
  }
`;
export const VideoSwiperContainer = styled(Swiper)`
  position: relative;
  width: 100%;
  overflow: hidden;

  border-radius: 8px 8px 0 0;

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

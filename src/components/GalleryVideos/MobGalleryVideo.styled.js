import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReactPlayer from 'react-player';
import { theme } from '../../stylesheet/theme';
const { fontSizes, fontWeights, colors } = theme;

export const VideoGallerySwiperWrapper = styled.div`
  display: flex;
  width: 320px;

`;
export const VideoReactPlayer = styled(ReactPlayer)`

width: 320px;
`;
export const VideoSwiperSlideContainer = styled(SwiperSlide)`
  width:320px;
  height: 427px;

`;
export const VideoText = styled.span`
  display: flex;
  padding-top: 16px;
  padding-bottom: 16px;
  margin-bottom: 24px;
  font-size: ${fontSizes.xs};
  font-weight: ${fontWeights.regular};
  border: 1px solid #0069b5;
  border-top: 0px;
  border-radius: 0px 0px 8px 8px;
  padding-left: 16px;

  @media (min-width: 768px) {
    font-size: ${fontSizes.s};
    font-weight: ${fontWeights.light};
    padding-bottom: 0;
    margin-bottom: 0;
    border: 0;
    border-top: 0px;
    border-radius: 0px;
    padding-left: 16px;
  }
`;
export const VideoSwiperContainer = styled(Swiper)`
  position: relative;
  width: 320px;
  overflow: hidden;
 
  border-radius: 8px 8px 0px 0px;
  

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


export const SwiperSliderWrapper = styled.div`
  /* border: 1px solid #0069b5; */
  width: 320px;
  background-color: #fff;
`;



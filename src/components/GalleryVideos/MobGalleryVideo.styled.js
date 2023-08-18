import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReactPlayer from 'react-player';
import { theme } from '../../stylesheet/theme';
const { fontSizes, fontWeights, colors } = theme;

export const VideoGallerySwiperWrapper = styled.div`
  display: flex;
  width: 327px;

`;
export const VideoReactPlayer = styled(ReactPlayer)`
margin-bottom: 16px;
`;
export const VideoSwiperSlideContainer = styled(SwiperSlide)`

  height: 427px;

`;
export const VideoText = styled.span`
  display: flex;
  width: 257px;
  padding-bottom: 16px;
  margin-bottom: 24px;
  font-size: ${fontSizes.xs};
  font-weight: ${fontWeights.regular};
  @media (min-width: 768px) {
    font-size: ${fontSizes.s};
    font-weight: ${fontWeights.light};
    padding-bottom: 0;
    margin-bottom: 0;
  }
`;
export const VideoSwiperContainer = styled(Swiper)`
  position: relative;
 
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




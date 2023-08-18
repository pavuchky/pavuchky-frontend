import React from 'react';
import useFetch from '../../hooks/useFetch';


import 'swiper/css/bundle';
import { Scrollbar } from 'swiper';

import {
  VideoGallerySwiperWrapper,
  VideoSwiperSlideContainer,
  VideoSwiperContainer, VideoText, VideoReactPlayer
} from './MobGalleryVideo.styled';

const MobGalleryVideos = () => {
  const { data } = useFetch('galleryVideo');


  return (
    <VideoGallerySwiperWrapper>
      <VideoSwiperContainer
        spaceBetween={16}
        slidesPerView={1}
        scrollbar={{ draggable: false }}
        modules={[Scrollbar]}
      >
        {data?.galleryVideoList?.map(({ id, videoLink }) => (
          <VideoSwiperSlideContainer key={id}>
            <VideoReactPlayer
              key={id}
              url={videoLink}
              width="327"
              playing={false}
              muted={true}
              controls={true}
              loop={true}
            />
            <VideoText>Виготовлення маскувальних сіток</VideoText>
          </VideoSwiperSlideContainer>
        ))}
      </VideoSwiperContainer>
    </VideoGallerySwiperWrapper>
  );
};
export default MobGalleryVideos;

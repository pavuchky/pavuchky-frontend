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
  console.log(data);

  return (
    <VideoGallerySwiperWrapper>
      <VideoSwiperContainer
        spaceBetween={16}
        slidesPerView={1}
        scrollbar={{ draggable: false }}
        modules={[Scrollbar]}
      >
        {data?.galleryVideoList?.map(({ id, index, videoLink }) => (
          <VideoSwiperSlideContainer key={index}>
            <VideoReactPlayer
              key={index}
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

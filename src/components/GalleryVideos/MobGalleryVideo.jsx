import React from 'react';
import useFetch from '../../hooks/useFetch';

import 'swiper/css/bundle';
import { Scrollbar } from 'swiper';

import {
  VideoGallerySwiperWrapper,
  VideoSwiperSlideContainer,
  VideoSwiperContainer,
  VideoText,
  VideoReactPlayer,
} from './MobGalleryVideo.styled';

const MobGalleryVideos = () => {
  const { data } = useFetch('galleryVideo');

  return (
    <VideoGallerySwiperWrapper>
      <VideoSwiperContainer
        spaceBetween={16}
        slidesPerView={1}
        scrollbar={{ draggable: true }}
        modules={[Scrollbar]}
      >
        {data?.galleryVideoList?.map(({ id, videoLink }) => (
          <VideoSwiperSlideContainer key={id}>
            <VideoReactPlayer
              url={videoLink}
              width={320}
              playing={false}
              muted={true}
              controls={true}
              loop={true}
              config={{
                youtube: {
                  playerVars: { origin: 'https://www.youtube.com' },
                },
              }}
            />
            <VideoText>
              Виготовлення <br /> маскувальних сіток
            </VideoText>
          </VideoSwiperSlideContainer>
        ))}
      </VideoSwiperContainer>
    </VideoGallerySwiperWrapper>
  );
};
export default MobGalleryVideos;

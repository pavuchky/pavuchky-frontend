import React, { useState } from 'react';
import { Scrollbar} from 'swiper';
import 'swiper/css/bundle';

import {
  VideoGallerySwiperWrapper,
  VideoSwiperSlideContainer,
  VideoSwiperContainer,
  VideoText,
  VideoReactPlayer,
} from './MobGalleryVideo.styled';

const MobGalleryVideos = ({ data }) => {
  const [playingVideoId, setPlayingVideoId] = useState(null);

  const handleVideoClick = (id) => {
    setPlayingVideoId(id);
  };
    
  return (
    <VideoGallerySwiperWrapper>
      <VideoSwiperContainer
        
        spaceBetween={16}
        slidesPerView={1}
        scrollbar={{ draggable: true }}
        modules={[Scrollbar]}
       clickable= {true}
      >
        {data?.galleryVideoList?.map(({ id, videoLink }) => (
          <VideoSwiperSlideContainer key={id}  >
            <div  onClick={() => handleVideoClick(id)}>
            <VideoReactPlayer
            
         style={{ pointerEvents: 'none' }}
              url={videoLink}
              width={320}
              playing={id === playingVideoId}
              muted={true}
              controls={false}
              loop={false}
              config={{
                youtube: {
                  playerVars: { origin: 'https://www.youtube.com' },
                },
              }}
            /></div>
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

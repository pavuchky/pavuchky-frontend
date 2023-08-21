import React, { useState } from 'react';
import { Scrollbar } from 'swiper';
import 'swiper/css/bundle';

import {
  VideoGallerySwiperWrapper,
  VideoSwiperSlideContainer,
  VideoSwiperContainer,
  VideoText,
  VideoReactPlayer, RedirectButton
} from './MobGalleryVideo.styled';

const MobGalleryVideos = ({ data }) => {
  const [playingVideoLink, setPlayingVideoLink] = useState(null);

  const handleVideoClick = (videoLink) => {
    setPlayingVideoLink(videoLink);
  };

  const redirectToYouTube = () => {
    if (playingVideoLink) {
      window.open(playingVideoLink, '_blank');
    }
  };

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
            <div onClick={() => handleVideoClick(videoLink)}>
              <VideoReactPlayer
                style={{ pointerEvents: 'none' }}
                url={videoLink}
                width={320}
                playing={videoLink === playingVideoLink}
                muted={true}
                controls={false}
                loop={false}
                config={{
                  youtube: {
                    playerVars: { origin: 'https://www.youtube.com' },
                  },
                }}
              />
            </div>
            <VideoText>
              Виготовлення <br /> маскувальних сіток
            </VideoText>
            {playingVideoLink && (
              <RedirectButton onClick={redirectToYouTube}>Переглянути на YouTube</RedirectButton>
            )}
          </VideoSwiperSlideContainer>
        ))}
      </VideoSwiperContainer>
      
    </VideoGallerySwiperWrapper>
  );
};

export default MobGalleryVideos;

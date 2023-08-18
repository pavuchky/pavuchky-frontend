import React, { useState } from 'react';
import useFetch from '../../hooks/useFetch';

import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';

import {
  VideoTabGridContainer,
  VideoTabButton,
  VideoTabReactPlayer,
  VideoDesctopGridContainer,
  VideoDesctopReactPlayer,
  VideoPaginationContainer,
  VideoPagnation,
} from './TabDesctopGalleryVideo.styled';
import { VideoText } from './MobGalleryVideo.styled';

const TabDesctopGalleryVideo = () => {
  const { data } = useFetch('galleryVideo');
  
  const [currentPage, setCurrentPage] = useState(1);

  const [visibleVideos, setVisibleVideos] = useState(2);

  const itemsPerPage = 3;
  const isDesktopScreen = useMediaQuery({ minWidth: 1440 });
  const isTabletScreen = useMediaQuery({ minWidth: 768 });

  const { t } = useTranslation();

  const loadMoreVideos = () => {
    setVisibleVideos(prevVisibleImages => prevVisibleImages + 3);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const showingVideos = data?.galleryVideoList?.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  const onPageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };
  return (
    <>
      {!isDesktopScreen && isTabletScreen && (
        <>
          <>
            <VideoTabGridContainer>
              {data?.galleryVideoList
                ?.slice(0, visibleVideos)
                .map(({ videoLink }, id) => {
                  return (
                    <div key={id} >
                      <VideoTabReactPlayer
                        url={videoLink}
                        width={"100%"}
                        playing={false}
                        config={{youtube:{playerVars:{origin: 'https://www.youtube.com'}}}}
                      />
                      <VideoText>Виготовлення маскувальних сіток</VideoText>
                    </div>
                  );
                })}
            </VideoTabGridContainer>
          </>
          <div>
            {visibleVideos < data?.galleryVideoList?.length && (
              <VideoTabButton onClick={loadMoreVideos}>
                {t('buttons.viewMore')}
              </VideoTabButton>
            )}
          </div>
        </>
      )}

      <>
        {isDesktopScreen && (
          <>
            <>
              <VideoDesctopGridContainer>
                {showingVideos?.map(({ videoLink }, id) => {
                  return (
                    <div key={id}>
                      <VideoDesctopReactPlayer
                        url={videoLink}
                        width={"316"}
                        playing={false}
                         config={{youtube:{playerVars:{origin: 'https://www.youtube.com'}}}}
                      />
                      <VideoText>Виготовлення маскувальних сіток</VideoText>
                    </div>
                  );
                })}
              </VideoDesctopGridContainer>
            </>
            <VideoPaginationContainer>
              <VideoPagnation
                count={Math.ceil(
                  (data?.galleryVideoList?.length || 0) / itemsPerPage
                )}
                page={currentPage}
                onChange={onPageChange}
                color="primary"
                variant="outlined"
                boundaryCount={1}
                siblingCount={0}
              />
            </VideoPaginationContainer>
          </>
        )}
      </>
    </>
  );
};

export default TabDesctopGalleryVideo;

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

const TabDesctopGalleryVideo = () => {
  const { data } = useFetch('galleryVideo');
console.log(data);
  const [currentPage, setCurrentPage] = useState(1);

  const [visibleVideos, setVisibleVideos] = useState(2);

  const itemsPerPage = 1;
  const isDesktopScreen = useMediaQuery({ minWidth: 1440 });
  const isTabletScreen = useMediaQuery({ minWidth: 768 });

  const { t } = useTranslation();

  const loadMoreVideos = () => {
    setVisibleVideos(prevVisibleImages => prevVisibleImages + 1);
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
          <div>
            <VideoTabGridContainer>
              {data?.galleryVideoList
                ?.slice(0, visibleVideos)
                .map(({ videoLink },  index) => {
                  return (
                    
                    <div key={index}>
                      <VideoTabReactPlayer
                       
                        url={videoLink}
                        width="316"
                        playing={false}
                      />
                    </div>
                  );
                })}
            </VideoTabGridContainer>
            <span>Виготовлення маскувальних сіток</span>
          </div>
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
                {showingVideos?.map(({videoLink}, index) => {
                  return (
                    <div key={index}>
                      <VideoDesctopReactPlayer
                        url={videoLink}
                        width="316"
                        playing={false}
                      />
                    </div>
                  );
                })}
              </VideoDesctopGridContainer>
            </>{' '}
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

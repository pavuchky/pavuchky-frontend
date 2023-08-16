import React, { useState } from 'react';
// import useFetch from '../../hooks/useFetch';

// import { GalleryPagnation } from './MuiPagnation.styled';
// import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';

// import { PaginationItem } from '@mui/material';
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
  // const { data } = useFetch('galleryVideo');

  const galleryVideoList = [
    {
      id: 1,
      videoLink: 'https://#',
    },
    {
      id: 2,
      videoLink: 'https://#',
    },
    { id: 3, videoLink: 'https://#' },
    {
      id: 4,
      videoLink: 'https://#',
    },
    {
      id: 5,
      videoLink: 'https://#',
    },
    {
      id: 6,
      videoLink: 'https://#',
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);

  const [visibleVideos, setVisibleVideos] = useState(2);

  const itemsPerPage = 3;
  const isDesktopScreen = useMediaQuery({ minWidth: 1440 });
  const isTabletScreen = useMediaQuery({ minWidth: 768 });

  const { t } = useTranslation();

  const loadMoreVideos = () => {
    setVisibleVideos(prevVisibleImages => prevVisibleImages + 2);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const showingVideos = galleryVideoList?.slice(
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
              {galleryVideoList.slice(0, visibleVideos).map((videoLink, id) => {
                return (
                  <VideoTabReactPlayer
                    key={id}
                    url={videoLink}
                    width="316"
                    playing={false}
                  />
                );
              })}
            </VideoTabGridContainer>
          </div>
          <div>
            {visibleVideos < galleryVideoList.length && (
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
                {showingVideos?.map((id, videoLink) => {
                  return (
                    <div>
                      <VideoDesctopReactPlayer
                        key={id}
                        url={videoLink}
                        width="316"
                        playing={false}
                      />
                    </div>
                  );
                })}
              </VideoDesctopGridContainer>
            </> <VideoPaginationContainer>
        <VideoPagnation
          count={Math.ceil((galleryVideoList.length || 0) / itemsPerPage)}
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

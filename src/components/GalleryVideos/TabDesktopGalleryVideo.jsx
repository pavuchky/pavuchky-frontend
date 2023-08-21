import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { PaginationItem } from '@mui/material';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';

import {
  VideoTabGridContainer,
  VideoTabButton,
  VideoTabReactPlayer,
  VideoDesktopGridContainer,
  VideoDesktopReactPlayer,
  VideoPaginationContainer,
  VideoPagination,
} from './TabDesktopGalleryVideo.styled';
import { VideoText } from './MobGalleryVideo.styled';

const TabDesktopGalleryVideo = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const [visibleVideos, setVisibleVideos] = useState(4);

  const itemsPerPage = 9;
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
          <VideoTabGridContainer>
            {data?.galleryVideoList
              ?.slice(0, visibleVideos)
              .map(({ videoLink, id }) => {
                return (
                  <li key={id}>
                    <VideoTabReactPlayer
                  
                      url={videoLink}
                      width={'100%'}
                      playing={false}
                      config={{
                        youtube: {
                          playerVars: {
                            origin: 'https://www.youtube.com',
                          },
                        },
                      }}
                    />
                    <VideoText>Виготовлення маскувальних сіток</VideoText>
                  </li>
                );
              })}
          </VideoTabGridContainer>
          {visibleVideos < data?.galleryVideoList?.length && (
            <VideoTabButton onClick={loadMoreVideos}>
              {t('buttons.viewMore')}
            </VideoTabButton>
          )}
        </>
      )}

      {isDesktopScreen && (
        <>
          <VideoDesktopGridContainer>
            {showingVideos?.map(({ videoLink, id }) => {
              return (
                <li key={id}>
                  <VideoDesktopReactPlayer
                    url={videoLink}
                    width={'316'}
                    playing={false}
                    config={{
                      youtube: {
                        playerVars: { origin: 'https://www.youtube.com' },
                      },
                    }}
                  />
                  <VideoText>Виготовлення маскувальних сіток</VideoText>
                </li>
              );
            })}
          </VideoDesktopGridContainer>

          <VideoPaginationContainer>
            <VideoPagination
              count={Math.ceil(
                (data?.galleryVideoList?.length || 0) / itemsPerPage
              )}
              page={currentPage}
              onChange={onPageChange}
              color="primary"
              variant="outlined"
              boundaryCount={1}
              siblingCount={0}
              renderItem={item => (
                <PaginationItem
                  slots={{
                    previous: SlArrowLeft,
                    next: SlArrowRight,
                  }}
                  {...item}
                />
              )}
            />
          </VideoPaginationContainer>
        </>
      )}
    </>
  );
};

export default TabDesktopGalleryVideo;

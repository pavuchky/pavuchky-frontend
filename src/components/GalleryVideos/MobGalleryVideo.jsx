import React, { useContext, useState } from 'react';
import { PaginationItem } from '@mui/material';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import { LanguageContext } from 'utils/LanguageContext';
import {
  VideoMobileContainer,
  MobPagination,
  VideoText,
  VideoReactPlayer,
} from './MobGalleryVideo.styled';
import { useTranslation } from 'react-i18next';

const MobGalleryVideos = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { t } = useTranslation();
  const { lang } = useContext(LanguageContext);

  const itemsPerPage = 1;
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
      <VideoMobileContainer>
        {showingVideos?.map(({ videoLink, id, videoDescription }) => {
          const renderedDescription =
            videoDescription?.[lang] || `${t('videos.netsCreation')}`;
          return (
            <li key={id}>
              <VideoReactPlayer
                url={videoLink}
                width={'316'}
                playing={false}
                config={{
                  youtube: {
                    playerVars: { origin: 'https://www.youtube.com' },
                  },
                }}
              />
              <VideoText>{renderedDescription}</VideoText>
            </li>
          );
        })}
      </VideoMobileContainer>
      <div>
        <MobPagination
          count={Math.ceil(
            (data?.galleryVideoList?.length || 0) / itemsPerPage
          )}
          page={currentPage}
          onChange={onPageChange}
          size="small"
          color="primary"
          variant="outlined"
          boundaryCount={0}
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
      </div>
    </>
  );
};

export default MobGalleryVideos;

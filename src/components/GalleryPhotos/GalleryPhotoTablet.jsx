import React, { useState } from 'react';
import useFetch from '../../hooks/useFetch';
import ImageModal from './ImageModal';

import {
  GalleryTabGridContainer,
  GalleryTabButton,
  GalleryTabImg,
  GalleryDesktopImg,
  GalleryPaginationContainer,
  GalleryDesktopGridContainer,
  GalleryItem,
  GalleryDesktopItem,
} from './GalleryPhotoTablet.styled';
import { GalleryPagnation } from './MuiPagnation.styled';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';

import { useMediaQuery } from 'react-responsive';
import { PaginationItem } from '@mui/material';
import { useTranslation } from 'react-i18next';
const GalleryTabPhotos = () => {
  const { data } = useFetch('galleryPhoto');

  const [currentPage, setCurrentPage] = useState(1);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [visibleImages, setVisibleImages] = useState(6);

  const itemsPerPage = 9;
  const isDesktopScreen = useMediaQuery({ minWidth: 1440 });
  const isTabletScreen = useMediaQuery({ minWidth: 768 });

  const { t } = useTranslation();
  const loadMoreImages = () => {
    setVisibleImages(prevVisibleImages => prevVisibleImages + 6);
  };

  const openLightbox = index => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const showingImages = data?.galleryPhotoList?.slice(
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
          <GalleryTabGridContainer>
            {data?.galleryPhotoList
              ?.slice(0, visibleImages)
              .map((photoLink, index) => {
                return (
                  <GalleryItem key={index}>
                    <GalleryTabImg
                      src={photoLink.photoLink}
                      alt="Warriors and camouflage nets"
                      onClick={() => openLightbox(index)}
                    />
                  </GalleryItem>
                );
              })}
          </GalleryTabGridContainer>

          <ImageModal
            isOpen={lightboxOpen}
            images={data}
            selectedImageIndex={selectedImageIndex}
            onClose={closeLightbox}
          />

          {visibleImages < data?.galleryPhotoList.length && (
            <GalleryTabButton onClick={loadMoreImages}>
              {t('buttons.viewMore')}
            </GalleryTabButton>
          )}
        </>
      )}

      <>
        {isDesktopScreen && (
          <>
            <GalleryDesktopGridContainer>
              {showingImages?.map((photoLink, index) => {
                return (
                  <GalleryDesktopItem>
                    <GalleryDesktopImg
                      key={index}
                      src={photoLink.photoLink}
                      alt="Warriors and camouflage nets"
                      onClick={() => openLightbox(index)}
                    />
                  </GalleryDesktopItem>
                );
              })}
            </GalleryDesktopGridContainer>

            <ImageModal
              isOpen={lightboxOpen}
              images={data}
              selectedImageIndex={selectedImageIndex}
              onClose={closeLightbox}
            />

            <GalleryPaginationContainer>
              <GalleryPagnation
                count={Math.ceil(
                  (data?.galleryPhotoList?.length || 0) / itemsPerPage
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
            </GalleryPaginationContainer>
          </>
        )}
      </>
    </>
  );
};

export default GalleryTabPhotos;

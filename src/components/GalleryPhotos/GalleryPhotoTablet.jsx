import { useState } from 'react';
import { PaginationItem } from '@mui/material';
import { useMediaQuery } from 'react-responsive';
import { useTranslation } from 'react-i18next';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';

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
import { GalleryPagination } from './MuiPagnation.styled';

const GalleryTabPhotos = ({ data }) => {
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
    const absoluteIndex = startIndex + index;
    setSelectedImageIndex(absoluteIndex);
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
    const newStartIndex = (newPage - 1) * itemsPerPage;
    const newSelectedImageIndex =
      newStartIndex + (selectedImageIndex % itemsPerPage);
    setSelectedImageIndex(newSelectedImageIndex);
  };

  return (
    <>
      {!isDesktopScreen && isTabletScreen && (
        <>
          <GalleryTabGridContainer>
            {data?.galleryPhotoList
              ?.slice(0, visibleImages)
              .map((photo, index) => {
                return (
                  <GalleryItem key={photo.id}>
                    <GalleryTabImg
                      src={photo.photoLink}
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
              {showingImages?.map((photo, index) => {
                return (
                  <GalleryDesktopItem key={photo.id}>
                    <GalleryDesktopImg
                      src={photo.photoLink}
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
              <GalleryPagination
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

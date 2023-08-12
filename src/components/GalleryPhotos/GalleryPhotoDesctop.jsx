import React, { useState } from 'react';
import useFetch from '../../hooks/useFetch';
import { Pagination } from '@mui/material';

import ImageModal from './ImageModal';

import {
  GalleryDesctopGridContainer,
    GalleryDestopImg,
  GalleryPaginationContainer
} from './GalleryPhotoTablet.styled';

const GalleryDesctopPhotos = () => {
  const { data } = useFetch('galleryPhoto');
  const itemsPerPage = 3; 

  const [currentPage, setCurrentPage] = useState(1);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const onPageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleImages = data?.galleryPhotoList?.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <div>
      <GalleryDesctopGridContainer>
        {visibleImages?.map((photoLink, index) => {
          return (
            <GalleryDestopImg
              key={index}
              src={photoLink.photoLink}
              alt="Varior"
              onClick={() => openLightbox(index)}
            />
          );
        })}
          </GalleryDesctopGridContainer>
          <GalleryPaginationContainer>
      <Pagination
        count={Math.ceil((data?.galleryPhotoList?.length || 0) / itemsPerPage)}
        page={currentPage}
        onChange={onPageChange}
        color="primary"  
         variant="outlined" 
      />
      </GalleryPaginationContainer>
      <ImageModal
        isOpen={lightboxOpen}
        images={data}
        selectedImageIndex={selectedImageIndex}
        onClose={closeLightbox}
      />
    </div>
  );
};

export default GalleryDesctopPhotos;

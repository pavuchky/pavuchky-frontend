import React, { useState } from 'react';
import useFetch from '../../hooks/useFetch';
import ImageModal from './ImageModal';
import GalleryDesctopPhotos from './GalleryPhotoDesctop';
import {
  GalleryTabGridContainer,
  GalleryTabButton,
  GalleryTabImg,
} from './GalleryPhotoTablet.styled';

const GalleryTabPhotos = () => {
  const { data } = useFetch('galleryPhoto');

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [visibleImages, setVisibleImages] = useState(6);

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

  return (
    <>
      <div>
        <GalleryTabGridContainer>
          {data?.galleryPhotoList
            ?.slice(0, visibleImages)
            .map((photoLink, index) => {
              return (
                <GalleryTabImg
                  key={index}
                  src={photoLink.photoLink}
                  alt="Varior"
                  onClick={() => openLightbox(index)}
                />
              );
            })}
        </GalleryTabGridContainer>
       
        <ImageModal
          isOpen={lightboxOpen}
          images={data}
          selectedImageIndex={selectedImageIndex}
          onClose={closeLightbox}
        />
      </div>
      <div>
        {visibleImages < data?.galleryPhotoList.length && (
          <GalleryTabButton onClick={loadMoreImages}>
            Переглянути більше
          </GalleryTabButton>
        )}
      </div>
      <div>
        <GalleryDesctopPhotos/>
      </div>
    </>
  );
};

export default GalleryTabPhotos;

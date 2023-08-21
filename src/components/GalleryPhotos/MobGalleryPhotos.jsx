import React, { useState } from 'react';
import { Scrollbar } from 'swiper';
import 'swiper/css/bundle';

import {
  GallerySwiperSlideContainer,
  GallerySwiperContainer,
  SwiperImg,
} from './MobGalleryPhotos.styled';

import ImageModal from './ImageModal';

const MobGalleryPhotos = ({ data }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openLightbox = index => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <>
      <GallerySwiperContainer
        spaceBetween={16}
        slidesPerView={1.3}
        scrollbar={{ draggable: true }}
        modules={[Scrollbar]}
      >
        {data?.galleryPhotoList?.map((photoLink, index) => {
          return (
            <GallerySwiperSlideContainer
              key={index}
              onClick={() => openLightbox(index)}
            >
              <SwiperImg src={photoLink.photoLink} alt="Varior" />
            </GallerySwiperSlideContainer>
          );
        })}
      </GallerySwiperContainer>

      <ImageModal
        isOpen={lightboxOpen}
        images={data}
        selectedImageIndex={selectedImageIndex}
        onClose={closeLightbox}
      />
    </>
  );
};

export default MobGalleryPhotos;

import React, { useState } from 'react';
import  useFetch  from "../../hooks/useFetch";


import 'swiper/css/bundle';
import { Scrollbar } from 'swiper';
import {
  GallerySwiperSlideContainer,
  GallerySwiperContainer,
  SwiperImg
} from './GalleryPhotos.styled';

import ImageModal from './ImageModal';
import GalleryTabPhotos from './GalleryPhotoTablet';




const GalleryPhotos = () => {

   const { data } = useFetch("galleryPhoto");
   const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <div id='gallery/photos'>
      <GallerySwiperContainer
        spaceBetween={16}
        slidesPerView={1.3}
        scrollbar={{ draggable: false }}
         modules={[Scrollbar]}
      >
       
          {data?.galleryPhotoList?.map((photoLink, index) => {
         return   <GallerySwiperSlideContainer key={index} onClick={() => openLightbox(index)}>
            <SwiperImg src={photoLink.photoLink} alt="Varior" />
              </GallerySwiperSlideContainer>
           
          })}
      </GallerySwiperContainer>

       <ImageModal
        isOpen={lightboxOpen}
        images={data?.galleryPhotoList?.photoLink}
        selectedImageIndex={selectedImageIndex}
        onClose={closeLightbox}
      />
     <GalleryTabPhotos/> 
    </div>
  );
};

export default GalleryPhotos;
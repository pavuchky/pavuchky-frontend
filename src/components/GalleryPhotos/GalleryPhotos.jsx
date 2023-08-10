import React, { useState } from 'react';

import galleryImg1 from '../../assets/images/gallery/gallery_img1.jpg';
import galleryImg2 from '../../assets/images/gallery/gallery_img2.jpg';
import galleryImg3 from '../../assets/images/gallery/gallery_img3.jpg';
import galleryImg4 from '../../assets/images/gallery/gallery_img4.jpg';
import galleryImg5 from '../../assets/images/gallery/gallery_img5.jpg';
import galleryImg6 from '../../assets/images/gallery/gallery_img6.jpg';

import 'swiper/css/bundle';
import { Scrollbar } from 'swiper';
import {
  GallerySwiperSlideContainer,
  GallerySwiperContainer,
} from './GalleryPhotos.styled';

import { Gallery} from 'react-photoswipe-gallery';
import GalleryTabPhotos from './GalleryPhotoTablet';

const GalleryPhotos = () => {
  const imgArrayMobile = [
    {
      original: galleryImg1,
      thumbnail: galleryImg1,
      width: 254,
      height: 300,
    },
    {
      original: galleryImg2,
      thumbnail: galleryImg2,
      width: 254,
      height: 300,
    },
    {
      original: galleryImg3,
      thumbnail: galleryImg3,
      width: 254,
      height: 300,
    },
    {
      original: galleryImg4,
      thumbnail: galleryImg4,
      width: 254,
      height: 300,
    },
    {
      original: galleryImg5,
      thumbnail: galleryImg5,
      width: 254,
      height: 300,
    },
    {
      original: galleryImg6,
      thumbnail: galleryImg6,
      width: 254,
      height: 300,
    },
  ];
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
    <div>
      <GallerySwiperContainer
        spaceBetween={16} slidesPerView={1.3}
        scrollbar={{ draggable: false }}
         modules={[Scrollbar]}
      >
        {imgArrayMobile.map((img, index) => (
          <GallerySwiperSlideContainer key={index} onClick={() => openLightbox(index)}>
            <img src={img.thumbnail} alt={`Gallery ${index + 1}`} />
          </GallerySwiperSlideContainer>
        ))}
      </GallerySwiperContainer>

      <Gallery
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        items={imgArrayMobile.map((img) => ({
          src: img.original,
          w: img.width,
          h: img.height,
        }))}
        index={selectedImageIndex}
      />
      <GalleryTabPhotos/>
    </div>
  );
};

export default GalleryPhotos;
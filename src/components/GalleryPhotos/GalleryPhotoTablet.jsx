import React, { useState } from 'react';
import galleryImg1 from '../../assets/images/gallery/gallery_img1.jpg';
import galleryImg2 from '../../assets/images/gallery/gallery_img2.jpg';
import galleryImg3 from '../../assets/images/gallery/gallery_img3.jpg';
import galleryImg4 from '../../assets/images/gallery/gallery_img4.jpg';
import galleryImg5 from '../../assets/images/gallery/gallery_img5.jpg';
import galleryImg6 from '../../assets/images/gallery/gallery_img6.jpg';

import { GalleryTabGridContainer, GalleryTabButton, GalleryTabImg} from './GalleryPhotoTablet.styled';

const GalleryTabPhotos = () => {
  const imgArrayTablet = [
    galleryImg1,
    galleryImg2,
    galleryImg3,
    galleryImg4,
    galleryImg5,
    galleryImg6,
  ];

  const [visibleImages, setVisibleImages] = useState(4); 

  const loadMoreImages = () => {
    setVisibleImages(prevVisibleImages => prevVisibleImages + 4);
  };
  return (
    <>
      <div>
        <GalleryTabGridContainer>
          {imgArrayTablet.slice(0, visibleImages).map((image, index) => (
            <GalleryTabImg key={index} src={image} alt="Varior" />
          ))}
        </GalleryTabGridContainer>
      </div>
      <div>
        {visibleImages < imgArrayTablet.length && (
          <GalleryTabButton onClick={loadMoreImages}>Переглянути більше</GalleryTabButton>
        )}
      </div>
    </>
  );
};

export default GalleryTabPhotos;

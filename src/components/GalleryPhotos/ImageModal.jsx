import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import useFetch from '../../hooks/useFetch';
import { GlobalStyles } from './MobGalleryPhotos.styled';

import {
  ImageModalOverlay,
  ImageModalContent,
  LightBoxImg,
} from './MobGalleryPhotos.styled';

const ImageModal = ({
  isOpen,
  selectedImageIndex,
  onClose,
  setSelectedImageIndex,
}) => {
  const { data } = useFetch('galleryPhoto');

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleOverlayClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <>
      <GlobalStyles />
      <ImageModalOverlay onClick={handleOverlayClick}>
        <ImageModalContent>
          <Carousel
            selectedItem={selectedImageIndex}
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            showArrows={false}
            dynamicHeight={true}
            infiniteLoop={true}
            onChange={setSelectedImageIndex}
            onCloseClick={onClose}
          >
            {data?.galleryPhotoList?.map((photoLink, index) => {
              return (
                <div key={index}>
                  <LightBoxImg src={photoLink.photoLink} alt="varior" />
                </div>
              );
            })}
          </Carousel>
        </ImageModalContent>
      </ImageModalOverlay>
    </>,
    document.getElementById('modal-root')
  );
};

export default ImageModal;

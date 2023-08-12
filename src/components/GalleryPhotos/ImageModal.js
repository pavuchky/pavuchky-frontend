import React from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import useFetch from '../../hooks/useFetch';


import {
  ImageModalOverlay,
  ImageModalContent,
  ImageModalCloseBtn,LightBoxImg
} from './GalleryPhotos.styled';

const ImageModal = ({
  isOpen,
  selectedImageIndex,
  onClose,
  setSelectedImageIndex,
}) => {
  const { data } = useFetch('galleryPhoto');
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <ImageModalOverlay>
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
        <ImageModalCloseBtn className="image-modal-close" onClick={onClose}>
          X
        </ImageModalCloseBtn>
      </ImageModalContent>
    </ImageModalOverlay>,
    document.getElementById('modal-root')
  );
};

export default ImageModal;
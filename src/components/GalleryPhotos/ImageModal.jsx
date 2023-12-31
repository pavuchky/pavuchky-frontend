import { useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import useFetch from '../../hooks/useFetch';

import PropTypes from 'prop-types';
import {
  ImageModalOverlay,
  ImageModalContent,
  GlobalStyles,
  LightBoxImgContainer,
  LightBoxImg,
} from './MobGalleryPhotos.styled';

import {
  GalleryFirstSvgButton,
  GallerySecondSvgButton,
  GalleryDesktopSvg,
} from './GalleryPhotoTablet.styled';
import sprite from '../../assets/images/sprite.svg';

const ImageModal = ({
  isOpen,
  selectedImageIndex,
  onClose,
  setSelectedImageIndex,
}) => {
  const { data } = useFetch('galleryPhoto');
const handleKeyPress = useCallback(
  (event) => {
    if (event.key === 'Escape') {
      onClose();
    }
  },
  [onClose]
);
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
      document.addEventListener('keydown', handleKeyPress);
    } else {
      document.body.classList.remove('modal-open');
    }
     return () => {
    document.removeEventListener('keydown', handleKeyPress);
  };
  }, [isOpen, handleKeyPress]);

  if (!isOpen) return null;

  const handleOverlayClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const onCarouselClick = evt => {
    if (evt.target.nodeName === 'LI') {
      onClose();
    }
  };
  


  return ReactDOM.createPortal(
    <>
      <GlobalStyles />
      <ImageModalOverlay onClick={handleOverlayClick}>
        <ImageModalContent onClick={onCarouselClick}>
          <Carousel
            selectedItem={selectedImageIndex}
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            showArrows={true}
            dynamicHeight={true}
            infiniteLoop={true}
            onChange={setSelectedImageIndex}
            onCloseClick={onClose}
            renderArrowPrev={(onClickHandler, hasPrev) =>
              hasPrev && (
                <GalleryFirstSvgButton type="button" onClick={onClickHandler}>
                  <GalleryDesktopSvg width="17px" height="32px">
                    <use xlinkHref={`${sprite}#prew-icon`}></use>
                  </GalleryDesktopSvg>
                </GalleryFirstSvgButton>
              )
            }
            renderArrowNext={(onClickHandler, hasNext) =>
              hasNext && (
                <GallerySecondSvgButton type="button" onClick={onClickHandler}>
                  <GalleryDesktopSvg width="17px" height="32px">
                    <use xlinkHref={`${sprite}#next-icon`}></use>
                  </GalleryDesktopSvg>
                </GallerySecondSvgButton>
              )
            }
          >
            {data?.galleryPhotoList?.map(photo => {
              return (
                <LightBoxImgContainer key={photo.id}>
                  <LightBoxImg
                    src={photo.photoLink}
                    alt="Warriors and camouflage nets"
                  />
                </LightBoxImgContainer>
              );
            })}
          </Carousel>
        </ImageModalContent>
      </ImageModalOverlay>
    </>,
    document.getElementById('modal-root')
  );
};

ImageModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  selectedImageIndex: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
  setSelectedImageIndex: PropTypes.func,
};

export default ImageModal;

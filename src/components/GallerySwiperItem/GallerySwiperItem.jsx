import {
  GalleryContainer,
  GalleryImg,
  GalleryMainWrapper,
} from './GallerySwiperItem.styled';

const GallerySwiperItem = ({ galleryImage }) => {
  return (
    <GalleryMainWrapper>
      <GalleryContainer>
        {galleryImage && <GalleryImg src={galleryImage} alt="Gallery photo" />}
      </GalleryContainer>
    </GalleryMainWrapper>
  );
};

export default GallerySwiperItem;

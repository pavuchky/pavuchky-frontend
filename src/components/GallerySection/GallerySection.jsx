import {
  GallerySectionWrapper,
  TitleWrapper,
  GalleryTitle,
  GalleryMainWrapper,
  GalleryItem1,
  GalleryItem2,
  GalleryContainer,
  GalleryImg,
  GalleryItem3,
  GalleryItem4,
  GalleryItem5,
  GalleryItem6,
} from './GallerySection.styled';
import { useMediaQuery } from 'react-responsive';

import galleryImg1 from '../../assets/images/gallery/gallery_img1.jpg';
import galleryImg2 from '../../assets/images/gallery/gallery_img2.jpg';
import galleryImg3 from '../../assets/images/gallery/gallery_img3.jpg';
import galleryImg4 from '../../assets/images/gallery/gallery_img4.jpg';
import galleryImg5 from '../../assets/images/gallery/gallery_img5.jpg';
import galleryImg6 from '../../assets/images/gallery/gallery_img6.jpg';
import { ViewAll } from 'components/ViewAll/ViewAll';

const imgArrayDesktop = [
  galleryImg1,
  galleryImg2,
  galleryImg3,
  galleryImg4,
  galleryImg5,
  galleryImg6,
];

const imgArrayTablet = [galleryImg1, galleryImg3, galleryImg4, galleryImg2];

const imgArrayMobile = [galleryImg1, galleryImg3];

const GallerySection = () => {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1439px)',
  });

  const isTablet = useMediaQuery({
    query: '(min-width: 767px)',
  });

  const galleryArr = isDesktop
    ? imgArrayDesktop
    : isTablet
    ? imgArrayTablet
    : imgArrayMobile;

  return (
    <GallerySectionWrapper>
      <TitleWrapper>
        <GalleryTitle>Галерея</GalleryTitle>
        <ViewAll
          shortText="Переглянути"
          longText="Переглянути усе"
          changeable
          path="/gallery/photos"
        />
      </TitleWrapper>
      <GalleryMainWrapper>
        <GalleryContainer>
          {galleryArr.map((el, i) => {
            return i + 1 === 1 ? (
              <GalleryItem1 key={i}>
                <GalleryImg src={el} alt="gallery_image" />
              </GalleryItem1>
            ) : i + 1 === 2 ? (
              <GalleryItem2 key={i}>
                <GalleryImg src={el} alt="gallery_image" />
              </GalleryItem2>
            ) : i + 1 === 3 ? (
              <GalleryItem3 key={i}>
                <GalleryImg src={el} alt="gallery_image" />
              </GalleryItem3>
            ) : i + 1 === 4 ? (
              <GalleryItem4 key={i}>
                <GalleryImg src={el} alt="gallery_image" />
              </GalleryItem4>
            ) : i + 1 === 5 ? (
              <GalleryItem5 key={i}>
                <GalleryImg src={el} alt="gallery_image" />
              </GalleryItem5>
            ) : (
              <GalleryItem6 key={i}>
                <GalleryImg src={el} alt="gallery_image" />
              </GalleryItem6>
            );
          })}
        </GalleryContainer>
      </GalleryMainWrapper>
    </GallerySectionWrapper>
  );
};

export default GallerySection;

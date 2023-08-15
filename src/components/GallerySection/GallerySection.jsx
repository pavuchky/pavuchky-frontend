import { useMediaQuery } from 'react-responsive';
import { useTranslation } from 'react-i18next';
import { ViewAll } from 'components/ViewAll/ViewAll';
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

import useFetch from 'hooks/useFetch';

const GallerySection = () => {
  const { t } = useTranslation();
  const { data } = useFetch('galleryPhoto');

  const isDesktop = useMediaQuery({
    query: '(min-width: 1439px)',
  });

  const isTablet = useMediaQuery({
    query: '(min-width: 767px)',
  });

  const galleryArr = isDesktop
    ? data?.galleryPhotoList?.slice(0, 6)
    : isTablet
    ? data?.galleryPhotoList?.slice(0, 4)
    : data?.galleryPhotoList?.slice(0, 2);

  return (
    <GallerySectionWrapper>
      <TitleWrapper>
        <GalleryTitle>{t('nav.gallery')}</GalleryTitle>
        <ViewAll
          shortText={t('nav.viewMore')}
          longText={t('nav.viewAll')}
          changeable
          path="/gallery/photos"
        />
      </TitleWrapper>
      <GalleryMainWrapper>
        <GalleryContainer>
          {galleryArr?.map((el, i) => {
            return i + 1 === 1 ? (
              <GalleryItem1 key={i}>
                <GalleryImg src={el?.photoLink} alt="gallery_image" />
              </GalleryItem1>
            ) : i + 1 === 2 ? (
              <GalleryItem2 key={i}>
                <GalleryImg src={el?.photoLink} alt="gallery_image" />
              </GalleryItem2>
            ) : i + 1 === 3 ? (
              <GalleryItem3 key={i}>
                <GalleryImg src={el?.photoLink} alt="gallery_image" />
              </GalleryItem3>
            ) : i + 1 === 4 ? (
              <GalleryItem4 key={i}>
                <GalleryImg src={el?.photoLink} alt="gallery_image" />
              </GalleryItem4>
            ) : i + 1 === 5 ? (
              <GalleryItem5 key={i}>
                <GalleryImg src={el?.photoLink} alt="gallery_image" />
              </GalleryItem5>
            ) : (
              <GalleryItem6 key={i}>
                <GalleryImg src={el?.photoLink} alt="gallery_image" />
              </GalleryItem6>
            );
          })}
        </GalleryContainer>
      </GalleryMainWrapper>
    </GallerySectionWrapper>
  );
};

export default GallerySection;

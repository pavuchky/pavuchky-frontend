import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';

import { Scrollbar, Navigation } from 'swiper';
import {
  GallerySwiperSlideContainer,
  GallerySwiperWrapper,
} from './GallerySwiper.styled';

import useFetch from 'hooks/useFetch';
import GallerySwiperItem from 'components/GallerySwiperItem/GallerySwiperItem';
import { GallerySwiperContainer } from 'components/GalleryPhotos/MobGalleryPhotos.styled';

const GallerySwiper = () => {
  const { data } = useFetch('galleryPhoto');
  const galleryArr = data?.galleryPhotoList?.slice(0, 6);

  return (
    <GallerySwiperWrapper>
      <GallerySwiperContainer
        spaceBetween={16}
        slidesPerView={1.2}
        modules={[Scrollbar, Navigation]}
        scrollbar={{ draggable: true }}
      >
        {galleryArr?.map(el => (
          <GallerySwiperSlideContainer key={el?.id}>
            <GallerySwiperItem galleryImage={el?.photoLink} />
          </GallerySwiperSlideContainer>
        ))}
      </GallerySwiperContainer>
    </GallerySwiperWrapper>
  );
};

export default GallerySwiper;

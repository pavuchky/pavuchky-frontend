import { useMediaQuery } from 'react-responsive';

import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';

import { Scrollbar, Navigation } from 'swiper';
import {
  ReviewSwiperWrapper,
  ReviewsSwiperContainer,
  ReviewsSwiperSlideContainer,
} from './ReviewsSwiper.styled';
import ReviewSwiperItem from 'components/ReviewSwiperItem/ReviewSwiperItem';
import ReviewsSwiperCustomButtons from 'components/ReviewsSwiperCustomButtons/ReviewsSwiperCustomButtons';

import useFetch from 'hooks/useFetch';

const ReviewsSwiper = () => {
  const { data } = useFetch('reviews');

  const isTabletScreen = useMediaQuery({ minWidth: 768 });
  const isDesktopScreen = useMediaQuery({ minWidth: 1440 });

  return (
    <ReviewSwiperWrapper>
      {isDesktopScreen && <ReviewsSwiperCustomButtons />}

      <ReviewsSwiperContainer
        spaceBetween={isDesktopScreen ? 48 : 24}
        slidesPerView={isTabletScreen ? (isDesktopScreen ? 2.55 : 2) : 1}
        modules={[Scrollbar, Navigation]}
        scrollbar={{ draggable: true }}
        navigation={{
          nextEl: '.swiper-next-btn',
          prevEl: '.swiper-prev-btn',
        }}
      >
        {data?.reviewList?.map(
          ({ id, review, image, reviewDesc, reviewImage }) => (
            <ReviewsSwiperSlideContainer key={id}>
              <ReviewSwiperItem review={reviewDesc} reviewImage={reviewImage} />
            </ReviewsSwiperSlideContainer>
          )
        )}
      </ReviewsSwiperContainer>
    </ReviewSwiperWrapper>
  );
};

export default ReviewsSwiper;

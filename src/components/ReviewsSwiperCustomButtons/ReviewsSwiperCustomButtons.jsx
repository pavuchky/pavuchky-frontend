import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';

import { useSwiper } from 'swiper/react';
import {
  ReviewsSwiperCustomButton,
  ReviewsSwiperCustomButtonsContainer,
} from './ReviewsSwiperCustomButtons.sryled';

const ReviewsSwiperCustomButtons = () => {
  const swiper = useSwiper();
  return (
    <ReviewsSwiperCustomButtonsContainer>
      <ReviewsSwiperCustomButton
        type="button"
        onClick={() => swiper.slidePrev()}
      >
        Prev
      </ReviewsSwiperCustomButton>
      <ReviewsSwiperCustomButton
        type="button"
        onClick={() => swiper.slideNext()}
      >
        Next
      </ReviewsSwiperCustomButton>
    </ReviewsSwiperCustomButtonsContainer>
  );
};

export default ReviewsSwiperCustomButtons;

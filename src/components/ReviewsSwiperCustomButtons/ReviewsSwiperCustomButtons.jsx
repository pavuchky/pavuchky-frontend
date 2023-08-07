import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';

import {
  ReviewsSwiperCustomButton,
  ReviewsSwiperCustomButtonsContainer,
} from './ReviewsSwiperCustomButtons.styled';

const ReviewsSwiperCustomButtons = () => {
  return (
    <ReviewsSwiperCustomButtonsContainer>
      <ReviewsSwiperCustomButton
        type="button"
        className="swiper-prev-btn"
      >
        Prev
      </ReviewsSwiperCustomButton>
      <ReviewsSwiperCustomButton
        className="swiper-next-btn"
        type="button"
      >
        Next
      </ReviewsSwiperCustomButton>
    </ReviewsSwiperCustomButtonsContainer>
  );
};

export default ReviewsSwiperCustomButtons;

import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';

import sprite from '../../assets/images/sprite.svg';

import {
  ReviewsSwiperCustomButton,
  ReviewsSwiperCustomButtonSvg,
  ReviewsSwiperCustomButtonsContainer,
} from './ReviewsSwiperCustomButtons.styled';

const ReviewsSwiperCustomButtons = () => {
  return (
    <ReviewsSwiperCustomButtonsContainer>
      <ReviewsSwiperCustomButton
        type="button"
        className="swiper-prev-btn"
        aria-label="Previous button"
      >
        <ReviewsSwiperCustomButtonSvg width="17px" height="32px">
          <use xlinkHref={`${sprite}#prew-icon`} />
        </ReviewsSwiperCustomButtonSvg>
      </ReviewsSwiperCustomButton>
      <ReviewsSwiperCustomButton
        className="swiper-next-btn"
        type="button"
        aria-label="Next button"
      >
        <ReviewsSwiperCustomButtonSvg width="17px" height="32px">
          <use xlinkHref={`${sprite}#next-icon`} />
        </ReviewsSwiperCustomButtonSvg>
      </ReviewsSwiperCustomButton>
    </ReviewsSwiperCustomButtonsContainer>
  );
};

export default ReviewsSwiperCustomButtons;

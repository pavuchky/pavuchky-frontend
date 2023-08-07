import ReviewsSwiper from 'components/ReviewsSwiper/ReviewsSwiper';
import {
  ReviewsSection,
  ReviewsTitel,
  ReviewsTitelPartContainer,
} from './Reviews.styled';
import { AboutUSButton, AboutUsIcon } from 'components/AboutUs/AboutUs.styled';
import sprite from '../../assets/images/sprite.svg';
import { useMediaQuery } from 'react-responsive';

const Reviews = () => {
  const isTabletScreen = useMediaQuery({ minWidth: 768 });
  return (
    <ReviewsSection>
      <ReviewsTitelPartContainer>
        <ReviewsTitel>Відгуки</ReviewsTitel>
        <AboutUSButton to="/reviews">
          {isTabletScreen ? 'Переглянути усе' : 'Переглянути'}
          <AboutUsIcon width="11px" height="13px">
            <use xlinkHref={`${sprite}#arrow`} />
          </AboutUsIcon>
        </AboutUSButton>
      </ReviewsTitelPartContainer>
      <ReviewsSwiper></ReviewsSwiper>
    </ReviewsSection>
  );
};

export default Reviews;

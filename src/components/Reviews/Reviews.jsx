import ReviewsSwiper from 'components/ReviewsSwiper/ReviewsSwiper';
import { ReviewsSection } from './Reviews.styled';

const Reviews = () => {
  return (
    <ReviewsSection>
      <h3>Відгуки</h3>
      <ReviewsSwiper></ReviewsSwiper>
    </ReviewsSection>
  );
};

export default Reviews;

import ReviewsSwiper from 'components/ReviewsSwiper/ReviewsSwiper';
import { ViewAll } from 'components/ViewAll/ViewAll';
import {
  ReviewsSection,
  ReviewsTitle,
  ReviewsTitlePartContainer,
} from './Reviews.styled';

const Reviews = () => {
  return (
    <ReviewsSection>
      <ReviewsTitlePartContainer>
        <ReviewsTitle>Відгуки</ReviewsTitle>
        <ViewAll
          shortText="Переглянути"
          longText="Переглянути усе"
          changeable
          path="/reviews"
        />
      </ReviewsTitlePartContainer>
      <ReviewsSwiper />
    </ReviewsSection>
  );
};

export default Reviews;

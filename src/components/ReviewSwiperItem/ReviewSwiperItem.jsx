import { useMediaQuery } from 'react-responsive';
import {
  ReviewsSwiperItemContainer,
  ReviewsSwiperItemImage,
  ReviewsSwiperItemImageContainer,
  ReviewsSwiperItemParagraph,
} from './ReviewSwiperItem.styled';

const ReviewSwiperItem = ({ review, reviewImage }) => {
  const isTabletScreen = useMediaQuery({ minWidth: 768 });
  const isDesctopScreen = useMediaQuery({ minWidth: 1440 });
  console.log(isTabletScreen ? (isDesctopScreen ? '377px' : '268px') : '303px');
  console.log(isTabletScreen ? (isDesctopScreen ? '320px' : '197px') : '157px');
  return (
    <ReviewsSwiperItemContainer>
      <ReviewsSwiperItemParagraph>{review}</ReviewsSwiperItemParagraph>
      {reviewImage && (
        <ReviewsSwiperItemImageContainer>
          <ReviewsSwiperItemImage
            src={reviewImage}
            width={
              isTabletScreen ? (isDesctopScreen ? '377px' : '268px') : '303px'
            }
            height={
              isTabletScreen ? (isDesctopScreen ? '320px' : '197px') : '157px'
            }
            alt=" Additional content about feedback "
          />
        </ReviewsSwiperItemImageContainer>
      )}
    </ReviewsSwiperItemContainer>
  );
};

export default ReviewSwiperItem;

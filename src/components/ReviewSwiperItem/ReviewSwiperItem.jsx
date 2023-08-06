import { useMediaQuery } from 'react-responsive';
import {
  ReviewsSvg,
  ReviewsSwiperItemContainer,
  ReviewsSwiperItemImage,
  ReviewsSwiperItemImageContainer,
  ReviewsSwiperItemParagraph,
} from './ReviewSwiperItem.styled';

import Icons from '../../assets/images/sprite.svg';

const ReviewSwiperItem = ({ review, reviewImage }) => {
  const isTabletScreen = useMediaQuery({ minWidth: 768 });
  const isDesctopScreen = useMediaQuery({ minWidth: 1440 });

  return (
    <ReviewsSwiperItemContainer>
      <ReviewsSvg
        width={isDesctopScreen ? '53px' : '24px'}
        height={isDesctopScreen ? '46px' : '20px'}
      >
        <use xlinkHref={`${Icons}#review`} />
      </ReviewsSvg>
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

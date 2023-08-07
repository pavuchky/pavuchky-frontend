import { useMediaQuery } from 'react-responsive';

import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';

import { Scrollbar, Navigation } from 'swiper';
import {
  ReviewsSwiperContainer,
  ReviewsSwiperSlideContainer,
} from './ReviewsSwiper.styled';
import ReviewSwiperItem from 'components/ReviewSwiperItem/ReviewSwiperItem';
import ReviewsSwiperCustomButtons from 'components/ReviewsSwiperCustomButtons/ReviewsSwiperCustomButtons';

const ReviewsData = [
  {
    id: '1',
    review: 'Щиро дякуємо за маскування. Наші бійці в повній безпеці',
    image:
      'https://images.prom.ua/4369088704_w640_h640_setka-maskirovochnaya-takticheskaya.jpg',
  },
  {
    id: '2',
    review: 'Щиро дякуємо за маскування. Наші бійці в повній безпеці',
    image: '',
  },
  {
    id: '3',
    review: 'Щиро дякуємо за маскування. Наші бійці в повній безпеці',
    image: '',
  },
];

const ReviewsSwiper = () => {
  const isTabletScreen = useMediaQuery({ minWidth: 768 });
  const isDesctopScreen = useMediaQuery({ minWidth: 1440 });

  return (
    <ReviewsSwiperContainer
      spaceBetween={isDesctopScreen ? 48 : 24}
      slidesPerView={isTabletScreen ? (isDesctopScreen ? 2.55 : 2) : 1}
      modules={[Scrollbar, Navigation]}
      scrollbar={{ draggable: true }}
      navigation
    >
      {ReviewsData.map(({ id, review, image }) => (
        <ReviewsSwiperSlideContainer key={id}>
          <ReviewSwiperItem review={review} reviewImage={image} />
        </ReviewsSwiperSlideContainer>
      ))}
      {isDesctopScreen && <ReviewsSwiperCustomButtons />}
    </ReviewsSwiperContainer>
  );
};

export default ReviewsSwiper;

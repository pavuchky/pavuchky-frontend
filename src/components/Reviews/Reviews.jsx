import { useTranslation } from 'react-i18next';
import ReviewsSwiper from 'components/ReviewsSwiper/ReviewsSwiper';
import { ViewAll } from 'components/ViewAll/ViewAll';
import {
  ReviewsSection,
  ReviewsTitle,
  ReviewsTitlePartContainer,
} from './Reviews.styled';

const Reviews = () => {
  const { t } = useTranslation();

  return (
    <ReviewsSection>
      <ReviewsTitlePartContainer>
        <ReviewsTitle>{t('pages.reviews')}</ReviewsTitle>
        <ViewAll
          shortText={t('nav.viewMore')}
          longText={t('nav.viewAll')}
          changeable={true}
          path="/reviews"
        />
      </ReviewsTitlePartContainer>
      <ReviewsSwiper />
    </ReviewsSection>
  );
};

export default Reviews;

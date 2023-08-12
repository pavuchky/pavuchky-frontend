import { useTranslation } from 'react-i18next';
import { PathDisplayer } from 'components/PathDisplayer/PathDisplayer';
import {
  ReviewsTitle,
  ReviewsTitlePartContainer,
} from 'components/Reviews/Reviews.styled';
import { AboutUSButton, AboutUsIcon } from 'components/AboutUs/AboutUs.styled';
import sprite from '../../assets/images/sprite.svg';
import { useMediaQuery } from 'react-responsive';
import ReviewsPagination from 'components/ReviewsPagination/ReviewsPagination';
import { ReviewsPageSection } from './ReviewsPage.styled';

const ReviewsPage = () => {
  const { t } = useTranslation();
  const isTabletScreen = useMediaQuery({ minWidth: 768 });

  return (
    <>
      <PathDisplayer current={{ path: '/reviews', name: t('pages.reviews') }} />

      <ReviewsPageSection>
        <ReviewsTitlePartContainer>
          <ReviewsTitle>Відгуки</ReviewsTitle>
          <AboutUSButton to="/reviews">
            {isTabletScreen ? 'Переглянути усе' : 'Переглянути'}
            <AboutUsIcon width="11px" height="13px">
              <use xlinkHref={`${sprite}#arrow`} />
            </AboutUsIcon>
          </AboutUSButton>
        </ReviewsTitlePartContainer>
        <ReviewsPagination />
      </ReviewsPageSection>
    </>
  );
};

export default ReviewsPage;

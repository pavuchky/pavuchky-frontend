import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { useMediaQuery } from 'react-responsive';
import { PathDisplayer } from 'components/PathDisplayer/PathDisplayer';
import { handleScrollToTop } from 'utils/handleScrollToTop';
import {
  ReviewsTitle,
  ReviewsTitlePartContainer,
} from 'components/Reviews/Reviews.styled';

import ReviewsPagination from 'components/ReviewsPagination/ReviewsPagination';
import {
  ContactUsButton,
  ContactUsContainer,
  ContactUsHeader,
  ContactUsParagraph,
  ContactUsTextContainer,
  ReviewsPageGradientContainer,
  ReviewsPageSection,
} from './ReviewsPage.styled';

const ReviewsPage = () => {
  const { t } = useTranslation();
  const isTabletScreen = useMediaQuery({ minWidth: 768 });
  const isDesktopScreen = useMediaQuery({ minWidth: 1440 });
  const navigate = useNavigate();

  const onLeaveReviewButtonClick = evt => {
    evt.preventDefault();
    navigate('/review');
    handleScrollToTop();
  };

  const ContactUs = (
    <ContactUsContainer>
      <ContactUsTextContainer>
        <ContactUsHeader>{t('reviews.write')}</ContactUsHeader>
        <ContactUsParagraph>
          {isTabletScreen
            ? isDesktopScreen
              ? t('reviews.desktopThanksText')
              : t('reviews.tabletThanksText')
            : t('reviews.mobileThanksText')}
        </ContactUsParagraph>
      </ContactUsTextContainer>
      <ContactUsButton
        type="submit"
        onClick={evt => onLeaveReviewButtonClick(evt)}
      >
        {t('reviews.buttonText')}
      </ContactUsButton>
    </ContactUsContainer>
  );

  return (
    <>
      <PathDisplayer current={{ path: '/reviews', name: t('pages.reviews') }} />

      <ReviewsPageSection>
        <ReviewsPageGradientContainer>
          <ReviewsTitlePartContainer>
            <ReviewsTitle>{t('pages.reviews')}</ReviewsTitle>
          </ReviewsTitlePartContainer>
          <ReviewsPagination />

          {isTabletScreen && ContactUs}
        </ReviewsPageGradientContainer>

        {!isTabletScreen && ContactUs}
      </ReviewsPageSection>
    </>
  );
};

export default ReviewsPage;

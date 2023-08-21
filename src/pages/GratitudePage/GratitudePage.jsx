import { useLocation, useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { useTranslation } from 'react-i18next';

import gratitudeMob from 'assets/images/gratitude/gratitude.svg';
import gratitude from 'assets/images/gratitude/gratitude_tablet.svg';
import review from 'assets/images/gratitude/review.svg';

import {
  GratitudeButton,
  GratitudeImg,
  GratitudeReviewImg,
  GratitudeText,
  GratitudeTitle,
  GratitudeWrapper,
} from './GratitudePage.styled';

export const GratitudePage = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const { t } = useTranslation();

  const navigate = useNavigate();

  const location = useLocation();
  const state = location?.state;

  const handleBtnClick = () => {
    navigate('/');
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <GratitudeWrapper>
      <GratitudeTitle>{state?.title}</GratitudeTitle>

      {state?.variant === 'primary' && (
        <GratitudeText>{state?.text}</GratitudeText>
      )}

      {state?.variant === 'primary' ? (
        <GratitudeImg
          src={isMobile ? gratitudeMob : gratitude}
          alt="gratitude"
        />
      ) : (
        <GratitudeReviewImg src={review} alt="gratitude" />
      )}

      <GratitudeButton type="button" onClick={handleBtnClick}>
        {t('buttons.toHome')}
      </GratitudeButton>
    </GratitudeWrapper>
  );
};

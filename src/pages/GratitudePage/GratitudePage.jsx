import { useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { useTranslation } from 'react-i18next';

import gratitudeMob from 'assets/images/gratitude/gratitude.svg';
import gratitude from 'assets/images/gratitude/gratitude_tablet.svg';
import review from 'assets/images/gratitude/review.svg';

import {
  GratitudeImg,
  GratitudeLink,
  GratitudeReviewImg,
  GratitudeText,
  GratitudeTitle,
  GratitudeWrapper,
} from './GratitudePage.styled';

export const GratitudePage = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const { t } = useTranslation();

  const location = useLocation();
  const state = location?.state;

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

      <GratitudeLink to="/">{t('buttons.toHome')}</GratitudeLink>
    </GratitudeWrapper>
  );
};

import PropTypes from 'prop-types';
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
} from './Gratitude.styled';

export const Gratitude = ({ title, text, variant }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const { t } = useTranslation();

  return (
    <GratitudeWrapper>
      <GratitudeTitle>{title}</GratitudeTitle>

      {variant === 'primary' && <GratitudeText>{text}</GratitudeText>}

      {variant === 'primary' ? (
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

Gratitude.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  variant: PropTypes.string,
};

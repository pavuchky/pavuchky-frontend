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
import { useMediaQuery } from 'react-responsive';

export const Gratitude = ({ title, text, variant }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

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

      <GratitudeLink to="/">На головну</GratitudeLink>
    </GratitudeWrapper>
  );
};

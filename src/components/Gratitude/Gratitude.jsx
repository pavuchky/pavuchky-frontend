import gratitude from 'assets/images/gratitude.svg';
import {
  GratitudeImg,
  GratitudeText,
  GratitudeTitle,
  GratitudeWrapper,
} from './Gratitude.styled';

export const Gratitude = () => {
  return (
    <GratitudeWrapper>
      <GratitudeTitle>Дякуємо за підтримку!</GratitudeTitle>
      <GratitudeText>Ми зв’яжемось з вами у найближчий час</GratitudeText>
      <GratitudeImg src={gratitude} alt="gratitude"></GratitudeImg>
    </GratitudeWrapper>
  );
};

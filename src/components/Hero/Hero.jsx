import React from 'react';
import Icon from '../../assets/images/tank.svg';
import {
  HeroBtnList,
  HeroContainer,
  HeroDonate,
  HeroItem,
  HeroLink,
  HeroListTitle,
  HeroSubTitle,
  HeroText,
  HeroTitle,
  IconTank,
} from './Hero.styled';

export const Hero = () => {
  return (
    <HeroContainer>
      <HeroText>Забезпечуємо захист від ворожого ока!</HeroText>
      <HeroListTitle>
        <HeroTitle>ПАВУЧКИ</HeroTitle>
        <br />
        <HeroSubTitle>БОРЩАГІВКИ</HeroSubTitle>
      </HeroListTitle>
      <IconTank src={Icon} />
      <HeroBtnList>
        <HeroItem>
          <HeroLink to="/#contacts">Долучитись до плетіння</HeroLink>
        </HeroItem>
        <HeroItem>
          <HeroDonate to="/#donation">Задонатити</HeroDonate>
        </HeroItem>
      </HeroBtnList>
    </HeroContainer>
  );
};

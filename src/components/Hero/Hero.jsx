import React from 'react';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();

  return (
    <HeroContainer>
      <HeroText>{t('hero.protection')}</HeroText>
      <HeroListTitle>
        <HeroTitle>{t('hero.title')}</HeroTitle>
        <br />
        <HeroSubTitle>{t('hero.subTitle')}</HeroSubTitle>
      </HeroListTitle>
      <IconTank src={Icon} />
      <HeroBtnList>
        <HeroItem>
          <HeroLink to="/#contacts">{t('hero.joinWeaving')}</HeroLink>
        </HeroItem>
        <HeroItem>
          <HeroDonate to="/#donation">{t('nav.donate')}</HeroDonate>
        </HeroItem>
      </HeroBtnList>
    </HeroContainer>
  );
};

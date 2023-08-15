import React from 'react';
import { useTranslation } from 'react-i18next';
import Icon from '../../assets/images/tank.svg';
import {
  HeroBtnList,
  HeroContainer,
  HeroItem,
  HeroListTitle,
  HeroSubTitle,
  HeroText,
  HeroTitle,
  IconTank,
} from './Hero.styled';
import { CustomLink } from 'components/CustomLink/CustomLink';

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
          <CustomLink
            type="hashLink"
            text={t('hero.joinWeaving')}
            path="/#contacts"
            variant="blue"
          />
        </HeroItem>
        <HeroItem>
          <CustomLink
            type="hashLink"
            text={t('nav.donate')}
            path="/#donation"
            variant="yellow"
          />
        </HeroItem>
      </HeroBtnList>
    </HeroContainer>
  );
};

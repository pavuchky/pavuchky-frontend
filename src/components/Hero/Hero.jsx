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
import { CustomLink } from '../CustomLink/CustomLink';
import useHash from 'hooks/useHash';

export const Hero = () => {
  const { handleHashScroll } = useHash();
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
            onClick={() => {
              handleHashScroll('contacts');
            }}
            type="hashLink"
            text={t('hero.joinWeaving')}
            variant="blue"
          />
        </HeroItem>
        <HeroItem>
          <CustomLink
            onClick={() => {
              handleHashScroll('donation');
            }}
            type="hashLink"
            text={t('nav.donate')}
            variant="yellow"
          />
        </HeroItem>
      </HeroBtnList>
    </HeroContainer>
  );
};

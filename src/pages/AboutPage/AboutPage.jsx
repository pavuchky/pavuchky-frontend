import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { LanguageContext } from 'utils/LanguageContext';
import useFetch from 'hooks/useFetch';
import { CustomLink } from 'components/CustomLink/CustomLink';
import sprite from 'assets/images/sprite.svg';
import mapImg from 'assets/images/map.svg';
import { PathDisplayer } from 'components/PathDisplayer/PathDisplayer';
import {
  AboutLogoIcon,
  AboutMapImg,
  AboutUsPageText,
  AboutUsPageTitle,
  AboutUsSection,
  AboutUsTop,
} from './AboutPage.styled';

const AboutPage = () => {
  const { lang } = useContext(LanguageContext);
  const { data } = useFetch('about');
  const { t } = useTranslation();
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <>
      <PathDisplayer current={{ path: '/about', name: t('pages.about-us') }} />
      <AboutUsSection>
        {isMobile ? (
          <AboutUsPageTitle>{t('pages.about-us')}</AboutUsPageTitle>
        ) : (
          <AboutUsTop>
            <AboutUsPageTitle>{t('pages.about-us')}</AboutUsPageTitle>
            <AboutMapImg src={mapImg} alt="map of Ukraine" />
          </AboutUsTop>
        )}

        <AboutUsPageText>{data?.aboutFull[lang]}</AboutUsPageText>
        <AboutLogoIcon>
          <use href={sprite + '#logo'}></use>
        </AboutLogoIcon>
        <CustomLink
          type="link"
          text={`${t('buttons.toHome')}`}
          path="/"
          variant="toHome"
        />
      </AboutUsSection>
    </>
  );
};

export default AboutPage;

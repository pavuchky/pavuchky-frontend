import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { LanguageContext } from 'utils/LanguageContext';
import useFetch from 'hooks/useFetch';
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
  ToHomeButton,
} from './AboutPage.styled';

const AboutPage = () => {
  const { lang } = useContext(LanguageContext);
  const { data } = useFetch('about');
  const { t } = useTranslation();
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  const navigate = useNavigate();

  const handleBtnClick = () => {
    navigate('/');
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

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
        <ToHomeButton type="button" onClick={handleBtnClick}>
          {t('buttons.toHome')}
        </ToHomeButton>
      </AboutUsSection>
    </>
  );
};

export default AboutPage;

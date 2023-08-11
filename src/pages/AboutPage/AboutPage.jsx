import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import useFetch from 'hooks/useFetch';
import sprite from 'assets/images/sprite.svg';
import mapImg from 'assets/images/map.svg';
import { PathDisplayer } from 'components/PathDisplayer/PathDisplayer';
import {
  AboutLogoIcon,
  AboutMapImg,
  AboutUsHomeLink,
  AboutUsPageText,
  AboutUsPageTitle,
  AboutUsSection,
  AboutUsTop,
} from './AboutPage.styled';

const AboutPage = () => {
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

        <AboutUsPageText>{data?.aboutFull}</AboutUsPageText>
        <AboutLogoIcon>
          <use href={sprite + '#logo'}></use>
        </AboutLogoIcon>
        <AboutUsHomeLink to="/">На головну</AboutUsHomeLink>
      </AboutUsSection>
    </>
  );
};

export default AboutPage;

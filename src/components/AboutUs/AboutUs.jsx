import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageContext } from 'utils/LanguageContext';
import useFetch from 'hooks/useFetch';
import Map from '../../assets/images/map.svg';
import { ViewAll } from 'components/ViewAll/ViewAll';
import { CustomLink } from 'components/CustomLink/CustomLink';
import {
  AboutUsDescription,
  AboutUsMainContentWrapper,
  AboutUsMap,
  AboutUsSectionWrapper,
  AboutUsTitle,
  DescriptionContainer,
  DescriptionWrapper,
  TitleWrapper,
  // AboutUsDescriptionShort,
  // AboutUsDescriptionDesktop,
} from './AboutUs.styled';

const AboutUs = () => {
  const { lang } = useContext(LanguageContext);
  const { data } = useFetch('about');
  const { t } = useTranslation();

  return (
    <AboutUsSectionWrapper>
      <TitleWrapper>
        <AboutUsTitle>{t('pages.about-us')}</AboutUsTitle>
        <ViewAll
          shortText={t('nav.aboutUs')}
          longText={t('nav.viewAll')}
          changeable
          path="/about"
        />
      </TitleWrapper>
      <AboutUsMainContentWrapper>
        <DescriptionContainer>
          <DescriptionWrapper>
            <AboutUsDescription>{data?.aboutShort[lang]}</AboutUsDescription>
            {/* <AboutUsDescriptionShort>
              Ми відчули єдність і солідарність, взялися активно волонтерити,
              донатити, поширювати важливу інформацію для збереження життів
              українців і правду про злочини росіян на нашій землі.
            </AboutUsDescriptionShort> */}
            {/* <AboutUsDescriptionDesktop>
              {data?.aboutShort[lang]}
            </AboutUsDescriptionDesktop> */}
          </DescriptionWrapper>
          <AboutUsMap src={Map} alt="Ukraine map" />
        </DescriptionContainer>
        <CustomLink
          type="link"
          text={t('buttons.learnMore')}
          path="/about"
          variant="about"
        />
      </AboutUsMainContentWrapper>
    </AboutUsSectionWrapper>
  );
};

export default AboutUs;

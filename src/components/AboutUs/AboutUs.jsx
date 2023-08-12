import { useTranslation } from 'react-i18next';
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
  AboutUsDescriptionShort,
  AboutUsDescriptionDesktop,
} from './AboutUs.styled';

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <AboutUsSectionWrapper>
      <TitleWrapper>
        <AboutUsTitle>Хто ми</AboutUsTitle>
        <ViewAll
          shortText="Про нас"
          longText="Переглянути усе"
          changeable
          path="/about"
        />
      </TitleWrapper>
      <AboutUsMainContentWrapper>
        <DescriptionContainer>
          <DescriptionWrapper>
            <AboutUsDescription>
              Повномасштабне вторгнення росії змусило кожного українця
              замислитися про те, що він чи вона може зробити для допомоги своїй
              країні, армії, співгромадянам.
            </AboutUsDescription>
            <AboutUsDescriptionShort>
              Ми відчули єдність і солідарність, взялися активно волонтерити,
              донатити, поширювати важливу інформацію для збереження життів
              українців і правду про злочини росіян на нашій землі.
            </AboutUsDescriptionShort>
            <AboutUsDescriptionDesktop>
              Кожен з нас долучався до різних волонтерських акцій і рухів, шукав
              шляхи бути корисним країні й народу та віддячити нашим героїчним
              захисникам і захисницям.
            </AboutUsDescriptionDesktop>
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

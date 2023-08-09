import Map from '../../assets/images/map.svg';
import sprite from '../../assets/images/sprite.svg';
import { useMediaQuery } from 'react-responsive';

import {
  AboutUSButton,
  AboutUsDescription,
  AboutUsMainContentWrapper,
  AboutUsMap,
  AboutUsSectionWrapper,
  AboutUsTitle,
  DescriptionContainer,
  DescriptionWrapper,
  TitleWrapper,
  AboutUsIcon,
  AboutUsDescriptionShort,
  AboutUsDescriptionDesktop,
  LearnMoreStyledLink,
} from './AboutUs.styled';

const AboutUs = () => {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1439px)',
  });

  return (
    <AboutUsSectionWrapper>
      <TitleWrapper>
        <AboutUsTitle>Хто ми</AboutUsTitle>
        <AboutUSButton to="/about">
          {isDesktop ? 'Переглянути усе' : 'Про нас'}
          <AboutUsIcon width="11px" height="13px">
            <use xlinkHref={`${sprite}#arrow`} />
          </AboutUsIcon>
        </AboutUSButton>
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
        {/* <ButtonLearnMore variant="contained">Дізнатись більше</ButtonLearnMore> */}
        <LearnMoreStyledLink to="/about">Дізнатись більше</LearnMoreStyledLink>
      </AboutUsMainContentWrapper>
    </AboutUsSectionWrapper>
  );
};

export default AboutUs;

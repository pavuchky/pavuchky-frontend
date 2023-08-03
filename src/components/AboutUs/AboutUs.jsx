import React from 'react';
import Map from '../../assets/images/map.svg';
import {
  AboutUSButton,
  AboutUsDescription,
  AboutUsMainContentWrapper,
  AboutUsMap,
  AboutUsSectionWrapper,
  AboutUsTitle,
  ButtonLearnMore,
  DescriptionContainer,
  DescriptionWrapper,
  TitleWrapper,
} from './AboutUs.styled';

const AboutUs = () => {
  return (
    <AboutUsSectionWrapper>
      <TitleWrapper>
        <AboutUsTitle>Хто ми</AboutUsTitle>
        <AboutUSButton>
          Про нас
          {/* <svg data-testid="ArrowOutwardIcon"></svg> */}
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
            <AboutUsDescription>
              Ми відчули єдність і солідарність, взялися активно волонтерити,
              донатити, поширювати...
            </AboutUsDescription>
          </DescriptionWrapper>
          <AboutUsMap src={Map} alt="Ukraine map" />
        </DescriptionContainer>
        <ButtonLearnMore variant="contained">Дізнатись більше</ButtonLearnMore>
      </AboutUsMainContentWrapper>
    </AboutUsSectionWrapper>
  );
};

export default AboutUs;

import React from 'react';
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
  ButtonLearnMore,
  DescriptionContainer,
  DescriptionWrapper,
  TitleWrapper,
  AboutUsIcon,
} from './AboutUs.styled';

const AboutUs = () => {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1280px)',
  });

  return (
    <AboutUsSectionWrapper>
      <TitleWrapper>
        <AboutUsTitle>Хто ми</AboutUsTitle>
        <AboutUSButton>
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

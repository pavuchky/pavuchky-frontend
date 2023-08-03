import React from 'react';
import Map from '../../assets/images/map.svg';
import {
  AboutUSButton,
  AboutUsDescription,
  AboutUsMainContentWrapper,
  AboutUsMap,
  AboutUsSectionWrapper,
  AboutUsTitle,
  DescriptionWrapper,
  TitleWrapper,
} from './AboutUs.styled';
import Button from '@mui/material/Button';

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
        <DescriptionWrapper>
          <AboutUsDescription>
            Повномасштабне вторгнення росії змусило кожного українця замислитися
            про те, що він чи вона може зробити для допомоги своїй країні,
            армії, співгромадянам.
          </AboutUsDescription>
          <AboutUsDescription>
            Ми відчули єдність і солідарність, взялися активно волонтерити,
            донатити, поширювати важливу інформацію для збереження життів
            українців і правду про злочини росіян на нашій землі.
          </AboutUsDescription>
        </DescriptionWrapper>
        <AboutUsMap src={Map} alt="Ukraine map" />
        {/* <button>Дізнатись більше</button> */}
        <Button variant="contained">Дізнатись більше</Button>
      </AboutUsMainContentWrapper>
    </AboutUsSectionWrapper>
  );
};

export default AboutUs;

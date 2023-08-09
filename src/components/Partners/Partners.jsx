import React from 'react';
import { useMediaQuery } from 'react-responsive';
import useFetch from 'hooks/useFetch';
import {
  PartnersBtn,
  PartnersContainer,
  PartnersImg,
  PartnersList,
  PartnersSubTitle,
  PartnersTablet,
  PartnersText,
  PartnersTitle,
} from './Partners.styled';

export const Partners = () => {
  const { data } = useFetch('partners');

  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });

  return (
    <PartnersContainer>
      <PartnersTitle>Партнери</PartnersTitle>
      <PartnersList>
        {data?.partnersList.map(({ id, partnerImage, partnerLink }) => (
          <li key={id}>
            <a href={partnerLink} target="_blank" rel="noopener noreferrer">
              <PartnersImg src={partnerImage} alt="partner" />
            </a>
          </li>
        ))}
      </PartnersList>
      <PartnersTablet>
        <div>
          <PartnersSubTitle>Стати партнером</PartnersSubTitle>
          {isDesktop ? (
            <PartnersText>
              Допомагай нам боротись з ворожим оком. Приєднуйся в команду!
            </PartnersText>
          ) : (
            <PartnersText>Допомагай нам боротись з ворожим оком.</PartnersText>
          )}
        </div>
        <PartnersBtn to="/partners">Подати заявку</PartnersBtn>
      </PartnersTablet>
    </PartnersContainer>
  );
};

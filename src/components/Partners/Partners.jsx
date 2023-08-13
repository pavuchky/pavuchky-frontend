import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();

  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });

  return (
    <PartnersContainer>
      <PartnersTitle>{t('partners.partners')}</PartnersTitle>
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
          <PartnersSubTitle>{t('partners.become')}</PartnersSubTitle>
          {isDesktop ? (
            <PartnersText>{t('partners.team')}</PartnersText>
          ) : (
            <PartnersText>{t('partners.help')}</PartnersText>
          )}
        </div>
        <PartnersBtn to="/partners">{t('partners.apply')}</PartnersBtn>
      </PartnersTablet>
    </PartnersContainer>
  );
};

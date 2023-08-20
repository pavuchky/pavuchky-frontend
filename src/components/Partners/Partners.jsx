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
        {data?.partnersList.map(
          ({
            id,
            partnerLink,
            defaultImage,
            partnerImageMobile,
            partnerImageTablet,
            partnerImageDesktop,
          }) => (
            <li key={id}>
              <a href={partnerLink} target="_blank" rel="noopener noreferrer">
                <picture>
                  <source
                    srcSet={partnerImageMobile}
                    media="(max-width: 767px)"
                  />
                  <source
                    srcSet={partnerImageTablet}
                    media="(max-width: 1439px)"
                  />
                  <source
                    srcSet={partnerImageDesktop}
                    media="(min-width: 1440px)"
                  />
                  <PartnersImg src={defaultImage} alt="partner" />
                </picture>
              </a>
            </li>
          )
        )}
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

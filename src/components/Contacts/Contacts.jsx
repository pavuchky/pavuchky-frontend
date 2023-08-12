import React, { useContext } from 'react';
import { useMediaQuery } from 'react-responsive';
import { LanguageContext } from 'utils/LanguageContext';
import useFetch from '../../hooks/useFetch';
import MapComponent from './MapContacts/MapContacts';
import Icons from '../../assets/images/sprite.svg';
import {
  ContactsContainer,
  ContactsTitle,
  ContactsSubTitle,
  ContactsFirstAddress,
  ContactsAdminTitle,
  ContactPerson,
  LocationContainer,
  SocialMediaContainer,
  SocialMediaTitle,
  SocialMediaLinks,
  ContactsList,
  ContactNumber,
  ContactsWrapper,
  ContactsListWrapper,
} from './Contacts.styled';

const IconSocial = ({ name, color, size }) => (
  <svg className={`icon-${name}`} fill={color} width={size} height={size}>
    <use xlinkHref={`${Icons}#icon-${name}`} />
  </svg>
);

const Contacts = () => {
  const { lang } = useContext(LanguageContext);
  const { data } = useFetch('contacts');
  const isLargeScreen = useMediaQuery({ minWidth: 1440 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const telegramLink = data?.socialMediaList.find(
    link => link.socialMediaName === 'Telegram'
  )?.socialMediaLink;

  return (
    <ContactsContainer id="contacts">
      <ContactsTitle>Де нас знайти</ContactsTitle>
      <ContactsWrapper>
        <ContactsListWrapper>
          <ContactsSubTitle>Локація плетіння</ContactsSubTitle>
          <ContactsList>
            {data?.streetList?.map(({ id, street }) => (
              <ContactsFirstAddress key={id}>
                {street[lang]}
              </ContactsFirstAddress>
            ))}
          </ContactsList>
          <ContactsAdminTitle>Контактні дані</ContactsAdminTitle>
          <ContactPerson>Адміністратор: Ольга Кузакова</ContactPerson>
          <ContactNumber
            href={isMobile ? `tel:${data?.phone}` : telegramLink}
            target="_blank"
            rel="noreferrer"
          >
            {data?.phone}
          </ContactNumber>
        </ContactsListWrapper>
        <LocationContainer>
          <MapComponent />
        </LocationContainer>
      </ContactsWrapper>
      <SocialMediaContainer>
        <SocialMediaTitle>Слідкуй за нами тут:</SocialMediaTitle>
        <SocialMediaLinks>
          {data?.socialMediaList?.map(
            ({ id, socialMediaLink, socialMediaName }) => (
              <li key={id}>
                <a href={socialMediaLink}>
                  <IconSocial
                    name={socialMediaName}
                    size={isLargeScreen ? 36 : 24}
                    target="_blank"
                    rel="noreferrer"
                  />
                </a>
              </li>
            )
          )}
        </SocialMediaLinks>
      </SocialMediaContainer>
    </ContactsContainer>
  );
};
export default Contacts;

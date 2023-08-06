import React from 'react';
import location from './ImgLocation/location_s_mob_@.png.jpeg';
import { useMediaQuery } from 'react-responsive';
import Icons from '../../assets/images/sprite.svg';
import {
  ContactsContainer,
  ContactsTitle,
  ContactsSubTitle,
  ContactsFirstAddress,
  ContactsFirstAddressList,
  ContactsSecondAddress,
  ContactPerson,
  LocationContainer,
  SocialMediaContainer,
  SocialMediaTitle,
  SocialMediaLinks,
  ImgLocRad,
  ContactsList,
  ContactNumber,
  ContactsSecondAddressSpan,
  ContactsWrapper,
} from './Contacts.styled';

const IconSocial = ({ name, color, size }) => (
  <svg className={`icon-${name}`} fill={color} width={size} height={size}>
    <use xlinkHref={`${Icons}#icon-${name}`} />
  </svg>
);

const Contacts = () => {
  const isLargeScreen = useMediaQuery({ minWidth: 1440 });
  return (
    <ContactsContainer id="contacts">
      <ContactsTitle>Де нас знайти</ContactsTitle>
      <ContactsWrapper>
        <ContactsList>
          <li>
            <ContactsSubTitle>Локація плетіння</ContactsSubTitle>
            <ContactsFirstAddress>
              c. Софіївська Борщагівка:
              <br /> ЖК &#8220;Софіївський квартал&#8221;
            </ContactsFirstAddress>
            <ContactsFirstAddressList>
              <li>вул.Шалімова, 65 (підвал будинку)</li>
              <li>вул.Шалімова, 63a</li>
            </ContactsFirstAddressList>
            <ContactsSecondAddress>
              ЖК &#8220;Уютний квартал&#8221;
              <ContactsSecondAddressSpan>
                пр-т Героїв Небесної Сотні, 16/22
              </ContactsSecondAddressSpan>
            </ContactsSecondAddress>
          </li>
          <li>
            <ContactsSubTitle>Контактні дані</ContactsSubTitle>
            <ContactPerson>Адміністратор: Ольга Кузакова </ContactPerson>
            <ContactNumber>+380635693058</ContactNumber>
          </li>
        </ContactsList>
        <LocationContainer>
          <ImgLocRad src={location} alt="Location" width="327" />
        </LocationContainer>
      </ContactsWrapper>
      <SocialMediaContainer>
        <SocialMediaTitle>Слідкуй за нами тут:</SocialMediaTitle>
        <SocialMediaLinks>
          <li>
            <a
              href="https://www.facebook.com/PavuchkyBorschahinky"
              target="_blank"
              rel="noreferrer"
            >
              <IconSocial name="facebook" size={isLargeScreen ? 36 : 24} />
            </a>
          </li>
          <li>
            <a href="tel:+380635693058" target="_blank" rel="noreferrer">
              <IconSocial name="telegram" size={isLargeScreen ? 36 : 24} />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/@user-mb3bs9jv1h"
              target="_blank"
              rel="noreferrer"
            >
              <IconSocial name="youtube" size={isLargeScreen ? 36 : 24} />
            </a>
          </li>
        </SocialMediaLinks>
      </SocialMediaContainer>
    </ContactsContainer>
  );
};
export default Contacts;

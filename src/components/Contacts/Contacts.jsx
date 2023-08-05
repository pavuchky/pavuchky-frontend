import React from 'react';
import location from './ImgLocation/location_s_mob_@.png.jpeg';
import Icons from '../../assets/images/sprite.svg';
import {
  ContactsContainer,
  ContactsTitle,
  ContactsSubTitle,
  ContactsFirstAdress,
  ContactsFirstAdressList,
  ContactsSecondAdress,
  ContactPerson,
  ImgLocationContainer,
  SocialMediaContainer,
  SocialMediaTitle,
  SocialMediaLinks,
  ContactsAdressUl,
  ContactsWrapper,
  ImgLocRad,
} from './Contacts.styled';

const IconSocial = ({ name, color, size }) => (
  <svg className={`icon-${name}`} fill={color} width={size} height={size}>
    <use xlinkHref={`${Icons}#icon-${name}`} />
  </svg>
);

const Contacts = () => {
  return (
    <ContactsContainer id="contacts">
      <ContactsTitle>Де нас знайти</ContactsTitle>
      <ContactsSubTitle>Локація плетіння</ContactsSubTitle>
      <ContactsWrapper>
        <ContactsAdressUl>
          <ContactsFirstAdress>
            c. Софіївська Борщагівка:
            <br /> ЖК &#8220;Софіївський квартал&#8221;
          </ContactsFirstAdress>
          <ContactsFirstAdressList>
            вул.Шалімова, 65 (підвал будинку)
          </ContactsFirstAdressList>
          <ContactsFirstAdressList>вул.Шалімова, 63a</ContactsFirstAdressList>
          <ContactsSecondAdress>
            ЖК &#8220;Уютний квартал&#8221;
            <p>пр-т Героїв Небесної Сотні, 16/22</p>
          </ContactsSecondAdress>
          <ContactsSubTitle>Контактні дані адміністратора</ContactsSubTitle>
          <ContactPerson>Ольги Кузакової: </ContactPerson>
          <ContactPerson>+380635693058</ContactPerson>
        </ContactsAdressUl>
        <ImgLocationContainer>
          <ImgLocRad src={location} alt="Location" width="327" height="220" />
        </ImgLocationContainer>
      </ContactsWrapper>

      <SocialMediaContainer>
        <SocialMediaTitle>Слідкуй за нами тут:</SocialMediaTitle>
        <SocialMediaLinks>
          <a
            href="https://www.facebook.com/PavuchkyBorschahinky"
            target="_blank"
            rel="noreferrer"
          >
            <IconSocial name="facebook" size={24} />
          </a>
          <a href="tel:+380635693058" target="_blank" rel="noreferrer">
            <IconSocial name="telegram" size={24} />
          </a>
          <a
            href="https://www.youtube.com/@user-mb3bs9jv1h"
            target="_blank"
            rel="noreferrer"
          >
            <IconSocial name="youtube" size={24} />
          </a>
        </SocialMediaLinks>
      </SocialMediaContainer>
    </ContactsContainer>
  );
};
export default Contacts;

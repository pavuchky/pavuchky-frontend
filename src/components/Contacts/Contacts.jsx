import React from 'react';
import location from './ImgLocation/location_s_mob_@.png';
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
} from './Contacts.styled';

const Icon = ({ name, color, size }) => (
  <svg className={`icon-${name}`} fill={color} width={size} height={size}>
    <use xlinkHref={`${Icons}#icon-${name}`} />
  </svg>
);

const Contacts = () => {
  return (
    <ContactsContainer>
      <ContactsTitle>Де нас знайти</ContactsTitle>
      <ContactsSubTitle>Локація плетіння</ContactsSubTitle>
      <ul>
        <ContactsFirstAdress>
          c. Софіївська Борщагівка: ЖК &#8220;Софіївський квартал&#8221;
        </ContactsFirstAdress>
        <ContactsFirstAdressList>
          вул.Шалімова, 63a (підвал будинку)
        </ContactsFirstAdressList>
        <ContactsFirstAdressList>
          Дитячий майданчик дит.садочку &#8220;Мозаїка&#8221;
        </ContactsFirstAdressList>
      </ul>
      <ContactsSecondAdress>
        ЖК &#8220;Уютний квартал&#8221; - уточнюється пр-т Героїв Небесної
        Сотні, 16/22
      </ContactsSecondAdress>
      <div>
        <ContactsSubTitle>Контактні дані</ContactsSubTitle>
        <ContactPerson>Aдмiнicтpaтop: Ольга Кузакова</ContactPerson>
        <ContactPerson>+380635693058</ContactPerson>
      </div>
      <ImgLocationContainer>
        <img src={location} alt="Location" width="327" height="220" />
      </ImgLocationContainer>
      <SocialMediaContainer>
        <SocialMediaTitle>Слідкуй за нами тут:</SocialMediaTitle>
        <SocialMediaLinks>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <Icon name="facebook" size={24} />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <Icon name="telegram" size={24} />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <Icon name="instagram" size={24} />
          </a>
        </SocialMediaLinks>
      </SocialMediaContainer>
    </ContactsContainer>
  );
};
export default Contacts;

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
    <ContactsContainer id="contacts">
      <ContactsTitle>Де нас знайти</ContactsTitle>
      <ContactsSubTitle>Локація плетіння</ContactsSubTitle>
      <ul>
        <ContactsFirstAdress>
          c. Софіївська Борщагівка: ЖК &#8220;Софіївський квартал&#8221;
        </ContactsFirstAdress>
        <ContactsFirstAdressList>
          вул.Шалімова, 65 (підвал будинку)
        </ContactsFirstAdressList>
        <ContactsFirstAdressList>
          вул.Шалімова, 63a
        </ContactsFirstAdressList>
      </ul>
      <ContactsSecondAdress>
              ЖК &#8220;Уютний квартал&#8221;
              <p>пр-т Героїв Небесної
        Сотні, 16/22</p>
      </ContactsSecondAdress>
      <div>
        <ContactsSubTitle>Контактні дані адміністратора</ContactsSubTitle>
        <ContactPerson>Ольга Кузакова</ContactPerson>
        <ContactPerson>+380635693058</ContactPerson>
      </div>
      <ImgLocationContainer>
        <img src={location} alt="Location" width="327" height="220" />
      </ImgLocationContainer>
      <SocialMediaContainer>
        <SocialMediaTitle>Слідкуй за нами тут:</SocialMediaTitle>
        <SocialMediaLinks>
          <a href="https://www.facebook.com/PavuchkyBorschahinky" target="_blank" rel="noreferrer">
            <Icon name="facebook" size={24} />
          </a>
          <a href="tel:+380635693058" target="_blank" rel="noreferrer">
            <Icon name="telegram" size={24} />
          </a>
          <a href="https://www.youtube.com/@user-mb3bs9jv1h" target="_blank" rel="noreferrer">
            <Icon name="instagram" size={24} />
          </a>
        </SocialMediaLinks>
      </SocialMediaContainer>
    </ContactsContainer>
  );
};
export default Contacts;

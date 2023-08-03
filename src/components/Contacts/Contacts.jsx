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
          c. Софіївська Борщагівка: ЖК ‘’Софіївський квартал’’
        </ContactsFirstAdress>
        <ContactsFirstAdressList>вул.Шалімова, 63a (підвал будинку)</ContactsFirstAdressList>
        <ContactsFirstAdressList>Дитячий майданчик дит.садочку "Мозаїка"</ContactsFirstAdressList>
      </ul>
      <ContactsSecondAdress>ЖК ‘’Уютний квартал’’ - уточнюється</ContactsSecondAdress>
      <ContactsSecondAdress> пр-т Героїв Небесної Сотні, 16/22</ContactsSecondAdress>
      <div>
        <ContactsSubTitle>Контактні дані</ContactsSubTitle>
        <p>Aдмiнicтpaтop: Ольга Кузакова</p>
        <p>+380635693058</p>
      </div>
      <div>
        <img src={location} alt="Location" width="327" height="220" />
      </div>
      <div>
        <p>Слідкуй за нами тут:</p>
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
          <Icon name="facebook" size={24} />
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
          <Icon name="telegram" size={24} />
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
          <Icon name="instagram" size={24} />
        </a>
      </div>
    </ContactsContainer>
  );
};
export default Contacts;

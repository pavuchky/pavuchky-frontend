import React from 'react';
import location from './ImgLocation/location_s_mob_@.png';

const Contacts = () => {
  return (
    <div>
      <h3>Де нас знайти</h3>
      <p>Локація плетіння</p>
      <ul>
        <p>с. Софіївська Борщагівка: ЖК ‘’Софіївський квартал’’</p>
        <li>вул.Шалімова, 63a (підвал будинку)</li>
        <li>Дитячий майданчик дит.садочку "Мозаїка"</li>
      </ul>
      <p>ЖК ‘’Уютний квартал’’ - уточнюється</p>
      <p> пр-т Героїв Небесної Сотні, 16/22</p>
      <div>
        <p>Контактні дані</p>
        <p>Aдміністратор: Ольга Кузакова</p>
        <p>+380635693058</p>
      </div>
      <div>
        <img src={location} alt="Location" width="327" height="220" />
      </div>
      <div>
        <p>Слідкуй за нами тут:</p>
        <svg width="24" height="24">
          <use href="../../assets/images/sprite.svg#facebook" />
        </svg>
        <svg width="24" height="24">
          <use xlinkHref="#twitter" />
        </svg>
      </div>
    </div>
  );
};

export default Contacts;

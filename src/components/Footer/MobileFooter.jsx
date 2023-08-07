import React from 'react';
import { NavLink } from 'react-router-dom';

import Icons from '../../assets/images/sprite.svg';

import {
  FooterContainer,
  FooterSocialMediaContainer,
  FooterSocialMediaLinks,
  FooterSocialTitle,
  // FooterList,
  FooterTel,
  FooterAllReserved,
  FooterSubLinks,
  FooterSubList,
} from './Footer.styled';


const MobFooter = () => {
  const IconFooterSocial = ({ name, color, size }) => (
    <svg className={`icon-${name}`} fill={color} width={size} height={size}>
      <use xlinkHref={`${Icons}#icon-${name}`} />
    </svg>
  );

 



  return (
    <FooterContainer>
      <FooterSocialMediaContainer>
        <FooterSocialTitle>Слідкуй за нами тут:</FooterSocialTitle>
        <FooterSocialMediaLinks>
          <a
            href="https://www.facebook.com/PavuchkyBorschahinky"
            target="_blank"
            rel="noreferrer"
          >
            <IconFooterSocial name="facebook" size={36} />
          </a>
          <a href="tel:+380635693058" target="_blank" rel="noreferrer">
            <IconFooterSocial name="telegram" size={36} />
          </a>
          <a
            href="https://www.youtube.com/@user-mb3bs9jv1h"
            target="_blank"
            rel="noreferrer"
          >
            <IconFooterSocial name="youtube" size={36} />
          </a>
        </FooterSocialMediaLinks>
      </FooterSocialMediaContainer>
      <div>
        <FooterSubList>
          <li>
            <NavLink to="/gallery/photos">Галерея</NavLink>
          </li>
          <li> <NavLink to="/about">Про нас</NavLink>
          </li><li>
            <FooterSubLinks to="/#donation">Задонатити</FooterSubLinks>
          </li>
          <li> <NavLink to="/order">Замовити</NavLink></li>
          <li>
            <FooterSubLinks  to="/#contacts">Плести</FooterSubLinks>
          </li>
          <li> <NavLink to="reporting">Звітність</NavLink></li>
          
          
         
        </FooterSubList>
        <FooterTel>
          <a href="tel:+380635693058" target="_blank" rel="noreferrer">
            +380635693058
          </a>
        </FooterTel>
      </div>
      <FooterAllReserved>&#64;All right reserved</FooterAllReserved>
    </FooterContainer>
  );
};

export default MobFooter;

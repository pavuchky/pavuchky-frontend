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

import useFetch from '../../hooks/useFetch';

const MobFooter = () => {
  const IconFooterSocial = ({ name, color, size }) => (
    <svg className={`icon-${name}`} fill={color} width={size} height={size}>
      <use xlinkHref={`${Icons}#icon-${name}`} />
    </svg>
  );

 const { data } = useFetch('contacts');

  return (
    <FooterContainer>
      <FooterSocialMediaContainer>
        <FooterSocialTitle>Слідкуй за нами тут:</FooterSocialTitle>
        <FooterSocialMediaLinks>
          {data?.socialMediaList?.map(
            ({ id, socialMediaLink, socialMediaName }) => (
              <li key={id}>
                <a href={socialMediaLink}>
                  <IconFooterSocial
                    name={socialMediaName}
                    size={36}
                    target="_blank"
                    rel="noreferrer"
                  />
                </a>
              </li>
            )
          )}
        </FooterSocialMediaLinks>
      </FooterSocialMediaContainer>
      <div>
        <FooterSubList>
          <li>
            <NavLink to="/gallery/photos">Галерея</NavLink>
          </li>
          <li>
            <NavLink to="/about">Про нас</NavLink>
          </li>
          <li>
            <FooterSubLinks to="/#donation">Задонатити</FooterSubLinks>
          </li>
          <li>
            <NavLink to="/order">Замовити</NavLink>
          </li>
          <li>
            <FooterSubLinks to="/#contacts">Плести</FooterSubLinks>
          </li>
          <li>
            <NavLink to="reporting">Звітність</NavLink>
          </li>
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

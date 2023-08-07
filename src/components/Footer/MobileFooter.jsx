import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Icons from '../../assets/images/sprite.svg';

import {
  FooterContainer,
  FooterSocialMediaContainer,
  FooterSocialMediaLinks,
  FooterSocialTitle,
  FooterList,
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

  const { t } = useTranslation();

  const footerItems = [
    { href: '/gallery/photos', value: t('header.gallery') },
    { href: '/about', value: t('header.about') },
    { href: '/order', value: t('header.order') },
    { href: '/reporting', value: t('header.reporting') },
  ];

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
        <FooterList>
          {footerItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.href}
                dangerouslySetInnerHTML={{ __html: item.value }}
              />
            </li>
          ))}
        </FooterList>
        <FooterSubList>
          <li>
            <FooterSubLinks  to="/#donation">Задонатити</FooterSubLinks>
          </li>
          <li>
            <FooterSubLinks  to="/#contacts">Плести</FooterSubLinks>
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

import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Icons from '../../assets/images/sprite.svg';

import {
  FooterTabContainer,
FooterSocialTabContainer,
  FooterSocialTabLinks,
 FooterTabSocialTitle,
 FooterTabList,
 FooterTabTel,
FooteTabAllReserved
} from './TabletDesctopFooter.styled';


const TabletDesctopFoter = () => {
  const IconFooterSocial = ({ name, color, size }) => (
    <svg className={`icon-${name}`} fill={color} width={size} height={size}>
      <use xlinkHref={`${Icons}#icon-${name}`} />
    </svg>
  );
  const { t } = useTranslation();

  const footerItems = [
    { href: '/gallery/photos', value: t('header.gallery') },
    { href: '/about', value: t('header.about') },
    { href: '#donate', value: t('header.donat') },
    { href: '/order', value: t('header.order') },
    { href: 'weave', value: t('header.weave') },
    { href: '/reporting', value: t('header.reporting') },
  ];
  return (
    <FooterTabContainer>
      <>
        <FooterTabList>
          {footerItems.map((i, index) => (
            <li key={index}>
              <NavLink
                to={i.href}
                dangerouslySetInnerHTML={{ __html: i.value }}
              />
            </li>
          ))}
        </FooterTabList>
        <FooterTabTel>
          <a href="tel:+380635693058" target="_blank" rel="noreferrer">
            +380635693058
          </a>
        </FooterTabTel>
      </>
      <FooterSocialTabContainer>
        <FooterTabSocialTitle>Слідкуй за нами тут:</FooterTabSocialTitle>
        <FooterSocialTabLinks>
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
        </FooterSocialTabLinks>
      </FooterSocialTabContainer>
      <FooteTabAllReserved>&#64;All right reserved</FooteTabAllReserved>
    </FooterTabContainer>
  );
};

export default TabletDesctopFoter;

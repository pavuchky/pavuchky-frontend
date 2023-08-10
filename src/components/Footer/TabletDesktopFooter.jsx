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
  FooteTabAllReserved,
  FooterTabSubList,
  FooterTabSubLinks,
  FooterTabListWrapper,
} from './TabletDesktopFooter.styled';
import useFetch from 'hooks/useFetch';

const TabletDesktopFooter = () => {
  const { data } = useFetch('contacts');

  const getSocialMediaLink = name => {
    const socialMedia = data?.socialMediaList.find(
      link => link.socialMediaName === name
    );
    const socialMediaLink = socialMedia?.socialMediaLink;
    return socialMediaLink;
  };

  const IconFooterSocial = ({ name, color, size }) => (
    <svg
      className={`icon-${name}`}
      fill={color}
      width={size}
      height={size}
      aria-label={name}
    >
      <use xlinkHref={`${Icons}#icon-${name}`} />
    </svg>
  );
  const { t } = useTranslation();

  const footerItems = [
    { href: '/about', value: t('header.about') },
    { href: '/order', value: t('header.order') },
    { href: '/reporting', value: t('header.reporting') },
    { href: '/gallery/photos', value: t('header.gallery') },
  ];

  return (
    <FooterTabContainer>
      <>
        <FooterTabListWrapper>
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
          <FooterTabSubList>
            <li>
              <FooterTabSubLinks to="/#donation">Задонатити</FooterTabSubLinks>
            </li>
            <li>
              <FooterTabSubLinks to="/#contacts">Плести</FooterTabSubLinks>
            </li>
          </FooterTabSubList>
        </FooterTabListWrapper>
        <FooterTabTel>
          <a href="tel:+380635693058" target="_blank" rel="noreferrer">
            +380635693058
          </a>
        </FooterTabTel>
      </>
      <FooterSocialTabContainer>
        <FooterTabSocialTitle>Слідкуй за нами тут:</FooterTabSocialTitle>
        <FooterSocialTabLinks>
          <li>
            <a
              href={getSocialMediaLink('Facebook')}
              target="_blank"
              rel="noreferrer"
            >
              <IconFooterSocial name="facebook" size={36} />
            </a>
          </li>
          <li>
            <a
              href={getSocialMediaLink('Telegram')}
              target="_blank"
              rel="noreferrer"
            >
              <IconFooterSocial name="telegram" size={36} />
            </a>
          </li>
          <li>
            <a
              href={getSocialMediaLink('YouTube')}
              target="_blank"
              rel="noreferrer"
            >
              <IconFooterSocial name="youtube" size={36} />
            </a>
          </li>
        </FooterSocialTabLinks>
      </FooterSocialTabContainer>
      <FooteTabAllReserved>&#64;All right reserved</FooteTabAllReserved>
    </FooterTabContainer>
  );
};

export default TabletDesktopFooter;
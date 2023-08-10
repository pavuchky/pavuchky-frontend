import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useFetch from 'hooks/useFetch';
import Icons from '../../assets/images/sprite.svg';

import {
  FooterTabContainer,
  FooterSocialTabContainer,
  FooterSocialTabLinks,
  FooterTabSocialTitle,
  FooterTabList,
  FooterTabTel,
  FooterTabAllReserved,
  FooterTabSubList,
  FooterTabSubLinks,
  FooterTabListWrapper,
} from './TabletDesktopFooter.styled';

const TabletDesktopFooter = () => {
  const { data } = useFetch('contacts');

  const telegramLink = data?.socialMediaList.find(
    link => link.socialMediaName === 'Telegram'
  )?.socialMediaLink;

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
          <a href={telegramLink} target="_blank" rel="noreferrer">
            {data?.phone}
          </a>
        </FooterTabTel>
      </>
      <FooterSocialTabContainer>
        <FooterTabSocialTitle>Слідкуй за нами тут:</FooterTabSocialTitle>
        <FooterSocialTabLinks>
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
        </FooterSocialTabLinks>
      </FooterSocialTabContainer>
      <FooterTabAllReserved>&#64;All right reserved</FooterTabAllReserved>
    </FooterTabContainer>
  );
};

export default TabletDesktopFooter;

import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useFetch from 'hooks/useFetch';
import { handleScrollToTop } from 'utils/handleScrollToTop';
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
    { href: '/about', value: t('nav.about') },
    { href: '/order', value: t('nav.order') },
    { href: '/reporting', value: t('nav.reporting') },
    { href: '/gallery/photos', value: t('nav.gallery') },
  ];

  return (
    <FooterTabContainer>
      <>
        <FooterTabListWrapper>
          <FooterTabList>
            {footerItems.map((i, index) => (
              <li key={index} onClick={handleScrollToTop}>
                <NavLink
                  to={i.href}
                  dangerouslySetInnerHTML={{ __html: i.value }}
                />
              </li>
            ))}
          </FooterTabList>
          <FooterTabSubList>
            <li>
              <FooterTabSubLinks to="/#donation">
                {t('nav.donate')}
              </FooterTabSubLinks>
            </li>
            <li>
              <FooterTabSubLinks to="/#contacts">
                {t('nav.weave')}
              </FooterTabSubLinks>
            </li>
          </FooterTabSubList>
        </FooterTabListWrapper>
        <FooterTabTel>
          <a href={telegramLink} target="_blank" rel="noopener noreferrer">
            {data?.phone}
          </a>
        </FooterTabTel>
      </>
      <FooterSocialTabContainer>
        <FooterTabSocialTitle>{t('contacts.follow')}</FooterTabSocialTitle>
        <FooterSocialTabLinks>
          {data?.socialMediaList?.map(
            ({ id, socialMediaLink, socialMediaName }) => (
              <li key={id}>
                <a
                  href={socialMediaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Link to ${socialMediaName}`}
                >
                  <IconFooterSocial name={socialMediaName} size={36} />
                </a>
              </li>
            )
          )}
        </FooterSocialTabLinks>
      </FooterSocialTabContainer>
      <FooterTabAllReserved>&#xa9;All rights reserved</FooterTabAllReserved>
    </FooterTabContainer>
  );
};

export default TabletDesktopFooter;

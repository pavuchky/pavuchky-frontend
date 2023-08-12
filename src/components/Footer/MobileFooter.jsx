import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

  return (
    <FooterContainer>
      <FooterSocialMediaContainer>
        <FooterSocialTitle>{t('contacts.follow')}</FooterSocialTitle>
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
            <NavLink to="/gallery/photos">{t('nav.gallery')}</NavLink>
          </li>
          <li>
            <NavLink to="/about">{t('nav.aboutUs')}</NavLink>
          </li>
          <li>
            <FooterSubLinks to="/#donation">{t('nav.donate')}</FooterSubLinks>
          </li>
          <li>
            <NavLink to="/order">{t('nav.order')}</NavLink>
          </li>
          <li>
            <FooterSubLinks to="/#contacts">{t('nav.weave')}</FooterSubLinks>
          </li>
          <li>
            <NavLink to="reporting">{t('nav.reporting')}</NavLink>
          </li>
        </FooterSubList>
        <FooterTel>
          <a href="tel:+380635693058">+380635693058</a>
        </FooterTel>
      </div>
      <FooterAllReserved>&#64;All right reserved</FooterAllReserved>
    </FooterContainer>
  );
};

export default MobFooter;

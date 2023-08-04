import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { NavList } from './DesktopNav.styled';

export const DesktopNav = () => {
  const { t } = useTranslation();
  const items = [
    { href: '/about', value: t('header.about') },
    { href: '/order', value: t('header.order') },
    { href: '/reporting', value: t('header.reporting') },
    { href: '/gallery/photos', value: t('header.gallery') },
    { href: '#contacts', value: t('header.contacts') },
  ];
  return (
    <NavList>
      {items.map((i, index) => (
        <li key={index}>
          <NavLink to={i.href} dangerouslySetInnerHTML={{ __html: i.value }} />
        </li>
      ))}
    </NavList>
  );
};

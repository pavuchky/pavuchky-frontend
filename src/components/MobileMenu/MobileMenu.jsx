import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuBtn, MenuList } from './MobileMenu.styled';
import { useTranslation } from 'react-i18next';

export const MobileMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { t } = useTranslation();

  const items = [
    { href: '/', value: t('header.main') },
    { href: '/about', value: t('header.about') },
    { href: '/order', value: t('header.order') },
    { href: '/reporting', value: t('header.reporting') },
    { href: '/gallery/photos', value: t('header.gallery') },
    { href: '#donation', value: t('header.donat') },
    { href: '/weave', value: t('header.weave') },
  ];

  return (
    <>
      <MenuBtn onClick={() => setShowMenu(!showMenu)}>
        {t('header.menu')}
      </MenuBtn>
      <MenuList showMenu={showMenu}>
        {items.map((i, index) => (
          <li key={index} onClick={() => setShowMenu(false)}>
            <Link to={i.href} dangerouslySetInnerHTML={{ __html: i.value }} />
          </li>
        ))}
      </MenuList>
    </>
  );
};

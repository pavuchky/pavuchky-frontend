import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuBtn, MenuList } from './MobileMenu.styled';
import { useTranslation } from 'react-i18next';
import { HashLink } from 'react-router-hash-link';

export const MobileMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const { t } = useTranslation();

  const items = [
    { href: '/', value: t('header.main') },
    { href: '/about', value: t('header.about') },
    { href: '/order', value: t('header.order') },
    { href: '/reporting', value: t('header.reporting') },
    { href: '/gallery/photos', value: t('header.gallery') },
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
        <li onClick={() => setShowMenu(false)}>
          <HashLink to="/#donation"> {t('header.donate')}</HashLink>
        </li>
        <li onClick={() => setShowMenu(false)}>
          <HashLink to="/#contacts">{t('header.weave')}</HashLink>
        </li>
      </MenuList>
    </>
  );
};

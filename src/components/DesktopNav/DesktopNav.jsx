import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { NavList } from './DesktopNav.styled';
import { HashLink } from 'react-router-hash-link';

export const DesktopNav = () => {
  const { t } = useTranslation();

  const items = [
    { href: '/about', value: t('header.about') },
    { href: '/order', value: t('header.order') },
    { href: '/reporting', value: t('header.reporting') },
    { href: '/gallery/photos', value: t('header.gallery') },
  ];

  return (
    <NavList>
      {items.map((i, index) => (
        <li key={index}>
          <NavLink to={i.href} dangerouslySetInnerHTML={{ __html: i.value }} />
        </li>
      ))}
      <li>
        <HashLink to="/#contacts">{t('header.contacts')}</HashLink>
      </li>
    </NavList>
  );
};

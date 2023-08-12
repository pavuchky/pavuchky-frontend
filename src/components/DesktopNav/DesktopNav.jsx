import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { NavList } from './DesktopNav.styled';
import { HashLink } from 'react-router-hash-link';

export const DesktopNav = () => {
  const { t } = useTranslation();

  const items = [
    { href: '/about', value: t('nav.about') },
    { href: '/order', value: t('nav.order') },
    { href: '/reporting', value: t('nav.reporting') },
    { href: '/gallery/photos', value: t('nav.gallery') },
  ];

  return (
    <NavList>
      {items.map((i, index) => (
        <li key={index}>
          <NavLink to={i.href} dangerouslySetInnerHTML={{ __html: i.value }} />
        </li>
      ))}
      <li>
        <HashLink to="/#contacts">{t('nav.contacts')}</HashLink>
      </li>
    </NavList>
  );
};

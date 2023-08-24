import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { NavList } from './DesktopNav.styled';

export const DesktopNav = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#contacts') {
      const element = document.getElementById('contacts');
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 500);
      }
    }
  }, [location.hash]);

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
        <p
          onClick={() => {
            navigate(`/#contacts`);
            setTimeout(() => {
              const element = document.getElementById('contacts');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }, 500);
          }}
        >
          {t('nav.contacts')}
        </p>
      </li>
    </NavList>
  );
};

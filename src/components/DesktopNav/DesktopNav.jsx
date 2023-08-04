import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavList } from './DesktopNav.styled';

export const DesktopNav = () => {
  const items = [
    { href: '/about', value: 'Про&nbsp;нас' },
    { href: '/order', value: 'Замовити' },
    { href: '/reporting', value: 'Звітність' },
    { href: '/gallery/photos', value: 'Галерея' },
    { href: '#contacts', value: 'Контакти' },
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

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuBtn, MenuList } from './MobileMenu.styled';

export const MobileMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const items = [
    { href: '/', value: 'Головна' },
    { href: '/about', value: 'Про нас' },
    { href: '/order', value: 'Замовити' },
    { href: '/reporting', value: 'Звітність' },
    { href: '/gallery/photos', value: 'Галерея' },
    { href: '/donation', value: 'Задонатити' },
    { href: '/', value: 'Плести' },
  ];

  return (
    <>
      <MenuBtn onClick={() => setShowMenu(!showMenu)}>Меню</MenuBtn>
      <MenuList showMenu={showMenu}>
        {items.map((i, index) => (
          <li key={index} onClick={() => setShowMenu(false)}>
            <Link to={i.href}>{i.value}</Link>
          </li>
        ))}
      </MenuList>
    </>
  );
};

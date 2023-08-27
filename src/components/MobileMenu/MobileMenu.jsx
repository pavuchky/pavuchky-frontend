import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuBtn, MenuList } from './MobileMenu.styled';
import { useTranslation } from 'react-i18next';
import { Modal } from 'components/Modal/Modal';
import useHash from 'hooks/useHash';

export const MobileMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { handleHashScroll } = useHash();

  const { t } = useTranslation();

  const items = [
    { href: '/', value: t('nav.main') },
    { href: '/about', value: t('nav.about') },
    { href: '/order', value: t('nav.order') },
    { href: '/reporting', value: t('nav.reporting') },
    { href: '/gallery/photos', value: t('nav.gallery') },
  ];

  const handleMenuOpen = () => {
    setShowMenu(true);
    document.body.style.overflow = 'hidden';
  };

  const handleMenuClose = () => {
    setShowMenu(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <MenuBtn onClick={handleMenuOpen}>{t('nav.menu')}</MenuBtn>
      {showMenu && (
        <Modal onClose={handleMenuClose} variant="menu">
          <MenuList showMenu={showMenu}>
            {items.map((i, index) => (
              <li key={index} onClick={handleMenuClose}>
                <Link
                  to={i.href}
                  dangerouslySetInnerHTML={{ __html: i.value }}
                />
              </li>
            ))}
            <li onClick={handleMenuClose}>
              <p
                onClick={() => {
                  handleHashScroll('donation');
                }}
              >
                {t('nav.donate')}
              </p>
            </li>
            <li onClick={handleMenuClose}>
              <p
                onClick={() => {
                  handleHashScroll('contacts');
                }}
              >
                {t('nav.weave')}
              </p>
            </li>
          </MenuList>
        </Modal>
      )}
    </>
  );
};

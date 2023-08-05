import React from 'react';

import Icons from '../../assets/images/sprite.svg';

import { FooterContainer } from "./Footer.styled";

const Footer = () => {
  const IconFooterSocial = ({ name, color, size }) => (
    <svg className={`icon-${name}`} fill={color} width={size} height={size}>
      <use xlinkHref={`${Icons}#icon-${name}`} />
    </svg>
  );
  return (
    <FooterContainer>
      <p>Слідкуй за нами тут:</p>
      <div>
        <a
          href="https://www.facebook.com/PavuchkyBorschahinky"
          target="_blank"
          rel="noreferrer"
        >
          <IconFooterSocial name="facebook" size={36} />
        </a>
        <a href="tel:+380635693058" target="_blank" rel="noreferrer">
          <IconFooterSocial name="telegram" size={36} />
        </a>
        <a
          href="https://www.youtube.com/@user-mb3bs9jv1h"
          target="_blank"
          rel="noreferrer"
        >
          <IconFooterSocial name="youtube" size={36} />
        </a>
      </div>
    </FooterContainer>
  );
};
export default Footer;

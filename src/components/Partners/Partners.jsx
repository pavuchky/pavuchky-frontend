import React from 'react';
import { useMediaQuery } from 'react-responsive';
import skk_mob from '../../assets/images/partners/skk_mob.jpg';
import skk_x_mob from '../../assets/images/partners/skk_mob@2x.jpg';
import skk from '../../assets/images/partners/skk.jpg';
import skk_x from '../../assets/images/partners/skk@2x.jpg';
import u_kv_mob from '../../assets/images/partners/u_kv_mob.jpg';
import u_kv_x_mob from '../../assets/images/partners/u_kv_mob@2x.jpg';
import u_kv from '../../assets/images/partners/u_kv.jpg';
import u_kv_x from '../../assets/images/partners/u_kv@2x.jpg';
import goit_mob from '../../assets/images/partners/goit_mob.jpg';
import goit_x_mob from '../../assets/images/partners/goit_mob@2x.jpg';
import goit from '../../assets/images/partners/goit.jpg';
import goit_x from '../../assets/images/partners/goit@2x.jpg';
import {
  PartnersBtn,
  PartnersContainer,
  PartnersImg,
  PartnersList,
  PartnersSubTitle,
  PartnersTablet,
  PartnersText,
  PartnersTitle,
} from './Partners.styled';

export const Partners = () => {
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });

  const partners = [
    {
      href: 'https://skk.com.ua/ru/page/about.html',
      src: isTablet ? skk : skk_mob,
      srcSet: isTablet
        ? `${skk} 1x, ${skk_x} 2x`
        : `${skk_mob} 1x, ${skk_x_mob} 2x`,
      alt: 'skk',
    },
    {
      href: 'https://u-kvartal.com/',
      src: isTablet ? u_kv : u_kv_mob,
      srcSet: isTablet
        ? `${u_kv} 1x, ${u_kv_x} 2x`
        : `${u_kv_mob} 1x, ${u_kv_x_mob} 2x`,
      alt: 'u_kvartal',
    },
    {
      href: 'https://goit.global/ua/',
      src: isTablet ? goit : goit_mob,
      srcSet: isTablet
        ? `${goit} 1x, ${goit_x} 2x`
        : `${goit_mob} 1x, ${goit_x_mob} 2x`,
      alt: 'goit',
    },
  ];
  return (
    <PartnersContainer>
      <PartnersTitle>Партнери</PartnersTitle>
      <PartnersList>
        {partners.map((partner, index) => (
          <li key={index}>
            <a href={partner.href} target="_blank" rel="noopener noreferrer">
              <PartnersImg
                srcSet={partner.srcSet}
                src={partner.src}
                alt={partner.alt}
                width="95px"
                height="95px"
              />
            </a>
          </li>
        ))}
      </PartnersList>
      <PartnersTablet>
        <div>
          <PartnersSubTitle>Стати партнером</PartnersSubTitle>
          {isDesktop ? (
            <PartnersText>
              Допомагай нам боротись з ворожим оком. Приєднуйся в команду!
            </PartnersText>
          ) : (
            <PartnersText>Допомагай нам боротись з ворожим оком.</PartnersText>
          )}
        </div>
        <PartnersBtn to="/partners">Подати заявку</PartnersBtn>
      </PartnersTablet>
    </PartnersContainer>
  );
};

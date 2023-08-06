import React from 'react';
import MobFooter from './MobileFooter';
import { useMediaQuery } from 'react-responsive';
import TabletDesctopFoter from './TabletDesctopFoter';

const Footer = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 370px)' });


  return (
    <>
      {isMobile ? (<MobFooter />) : (<TabletDesctopFoter />)}
    
    </>
  );
}

export default Footer;

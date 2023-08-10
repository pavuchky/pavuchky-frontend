import MobFooter from './MobileFooter';
import { useMediaQuery } from 'react-responsive';
import TabletDesktopFooter from './TabletDesktopFooter';

const Footer = () => {
  const isTabletScreen = useMediaQuery({ minWidth: 768 });

  return <>{!isTabletScreen ? <MobFooter /> : <TabletDesktopFooter />}</>;
};

export default Footer;

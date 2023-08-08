import MobFooter from './MobileFooter';
import { useMediaQuery } from 'react-responsive';
import TabletDesctopFoter from './TabletDesctopFoter';

const Footer = () => {
  const isTabletScreen = useMediaQuery({ minWidth: 768 });

  return <>{!isTabletScreen ? <MobFooter /> : <TabletDesctopFoter />}</>;
};

export default Footer;

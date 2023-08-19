import { useMediaQuery } from 'react-responsive';
import MobGalleryVideos from './MobGalleryVideo';
import TabDesktopGalleryVideo from './TabDesktopGalleryVideo';

const GalleryVideos = () => {
  const isTabletScreen = useMediaQuery({ minWidth: 767 });
  return (
    <>{!isTabletScreen ? <MobGalleryVideos /> : <TabDesktopGalleryVideo />}</>
  );
};

export default GalleryVideos;

import { useMediaQuery } from 'react-responsive';
import MobGalleryVideos from './MobGalleryVideo';
import TabDesctopGalleryVideo from './TabDesctopGalleryVideo';

const GalleryVideos = () => {
  const isTabletScreen = useMediaQuery({ minWidth: 767 });
  return (
    <>{!isTabletScreen ? <MobGalleryVideos /> : <TabDesctopGalleryVideo />}</>
  );
};

export default GalleryVideos;

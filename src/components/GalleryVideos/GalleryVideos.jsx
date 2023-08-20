import { useMediaQuery } from 'react-responsive';
import MobGalleryVideos from './MobGalleryVideo';
import TabDesktopGalleryVideo from './TabDesktopGalleryVideo';
import useFetch from '../../hooks/useFetch';


const GalleryVideos = () => {
  const { data } = useFetch('galleryVideo');
  const isTabletScreen = useMediaQuery({ minWidth: 767 });
  return (
    <>{!isTabletScreen ? <MobGalleryVideos galleryVideoData={data}  /> : <TabDesktopGalleryVideo galleryVideoData={data}  />}</>
  );
};

export default GalleryVideos;

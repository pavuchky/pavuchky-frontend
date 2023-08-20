import { useMediaQuery } from 'react-responsive';
import useFetch from '../../hooks/useFetch';
import MobGalleryVideos from './MobGalleryVideo';
import TabDesktopGalleryVideo from './TabDesktopGalleryVideo';

const GalleryVideos = () => {
  const { data } = useFetch('galleryVideo');

  const isTabletScreen = useMediaQuery({ minWidth: 767 });

  return (
    <>
      {!isTabletScreen ? (
        <MobGalleryVideos data={data} />
      ) : (
        <TabDesktopGalleryVideo data={data} />
      )}
    </>
  );
};

export default GalleryVideos;

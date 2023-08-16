import { useMediaQuery } from 'react-responsive';
import MobGalleryPhotos from './MobGalleryPhotos';
import GalleryTabPhotos from './GalleryPhotoTablet';

const GalleryPhotos = () => {
  const isTabletScreen = useMediaQuery({ minWidth: 767 });

  return <>{!isTabletScreen ? <MobGalleryPhotos /> : <GalleryTabPhotos />}</>;

};

export default GalleryPhotos;

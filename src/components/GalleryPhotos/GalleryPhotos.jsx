import { useMediaQuery } from 'react-responsive';
import useFetch from '../../hooks/useFetch';
import MobGalleryPhotos from './MobGalleryPhotos';
import GalleryTabPhotos from './GalleryPhotoTablet';

const GalleryPhotos = () => {
  const { data } = useFetch('galleryPhoto');

  const isTabletScreen = useMediaQuery({ minWidth: 767 });

  return (
    <>
      {!isTabletScreen ? (
        <MobGalleryPhotos data={data} />
      ) : (
        <GalleryTabPhotos data={data} />
      )}
    </>
  );
};

export default GalleryPhotos;

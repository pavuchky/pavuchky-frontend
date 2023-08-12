import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { PathDisplayer } from 'components/PathDisplayer/PathDisplayer';

const GalleryPage = () => {
  const location = useLocation();
  const { t } = useTranslation();

  const galleryType =
    location?.pathname === '/gallery/photos'
      ? t('pages.photos')
      : t('pages.videos');

  return (
    <>
      <PathDisplayer
        current={{
          path: location?.pathname,
          name: t('nav.gallery'),
          galleryType,
        }}
        isGallery
      />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default GalleryPage;

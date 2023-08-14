import { Suspense } from 'react';

import {
  GalleryTitle,
  GallerySection,
  GalleryTabs,
  GlleryTabLinks,
} from './GalleryPage.styled';

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
      <GallerySection>
        <GalleryTitle>{t('nav.gallery')}</GalleryTitle>
        <GalleryTabs>
          <GlleryTabLinks to="/gallery/photos">{t('pages.photos')}</GlleryTabLinks>
          <GlleryTabLinks to="/gallery/videos">{t('pages.videos')}</GlleryTabLinks>
        </GalleryTabs>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </GallerySection>
    </>
  );
};

export default GalleryPage;

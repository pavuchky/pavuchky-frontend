import { Suspense } from 'react';

import { Outlet } from 'react-router-dom';
import { GalleryTitle, GallerySection, GalleryTabs, GlleryTabLinks } from './GalleryPage.styled';



const GalleryPage = () => {
  return (
    <GallerySection>
      <GalleryTitle>Галерея</GalleryTitle>
      <GalleryTabs>
        <GlleryTabLinks to="/gallery/photos">Фото</GlleryTabLinks>
        <GlleryTabLinks to="/gallery/videos">Відео</GlleryTabLinks>
      </GalleryTabs>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </GallerySection>
  );
};

export default GalleryPage;

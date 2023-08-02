import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const GalleryPage = () => {
  return (
    <Suspense fallback={null}>
      <Outlet />
    </Suspense>
  );
};

export default GalleryPage;

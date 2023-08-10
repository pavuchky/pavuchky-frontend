import { Suspense } from 'react';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const GalleryPage = () => {
  return (
    <>
      <h3>Галерея</h3>
      <div>
        <NavLink to={"/photos"}>Фото</NavLink>
       <NavLink to={"/videos"}>Відео</NavLink>
       
      </div>
     
    <Suspense fallback={null}>
      <Outlet />
      </Suspense>
    </>
  );
};

export default GalleryPage;

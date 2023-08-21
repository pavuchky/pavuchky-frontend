import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import HomePage from 'pages/HomePage/HomePage';
import { GratitudePage } from 'pages/GratitudePage/GratitudePage';

const AboutPage = lazy(() => import('pages/AboutPage/AboutPage'));
const OrderPage = lazy(() => import('pages/OrderPage/OrderPage'));
const PartnersPage = lazy(() => import('pages/PartnersPage/PartnersPage'));
const GalleryPage = lazy(() => import('pages/GalleryPage/GalleryPage'));
const GalleryPhotos = lazy(() =>
  import('components/GalleryPhotos/GalleryPhotos')
);
const GalleryVideos = lazy(() =>
  import('components/GalleryVideos/GalleryVideos')
);
const ReportingPage = lazy(() => import('pages/ReportingPage/ReportingPage'));
const ReviewsPage = lazy(() => import('pages/ReviewsPage/ReviewsPage'));
const ReviewPage = lazy(() => import('pages/ReviewPage/ReviewPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="order" element={<OrderPage />} />
        <Route path="partners" element={<PartnersPage />} />
        <Route path="gallery" element={<GalleryPage />}>
          <Route path="photos" element={<GalleryPhotos />} />
          <Route path="videos" element={<GalleryVideos />} />
        </Route>
        <Route path="reporting" element={<ReportingPage />} />
        <Route path="reviews" element={<ReviewsPage />} />
        <Route path="review" element={<ReviewPage />} />
        <Route path="gratitude" element={<GratitudePage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { StyledContainer } from './SharedLayout.styled';
import { Navbar } from 'components/Navbar/Navbar';
import Footer from 'components/Footer/Footer';
import { Loader } from 'components/Loader/Loader';
import useFetch from 'hooks/useFetch';

export const SharedLayout = () => {
  const { isLoading } = useFetch('galleryPhoto');

  return (
    <>
      {isLoading ? (
        <Loader variant="absolute" />
      ) : (
        <>
          <Navbar />
          <main>
            <StyledContainer>
              <Suspense fallback={<Loader />}>
                <Outlet />
              </Suspense>
            </StyledContainer>
          </main>
          <Footer />
        </>
      )}
    </>
  );
};

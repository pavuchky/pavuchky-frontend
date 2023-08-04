import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { StyledContainer } from './SharedLayout.styled';
import { Navbar } from 'components/Navbar/Navbar';

export const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <StyledContainer>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </StyledContainer>
      </main>
    </>
  );
};

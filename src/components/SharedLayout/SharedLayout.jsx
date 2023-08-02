import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { StyledContainer } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <main>
      <StyledContainer>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </StyledContainer>
    </main>
  );
};

import styled, { css } from 'styled-components';

export const LoaderWrapper = styled.div`
  padding: ${({ theme }) => theme.spacing(25)};

  ${({ variant }) =>
    variant === 'absolute' &&
    css`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `}
`;

export const StyledLoader = styled.div`
  width: 70px;
  height: 70px;
  margin: 0 auto;
  display: grid;
  animation: spinner-plncf9 4s infinite;

  ::before,
  ::after {
    content: '';
    grid-area: 1/1;
    border: 15px solid;
    border-radius: 50%;
    border-color: #0069b5 #0069b5 #0000 #0000;
    mix-blend-mode: saturation;
    animation: spinner-plncf9 1s infinite linear;
  }

  ::after {
    border-color: #0000 #0000 #ffed00 #ffed00;
    animation-direction: reverse;
  }

  @keyframes spinner-plncf9 {
    100% {
      transform: rotate(1turn);
    }
  }

  @media only screen and (min-width: 768px) {
    width: 120px;
    height: 120px;
  }

  @media only screen and (min-width: 1440px) {
    width: 170px;
    height: 170px;
  }
`;

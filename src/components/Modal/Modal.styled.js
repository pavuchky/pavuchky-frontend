import styled, { css } from 'styled-components';

export const ModalBackdrop = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
  padding: ${({ theme }) => theme.spacing(3)};

  background-color: ${({ theme }) => theme.colors.backdrop};
  backdrop-filter: blur(2px);
`;

export const ModalWindow = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  padding-top: ${({ theme }) => theme.spacing(8)};
  padding-bottom: ${({ theme }) => theme.spacing(8)};
  padding-left: ${({ theme }) => theme.spacing(17)};
  padding-right: ${({ theme }) => theme.spacing(17)};

  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radii.s};

  ${({ variant }) =>
    variant === 'menu' &&
    css`
      position: absolute;
      top: 85px;
      right: 8px;

      padding-top: ${({ theme }) => theme.spacing(8)};
      padding-bottom: ${({ theme }) => theme.spacing(8)};
      padding-left: ${({ theme }) => theme.spacing(8.5)};
      padding-right: ${({ theme }) => theme.spacing(8.5)};

      box-shadow: rgba(25, 0, 0, 0.09) -4px 8px 19px,
        rgba(22, 0, 0, 0.1) -18px 31px 35px,
        rgba(12, 0, 0, 0.13) -28px 50px 48px;

      border-radius: 16px;

      @media only screen and (min-width: 768px) {
        top: 124px;
        right: 24px;

        padding-top: ${({ theme }) => theme.spacing(10)};
        padding-bottom: ${({ theme }) => theme.spacing(10)};
        padding-left: ${({ theme }) => theme.spacing(7)};
        padding-right: ${({ theme }) => theme.spacing(7)};

        border-radius: ${({ theme }) => theme.radii.m};
      }
    `}
`;

export const CloseButton = styled.button`
  position: absolute;
  top: -35px;
  right: -30px;

  ${({ variant }) =>
    variant === 'menu' &&
    css`
      right: 8px;
    `}

  @media only screen and (max-width: 374px) {
    right: 0;
  }
`;

export const CloseIcon = styled.svg`
  width: 30px;
  height: 30px;
`;

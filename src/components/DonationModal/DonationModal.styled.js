import styled from 'styled-components';

export const DonationBackdrop = styled.div`
  position: fixed;
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

export const DonationModalWindow = styled.div`
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
`;

export const CloseIcon = styled.svg`
  position: absolute;
  top: -30px;
  right: -30px;

  width: 30px;
  height: 30px;
`;

export const DonationQRCode = styled.svg`
  width: 174px;
  height: 174px;

  fill: ${({ theme }) => theme.colors.white};
`;

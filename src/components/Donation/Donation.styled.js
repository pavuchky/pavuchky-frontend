import styled from 'styled-components';

export const DonationSection = styled.section`
  padding: ${({ theme }) => theme.spacing(7)} ${({ theme }) => theme.spacing(4)};
  margin-bottom: ${({ theme }) => theme.spacing(9)};

  background: ${({ theme }) => theme.colors.gradientBackground};
  border-radius: 16px;

  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(6)};

    padding: ${({ theme }) => theme.spacing(8)};
    margin-bottom: ${({ theme }) => theme.spacing(11)};
    border-radius: ${({ theme }) => theme.radii.m};
  }

  @media only screen and (min-width: 1440px) {
    flex-direction: row;

    padding-top: ${({ theme }) => theme.spacing(11)};
    padding-bottom: ${({ theme }) => theme.spacing(11)};
    padding-left: ${({ theme }) => theme.spacing(16)};
    padding-right: ${({ theme }) => theme.spacing(16)};
    margin-bottom: ${({ theme }) => theme.spacing(16)};
  }
`;

export const DonationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)};

  @media only screen and (min-width: 1440px) {
    width: 100%;
    gap: 0;
  }
`;

export const DonationQRWrapper = styled.div`
  @media only screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(3.25)};
    max-width: 514px;
  }
`;

export const DonationTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.regular};

  @media only screen and (min-width: 768px) {
    font-family: ${({ theme }) => theme.fonts.headRegular};
    font-size: ${({ theme }) => theme.fontSizes.l};
    letter-spacing: -1.44px;
  }

  @media only screen and (min-width: 1440px) {
    margin-bottom: ${({ theme }) => theme.spacing(13.5)};

    font-size: ${({ theme }) => theme.fontSizes.xl};
    letter-spacing: -2.4px;
  }
`;

export const CardLabel = styled.label`
  position: relative;
`;

export const CardInput = styled.input`
  width: 100%;
  height: 41px;
  padding: 6.5px ${({ theme }) => theme.spacing(5)};

  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.regular};

  color: ${({ theme }) => theme.colors.primaryFont};
  background-color: transparent;

  border: 1px solid ${({ theme }) => theme.colors.blue};
  border-radius: 12px;

  @media only screen and (min-width: 768px) {
    height: 48px;
    padding-top: ${({ theme }) => theme.spacing(2)};
    padding-bottom: ${({ theme }) => theme.spacing(2)};
    padding-left: ${({ theme }) => theme.spacing(5)};
    padding-right: ${({ theme }) => theme.spacing(5)};

    font-family: ${({ theme }) => theme.fonts.light};
    font-size: ${({ theme }) => theme.fontSizes.s};
    font-weight: ${({ theme }) => theme.fontWeights.light};
  }

  @media only screen and (min-width: 1440px) {
    max-width: 522px;
    height: 76px;
    padding-top: ${({ theme }) => theme.spacing(6.5)};
    padding-bottom: ${({ theme }) => theme.spacing(6.5)};
    margin-bottom: ${({ theme }) => theme.spacing(11)};
  }
`;

export const CopyButton = styled.button`
  position: absolute;
  top: 6.5px;
  right: 20px;

  @media only screen and (min-width: 768px) {
    top: 8px;
  }

  @media only screen and (min-width: 1440px) {
    top: 20px;
    right: 240px;
  }
`;

export const CopyIcon = styled.svg`
  width: 28px;
  height: 28px;

  @media only screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }

  @media only screen and (min-width: 1440px) {
    width: 36px;
    height: 36px;
  }
`;

export const QRBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(4)};
  height: 41px;
  padding: 8.5px ${({ theme }) => theme.spacing(5)};

  background-color: transparent;

  border: 1px solid ${({ theme }) => theme.colors.blue};
  border-radius: 12px;
`;

export const QRText = styled.span`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
`;

export const QRCodeIcon = styled.svg`
  width: 24px;
  height: 24px;
`;

export const DonationDescr = styled.p`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: 14px;

  @media only screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.m};
  }

  @media only screen and (min-width: 1440px) {
    font-family: ${({ theme }) => theme.fonts.light};
    font-weight: ${({ theme }) => theme.fontWeights.light};
    font-size: 26px;
  }
`;

export const BankLink = styled.a`
  color: ${({ theme }) => theme.colors.blue};
`;

export const QRIcon = styled.svg`
  @media only screen and (min-width: 768px) {
    align-self: center;
    fill: white;
    width: 304px;
    height: 304px;
  }

  @media only screen and (min-width: 1440px) {
    width: 330px;
    height: 330px;
  }
`;

export const DonationText = styled.p`
  font-size: 26px;
`;

import styled from 'styled-components';

export const AboutUsSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)};

  padding-top: ${({ theme }) => theme.spacing(7)};
  padding-bottom: ${({ theme }) => theme.spacing(7)};
  padding-left: ${({ theme }) => theme.spacing(4)};
  padding-right: ${({ theme }) => theme.spacing(4)};
  margin-bottom: ${({ theme }) => theme.spacing(9)};

  background: ${({ theme }) => theme.colors.gradientBackground};
  border-radius: 16px;

  @media only screen and (min-width: 768px) {
    gap: 0;
    padding: ${({ theme }) => theme.spacing(8)};
    margin-bottom: ${({ theme }) => theme.spacing(11)};

    border-radius: ${({ theme }) => theme.radii.m};
  }

  @media only screen and (min-width: 1440px) {
    padding-top: ${({ theme }) => theme.spacing(11)};
    padding-bottom: ${({ theme }) => theme.spacing(11)};
    padding-left: ${({ theme }) => theme.spacing(16)};
    padding-right: ${({ theme }) => theme.spacing(16)};
    margin-bottom: ${({ theme }) => theme.spacing(16)};

    border-radius: 25px;
  }
`;

export const AboutUsTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing(6)};

  @media only screen and (min-width: 1440px) {
    margin-bottom: ${({ theme }) => theme.spacing(11)};
  }
`;

export const AboutUsPageTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes.m};

  @media only screen and (min-width: 768px) {
    font-family: ${({ theme }) => theme.fonts.headRegular};
    font-size: ${({ theme }) => theme.fontSizes.l};
    letter-spacing: -1.44px;
  }

  @media only screen and (min-width: 1440px) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    letter-spacing: -2.4px;
  }
`;

export const AboutUsPageText = styled.p`
  font-family: ${({ theme }) => theme.fonts.light};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  font-size: ${({ theme }) => theme.fontSizes.xs};

  white-space: break-spaces;

  @media only screen and (min-width: 768px) {
    font-family: ${({ theme }) => theme.fonts.regular};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
  }

  @media only screen and (min-width: 1440px) {
    font-family: ${({ theme }) => theme.fonts.light};
    font-weight: ${({ theme }) => theme.fontWeights.light};
    font-size: ${({ theme }) => theme.fontSizes.s};
  }
`;

export const AboutLogoIcon = styled.svg`
  width: 170px;
  height: 92px;
  align-self: center;

  @media only screen and (min-width: 768px) {
    margin-bottom: ${({ theme }) => theme.spacing(8)};
  }

  @media only screen and (min-width: 1440px) {
    margin-bottom: ${({ theme }) => theme.spacing(16)};
  }
`;

export const AboutMapImg = styled.img`
  width: 84px;
  height: 56px;

  @media only screen and (min-width: 1440px) {
    width: 155px;
    height: 104px;
  }
`;

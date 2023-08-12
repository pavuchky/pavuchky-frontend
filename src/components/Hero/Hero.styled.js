import styled from 'styled-components';

export const HeroContainer = styled.section`
  position: relative;
  padding: 28px 16px;
  margin: 5px 0 36px 0;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.gradientMain};

  @media only screen and (min-width: 768px) {
    padding: 32px;
    margin: 12px 0 44px 0;
    border-radius: 20px;
  }

  @media only screen and (min-width: 1440px) {
    padding: 140px 64px 44px 64px;
    margin: 0 0 64px 0;
    border-radius: 25px;
  }
`;

export const HeroText = styled.p`
  display: none;

  @media only screen and (min-width: 768px) {
    margin-left: 12px;
    display: block;
    font-size: 18px;
  }

  @media only screen and (min-width: 1440px) {
    font-size: 24px;
    font-family: ${({ theme }) => theme.fonts.regular};
  }
`;

export const HeroListTitle = styled.h1`
  ::after {
    content: '';
    max-width: 327px;
    height: 1px;
    margin: 12px 0;
    display: block;
    background-color: ${({ theme }) => theme.colors.secondaryFont};

    @media only screen and (min-width: 768px) {
      max-width: 656px;
      margin: 24px 0;
    }

    @media only screen and (min-width: 1440px) {
      max-width: 1280px;
      margin: 23px 0 119px 0;
    }
  }
`;

export const HeroTitle = styled.span`
  z-index: 1;
  position: relative;
  font-family: ${({ theme }) => theme.fonts.headLight};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  font-size: 32px;
  letter-spacing: -1.28px;

  @media only screen and (min-width: 768px) {
    font-size: 80px;
    letter-spacing: -3.2px;
  }

  @media only screen and (min-width: 1440px) {
    font-size: 100px;
    letter-spacing: -3.2px;
  }
`;

export const HeroSubTitle = styled.span`
  margin-top: 8px;
  display: block;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.headRegular};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes.m};
  letter-spacing: -0.96px;

  @media only screen and (min-width: 768px) {
    margin-top: 0;
    font-size: 50px;
    letter-spacing: -2px;
  }

  @media only screen and (min-width: 1440px) {
    padding-left: 217px;
    font-size: 60px;
    text-align: start;
    letter-spacing: -2.4px;
  }
`;

export const IconTank = styled.img`
  display: none;

  @media only screen and (min-width: 1440px) {
    display: block;
    position: absolute;
    top: 140px;
    left: 663px;
    width: 584px;
    height: 247px;
  }
`;

export const HeroBtnList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media only screen and (min-width: 1440px) {
    flex-direction: row-reverse;
    justify-content: flex-end;
    gap: 64px;
  }
`;

export const HeroItem = styled.li`
  min-width: 100%;
  border-radius: 12px;
  overflow: hidden;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.fontSizes.xs};

  @media only screen and (min-width: 768px) {
    border-radius: 16px;
    font-size: ${({ theme }) => theme.fontSizes.m};
  }

  @media only screen and (min-width: 1440px) {
    min-width: 519px;
    border-radius: 24px;
  }
`;

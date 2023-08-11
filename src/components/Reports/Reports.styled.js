import styled from 'styled-components';

export const ReportsSection = styled.section`
  padding: 28px 24px 24px;
  margin-bottom: 36px;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.gradientBackground};
  @media only screen and (min-width: 768px) {
    padding: 32px;
  }
  @media only screen and (min-width: 1440px) {
    padding: 44px 64px;
    margin-bottom: 64px;
  }
`;

export const ReportTextWrapper = styled.div`
  margin-bottom: 28px;
  text-align: left;
  @media only screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
  }
  @media only screen and (min-width: 1440px) {
    margin-bottom: 44px;
  }
`;

export const ReportTitle = styled.h3`
  display: inline-block;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.colors.secondaryFont};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 24px;
  @media only screen and (min-width: 768px) {
    color: ${({ theme }) => theme.colors.primaryFont};
    font-family: ${({ theme }) => theme.fonts.headRegular};
    font-size: 36px;
    font-weight: 400;
    letter-spacing: -1.44px;
  }
  @media only screen and (min-width: 1440px) {
    font-size: 60px;
    font-weight: 400;
    letter-spacing: -2.4px;
  }
`;

export const ReportText = styled.p`
  color: ${({ theme }) => theme.colors.secondaryFont};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 14px;
  font-weight: 400;
  @media only screen and (min-width: 768px) {
    display: block;
    width: 259px;
    font-family: ${({ theme }) => theme.fonts.light};
    font-weight: 300;
  }
  @media only screen and (min-width: 1440px) {
    width: 514px;
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 20px;
    font-weight: 400;
  }
`;

export const ReportsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media only screen and (min-width: 768px) {
    gap: 0px;
  }
`;

export const ReportsListItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 15.5px;
  padding-bottom: 24px;
  color: ${({ theme }) => theme.colors.primaryFont};
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondaryFontFont};

  &:last-child {
    border-bottom: none;
    padding-bottom: 0px;
  }

  @media only screen and (min-width: 768px) {
    height: 46px;
    flex-direction: row;
    gap: 0px;
    padding-bottom: 0px;
    align-items: center;
    justify-content: space-between;
    &:last-child {
      border-bottom: 1px solid ${({ theme }) => theme.colors.secondaryFontFont};
      padding-bottom: 0px;
    }
  }

  @media only screen and (min-width: 1440px) {
    gap: 44px;
    height: 79px;
    &:first-child {
      border-top: 1px solid ${({ theme }) => theme.colors.secondaryFontFont};
    }
  }
`;

export const ReportsListItemTitle = styled.h4`
  color: ${({ theme }) => theme.colors.primaryFont};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 16px;
  font-weight: 400;
  @media only screen and (min-width: 768px) {
    &:first-child {
      width: 30%;
    }

    font-size: 18px;
    font-weight: 400;
  }

  @media only screen and (min-width: 1440px) {
    &:first-child {
      width: 55%;
    }
    font-family: ${({ theme }) => theme.fonts.light};
    font-size: 26px;
    font-weight: 300;
  }
`;

export const ReportsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15.5px;
  @media only screen and (min-width: 768px) {
    gap: 16px;
  }
`;

export const ReportsButtonWrapper = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;

  &:hover {
    stroke: ${({ theme }) => theme.colors.yellow};
    color: ${({ theme }) => theme.colors.yellow};
  }
`;

export const ReportName = styled.p`
  display: inline-block;
  width: 167px;
  font-family: ${({ theme }) => theme.fonts.light};
  font-size: 14px;
  font-weight: 300;
  @media only screen and (min-width: 768px) {
    width: auto;

    color: ${({ theme }) => theme.colors.primaryFont};
    font-size: 18px;
    font-weight: 300;
  }
  @media only screen and (min-width: 1440px) {
    &:first-child {
      text-align: right;
    }

    color: ${({ theme }) => theme.colors.secondaryFont};
    font-size: 20px;
    font-weight: 300;
  }
`;

export const ReportIconArrow = styled.svg`
  display: inline-block;
  width: 24px;
  height: 24px;
`;

import styled from 'styled-components';

export const ReportsSection = styled.section`
  padding: 28px 16px 24px;
  margin-bottom: 36px;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.gradientBackground};
  @media only screen and (min-width: 768px) {
    padding: 32px;
    margin-bottom: 44px;
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
  color: ${({ theme }) => theme.colors.primaryFont};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 24px;
  font-weight: 400;
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
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondaryFont};

  &:last-child {
    border-bottom: none;
    padding-bottom: 0px;
  }

  @media only screen and (min-width: 768px) {
    padding: 12px 0;
    flex-direction: row;
    gap: 0px;
    align-items: center;
    justify-content: space-between;

    &:first-child {
      border-top: 1px solid ${({ theme }) => theme.colors.secondaryFont};
    }
    &:last-child {
      border-bottom: 1px solid ${({ theme }) => theme.colors.secondaryFont};
      padding: 12px 0;
    }
  }

  @media only screen and (min-width: 1440px) {
    gap: 44px;
    padding: 24px 0;
    &:first-child {
      border-top: 1px solid ${({ theme }) => theme.colors.secondaryFont};
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
      width: 27%;
    }

    font-size: 18px;
    font-weight: 400;
  }

  @media only screen and (min-width: 1440px) {
    &:first-child {
      width: 50%;
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
  transition: color 0.3s ease;
  transition: stroke 0.3s ease;

  &:hover > p {
    color: ${({ theme }) => theme.colors.yellow};
    text-shadow: -0 -1px 0 #7c7575, 0 -1px 0 #7c7575, -0 1px 0 #7c7575,
      0 1px 0 #7c7575, -1px -0 0 #7c7575, 1px -0 0 #7c7575, -1px 0 0 #7c7575,
      1px 0 0 #7c7575, -1px -1px 0 #7c7575, 1px -1px 0 #7c7575,
      -1px 1px 0 #7c7575, 1px 1px 0 #7c7575, -1px -1px 0 #7c7575,
      1px -1px 0 #7c7575, -1px 1px 0 #7c7575, 1px 1px 0 #7c7575;
  }

  &:hover > svg {
    stroke: ${({ theme }) => theme.colors.yellow};
    color: ${({ theme }) => theme.colors.yellow};
    stroke: #ffed00;
    color: #ffed00;
  }
`;

export const ReportName = styled.p`
  display: inline-block;
  width: 167px;
  font-family: ${({ theme }) => theme.fonts.light};
  font-size: 14px;
  font-weight: 300;

  transition: color 0.3s ease;
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

  &:hover {
    color: ${({ theme }) => theme.colors.yellow};
  }
`;

export const ReportIconArrow = styled.svg`
  display: inline-block;
  width: 24px;
  height: 24px;
  stroke: ${({ theme }) => theme.colors.blue};
  transition: stroke 0.3s ease;

  &:hover {
    stroke: ${({ theme }) => theme.colors.yellow};
  }
`;

export const LoadMoreWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
`;

export const LoadIconArrow = styled.svg`
  display: inline-block;
  width: 50px;
  height: 50px;
  transform: rotate(90deg);
  stroke: ${({ theme }) => theme.colors.blue};
  transition: stroke 0.3s ease;

  &:hover {
    stroke: ${({ theme }) => theme.colors.yellow};
  }

  @media only screen and (min-width: 768px) {
    width: 65px;
    height: 65px;
  }
`;

export const CollapseIconArrow = styled.svg`
  display: inline-block;
  width: 65px;
  height: 65px;
  margin-left: 15px;
  transform: rotate(-90deg);
  stroke: ${({ theme }) => theme.colors.blue};
  transition: stroke 0.3s ease;

  &:hover {
    stroke: ${({ theme }) => theme.colors.yellow};
  }
`;

import styled from 'styled-components';

export const StatisticsSection = styled.section`
  padding-top: ${({ theme }) => theme.spacing(7)};
  padding-bottom: ${({ theme }) => theme.spacing(7)};
  padding-left: ${({ theme }) => theme.spacing(4)};
  padding-right: ${({ theme }) => theme.spacing(4)};

  background: ${({ theme }) => theme.colors.gradientReversed};
  border-radius: 16px;

  @media only screen and (min-width: 768px) {
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

    border-radius: ${({ theme }) => theme.radii.xl};
  }
`;

export const AchievementsTitle = styled.h3`
  margin-bottom: ${({ theme }) => theme.spacing(6)};

  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.regular};

  @media only screen and (min-width: 768px) {
    font-family: ${({ theme }) => theme.fonts.headRegular};
    font-size: ${({ theme }) => theme.fontSizes.l};
    letter-spacing: -1.44px;
  }
`;

export const AchievementsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  min-height: 286px;

  text-align: center;

  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 8px;

  @media only screen and (min-width: 768px) {
    flex-direction: column;
    height: 300px;

    border-radius: ${({ theme }) => theme.radii.s};
  }
`;

export const AchievementsListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 50%;
  min-height: 96px;

  padding: ${({ theme }) => theme.spacing(3.5)};

  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};

  color: ${({ theme }) => theme.colors.secondaryFont};

  &:nth-child(2n) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(2)};
    text-transform: lowercase;

    border-left: 1px solid ${({ theme }) => theme.colors.black};
    border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  }

  &:nth-child(2n + 1) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  }

  &:nth-child(5) {
    border-bottom: none;
  }

  &:nth-child(6) {
    border-bottom: none;
  }

  @media only screen and (max-width: 364px) {
    padding-left: ${({ theme }) => theme.spacing(2.5)};
    padding-right: ${({ theme }) => theme.spacing(2.5)};
  }

  @media only screen and (min-width: 768px) {
    width: calc(100% / 3);
    padding: ${({ theme }) => theme.spacing(5)};

    font-size: ${({ theme }) => theme.fontSizes.xs};

    &:nth-child(2n) {
      border: none;
      border-right: 1px solid ${({ theme }) => theme.colors.black};
    }

    &:nth-child(2n + 1) {
      border-right: 1px solid ${({ theme }) => theme.colors.black};
      border-bottom: 1px solid ${({ theme }) => theme.colors.black};
    }

    &:nth-child(5) {
      border-right: none;
    }

    &:nth-child(6) {
      padding-left: ${({ theme }) => theme.spacing(4)};
      padding-right: ${({ theme }) => theme.spacing(4)};

      border-right: none;
    }
  }
`;

export const AchievementsNumber = styled.span`
  font-size: 18px;

  color: ${({ theme }) => theme.colors.primaryFont};

  @media only screen and (min-width: 768px) {
    font-family: ${({ theme }) => theme.fonts.light};
    font-size: ${({ theme }) => theme.fontSizes.s};
    font-weight: ${({ theme }) => theme.fontWeights.light};
  }
`;

import styled from 'styled-components';

export const AchievementsTitle = styled.h3`
  margin-bottom: ${({ theme }) => theme.spacing(6)};

  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
`;

export const AchievementsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const AchievementsListItem = styled.li`
  flex-basis: 50%;

  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};

  color: ${({ theme }) => theme.colors.secondaryFont};
`;

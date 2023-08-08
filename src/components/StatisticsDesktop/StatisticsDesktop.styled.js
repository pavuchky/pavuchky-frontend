import styled from 'styled-components';

export const AdvantagesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing(11)};
`;

export const StatisticsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: ${({ theme }) => theme.spacing(18.5)};
  margin-bottom: ${({ theme }) => theme.spacing(11)};

  border-top: 1px solid ${({ theme }) => theme.colors.secondaryFont};
`;

export const StatisticsTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.headRegular};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  letter-spacing: -2.4px;
`;

export const StatisticsDescr = styled.p`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: ${({ theme }) => theme.lineHeights.secondary};
  color: ${({ theme }) => theme.colors.secondaryFont};
`;

export const AdvantagesList = styled.ul`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(15.5)};

  padding-left: ${({ theme }) => theme.spacing(28)};
  padding-right: ${({ theme }) => theme.spacing(28)};
  margin-bottom: ${({ theme }) => theme.spacing(18.5)};
`;

export const StatisticsList = styled.ul`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(40.25)};
`;

export const AdvantagesListItem = styled.li`
  flex-basis: calc((100% - 124px) / 3);

  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.s};
  color: ${({ theme }) => theme.colors.secondaryFont};
`;

export const StatisticsListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};

  font-size: 26px;
  color: ${({ theme }) => theme.colors.secondaryFont};
`;

export const StatisticsNumber = styled.span`
  font-family: ${({ theme }) => theme.fonts.headRegular};
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.primaryFont};
`;

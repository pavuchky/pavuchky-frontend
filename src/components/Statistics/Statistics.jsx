import { useMediaQuery } from 'react-responsive';
import { StatisticsSection } from './Statistics.styled';
import { StatisticsMobile } from 'components/StatisticsMobile/StatisticsMobile';

export const Statistics = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <StatisticsSection>{isMobile && <StatisticsMobile />}</StatisticsSection>
  );
};

import { useMediaQuery } from 'react-responsive';
import useFetch from 'hooks/useFetch';
import {
  AchievementsList,
  AchievementsListItem,
  AchievementsNumber,
  AchievementsTitle,
  StatisticsSection,
} from './Statistics.styled';
import { StatisticsDesktop } from 'components/StatisticsDesktop/StatisticsDesktop';
import { useTranslation } from 'react-i18next';

export const Statistics = () => {
  const { data } = useFetch('statistic');
  const { t } = useTranslation();
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });

  return (
    <StatisticsSection>
      {isDesktop ? (
        <StatisticsDesktop />
      ) : (
        <>
          <AchievementsTitle>{t('statistics.achievements')}</AchievementsTitle>
          <AchievementsList>
            <AchievementsListItem>
              {t('statistics.qualityMaterials')}
            </AchievementsListItem>
            <AchievementsListItem>
              <AchievementsNumber>{data?.days}&#43;</AchievementsNumber>
              {t('statistics.days')}
            </AchievementsListItem>
            <AchievementsListItem>
              {t('statistics.selection')}
            </AchievementsListItem>
            <AchievementsListItem>
              <AchievementsNumber>
                {data?.gridFootage} {t('statistics.squared')} &#43;
              </AchievementsNumber>
              {t('statistics.woven')}
            </AchievementsListItem>
            <AchievementsListItem>
              {t('statistics.technologies')}
            </AchievementsListItem>
            <AchievementsListItem>
              <AchievementsNumber>{data?.members}&#43;</AchievementsNumber>
              {t('statistics.participants')}
            </AchievementsListItem>
          </AchievementsList>
        </>
      )}
    </StatisticsSection>
  );
};

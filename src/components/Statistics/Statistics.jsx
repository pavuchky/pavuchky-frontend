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

export const Statistics = () => {
  const { data } = useFetch('statistic');

  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });

  return (
    <StatisticsSection>
      {isDesktop ? (
        <StatisticsDesktop />
      ) : (
        <>
          <AchievementsTitle>Наші досягнення</AchievementsTitle>
          <AchievementsList>
            <AchievementsListItem>
              Висока якість матеріалів
            </AchievementsListItem>
            <AchievementsListItem>
              <AchievementsNumber>{data?.days}&#43;</AchievementsNumber> днів у
              справі
            </AchievementsListItem>
            <AchievementsListItem>
              Підбір матеріалів та кольорової гами
            </AchievementsListItem>
            <AchievementsListItem>
              <AchievementsNumber>
                {data?.gridFootage} кв.м &#43;
              </AchievementsNumber>
              сітки сплетено
            </AchievementsListItem>
            <AchievementsListItem>
              Вдосконалення технологій
            </AchievementsListItem>
            <AchievementsListItem>
              <AchievementsNumber>{data?.members}&#43;</AchievementsNumber>{' '}
              учасників ініціативи
            </AchievementsListItem>
          </AchievementsList>
        </>
      )}
    </StatisticsSection>
  );
};

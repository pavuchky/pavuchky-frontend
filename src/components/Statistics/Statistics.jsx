import { useMediaQuery } from 'react-responsive';
import {
  AchievementsList,
  AchievementsListItem,
  AchievementsNumber,
  AchievementsTitle,
  StatisticsSection,
} from './Statistics.styled';
import { StatisticsDesktop } from 'components/StatisticsDesktop/StatisticsDesktop';

export const Statistics = () => {
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
              <AchievementsNumber>150&#43;</AchievementsNumber> днів у справі
            </AchievementsListItem>
            <AchievementsListItem>
              Підбір матеріалів та кольорової гами
            </AchievementsListItem>
            <AchievementsListItem>
              <AchievementsNumber>3500 кв.м &#43;</AchievementsNumber> сітки
              сплетено
            </AchievementsListItem>
            <AchievementsListItem>Вдоконалення технологій</AchievementsListItem>
            <AchievementsListItem>
              <AchievementsNumber>50&#43;</AchievementsNumber> учасників
              ініціативи
            </AchievementsListItem>
          </AchievementsList>
        </>
      )}
    </StatisticsSection>
  );
};

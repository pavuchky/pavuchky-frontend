import {
  AchievementsList,
  AchievementsListItem,
  AchievementsTitle,
} from './StatisticsMobile.styled';

export const StatisticsMobile = () => {
  return (
    <>
      <AchievementsTitle>Наші досягнення</AchievementsTitle>
      <AchievementsList>
        <AchievementsListItem>Висока якість матеріалів</AchievementsListItem>
        <AchievementsListItem>150&#43; днів у справі</AchievementsListItem>
        <AchievementsListItem>
          Підбір матеріалів та кольорової гами
        </AchievementsListItem>
        <AchievementsListItem>
          3500&#43; кв.м сітки сплетено
        </AchievementsListItem>
        <AchievementsListItem>Вдоконалення технологій</AchievementsListItem>
        <AchievementsListItem>
          50&#43; учасників ініціативи
        </AchievementsListItem>
      </AchievementsList>
    </>
  );
};

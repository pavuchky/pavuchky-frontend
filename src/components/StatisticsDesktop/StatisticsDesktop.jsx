import {
  AdvantagesList,
  AdvantagesListItem,
  AdvantagesWrapper,
  StatisticsDescr,
  StatisticsList,
  StatisticsListItem,
  StatisticsNumber,
  StatisticsTitle,
  StatisticsWrapper,
} from './StatisticsDesktop.styled';

export const StatisticsDesktop = () => {
  return (
    <>
      <AdvantagesWrapper>
        <StatisticsTitle>Переваги</StatisticsTitle>
        <StatisticsDescr>Чому саме ми?</StatisticsDescr>
      </AdvantagesWrapper>
      <AdvantagesList>
        <AdvantagesListItem>Висока якість матеріалів</AdvantagesListItem>
        <AdvantagesListItem>
          Індивідуальний підбір матеріалів та кольорової гами
        </AdvantagesListItem>
        <AdvantagesListItem>
          Врахування зворотнього зв&#39;язку та вдосконалення технології
          плетіння
        </AdvantagesListItem>
      </AdvantagesList>
      <StatisticsWrapper>
        <StatisticsTitle>Ми в цифрах</StatisticsTitle>
        <StatisticsDescr>Наші досягнення</StatisticsDescr>
      </StatisticsWrapper>
      <StatisticsList>
        <StatisticsListItem>
          <StatisticsNumber>150&#43;</StatisticsNumber> Днів у справі
        </StatisticsListItem>
        <StatisticsListItem>
          <StatisticsNumber>3500м&#178;&#43;</StatisticsNumber> Сітки сплетено
        </StatisticsListItem>
        <StatisticsListItem>
          <StatisticsNumber>50&#43;</StatisticsNumber> Учасників ініціативи
        </StatisticsListItem>
      </StatisticsList>
    </>
  );
};

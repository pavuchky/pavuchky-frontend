import { useTranslation } from 'react-i18next';
import useFetch from 'hooks/useFetch';
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
  const { data } = useFetch('statistic');
  const { t } = useTranslation();

  return (
    <>
      <AdvantagesWrapper>
        <StatisticsTitle>{t('statistics.advantages')}</StatisticsTitle>
        <StatisticsDescr>{t('statistics.whyUs')}</StatisticsDescr>
      </AdvantagesWrapper>
      <AdvantagesList>
        <AdvantagesListItem>
          {t('statistics.qualityMaterials')}
        </AdvantagesListItem>
        <AdvantagesListItem>
          {t('statistics.individualSelection')}
        </AdvantagesListItem>
        <AdvantagesListItem>{t('statistics.feedback')}</AdvantagesListItem>
      </AdvantagesList>
      <StatisticsWrapper>
        <StatisticsTitle>{t('statistics.inFigures')}</StatisticsTitle>
        <StatisticsDescr>{t('statistics.achievements')}</StatisticsDescr>
      </StatisticsWrapper>
      <StatisticsList>
        <StatisticsListItem>
          <StatisticsNumber>{data?.days}&#43;</StatisticsNumber>
          {t('statistics.days')}
        </StatisticsListItem>
        <StatisticsListItem>
          <StatisticsNumber>
            {data?.gridFootage}
            {t('statistics.metres')}&#178;&#43;
          </StatisticsNumber>
          {t('statistics.woven')}
        </StatisticsListItem>
        <StatisticsListItem>
          <StatisticsNumber>{data?.members}&#43;</StatisticsNumber>{' '}
          {t('statistics.participants')}
        </StatisticsListItem>
      </StatisticsList>
    </>
  );
};

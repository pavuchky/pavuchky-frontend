import { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import useFetch from 'hooks/useFetch';
import { LanguageContext } from 'utils/LanguageContext';
import sprite from '../../assets/images/sprite.svg';
import {
  CollapseIconArrow,
  LoadIconArrow,
  LoadMoreWrapper,
  ReportIconArrow,
  ReportName,
  ReportText,
  ReportTextWrapper,
  ReportTitle,
  ReportsButtonWrapper,
  ReportsList,
  ReportsListItem,
  ReportsListItemTitle,
  ReportsSection,
  ReportsWrapper,
} from './Reports.styled';

const reportsArr = [
  { id: '1', month: 'Лютий 2023' },
  { id: '2', month: 'Січень 2023' },
  { id: '3', month: 'Грудень 2022' },
  { id: '4', month: 'Листопад 2022' },
  { id: '5', month: 'Жовтень 2022' },
  { id: '6', month: 'Вересень 2022' },
  { id: '7', month: 'Серпень 2022' },
  { id: '8', month: 'Липень 2022' },
  { id: '9', month: 'Червень 2022' },
  { id: '10', month: 'Травень 2022' },
  { id: '11', month: 'Квітень 2022' },
  { id: '12', month: 'Березень 2022' },
  { id: '13', month: 'Лютий 2022' },
  { id: '14', month: 'Січень 2022' },
  { id: '15', month: 'Грудень 2021' },
  { id: '16', month: 'Листопад 2021' },
  { id: '17', month: 'Жовтень 2021' },
  { id: '18', month: 'Вересень 2021' },
];

const Reports = () => {
  const rowsToShow = 6;
  const [nextNumber, setNextNumber] = useState(rowsToShow);

  const { lang } = useContext(LanguageContext);
  const { data } = useFetch('reporting');
  const { t } = useTranslation();

  const handleLoadMore = () => {
    setNextNumber(nextNumber + rowsToShow);
  };

  const handleCollapse = () => {
    setNextNumber(nextNumber - rowsToShow);
  };

  return (
    <>
      <ReportsSection>
        <ReportTextWrapper>
          <ReportTitle>{t('reporting.reports')}</ReportTitle>
          <ReportText>{t('reporting.trust')}</ReportText>
        </ReportTextWrapper>
        <ReportsList>
          {data?.reportingList?.slice(0, nextNumber).map(el => (
            <ReportsListItem key={el?.id}>
              <ReportsListItemTitle>
                {el?.reportingMonth[lang]}
              </ReportsListItemTitle>
              <ReportsWrapper>
                <ReportsButtonWrapper
                  href={el?.financialReport}
                  target="_blank"
                >
                  <ReportName>{t('reporting.finances')}</ReportName>
                  <ReportIconArrow>
                    <use href={`${sprite}#arrow-up-blue`}></use>
                  </ReportIconArrow>
                </ReportsButtonWrapper>
              </ReportsWrapper>
              <ReportsWrapper>
                <ReportsButtonWrapper href={el?.resultsReport} target="_blank">
                  <ReportName>{t('reporting.results')}</ReportName>
                  <ReportIconArrow>
                    <use href={`${sprite}#arrow-up-blue`}></use>
                  </ReportIconArrow>
                </ReportsButtonWrapper>
              </ReportsWrapper>
            </ReportsListItem>
          ))}

          {/* this line is only for testing purposes */}
          {reportsArr?.slice(0, nextNumber - 1).map(el => (
            <ReportsListItem key={el.id}>
              <ReportsListItemTitle>{el?.month}</ReportsListItemTitle>
              <ReportsWrapper>
                <ReportsButtonWrapper
                  href={data?.reportingList[0]?.financialReport}
                  target="_blank"
                >
                  <ReportName>Фінансовий звіт</ReportName>
                  <ReportIconArrow>
                    <use href={`${sprite}#arrow-up-blue`}></use>
                  </ReportIconArrow>
                </ReportsButtonWrapper>
              </ReportsWrapper>
              <ReportsWrapper>
                <ReportsButtonWrapper
                  href={data?.reportingList[0]?.resultsReport}
                  target="_blank"
                >
                  <ReportName>Звіт про результати</ReportName>
                  <ReportIconArrow>
                    <use href={`${sprite}#arrow-up-blue`}></use>
                  </ReportIconArrow>
                </ReportsButtonWrapper>
              </ReportsWrapper>
            </ReportsListItem>
          ))}
        </ReportsList>
        <LoadMoreWrapper>
          {(nextNumber < data?.reportingList.length ||
            nextNumber < reportsArr.length) && (
            <button type="button" onClick={handleLoadMore}>
              <LoadIconArrow>
                <use href={`${sprite}#arrow-up-blue`}></use>
              </LoadIconArrow>
            </button>
          )}
          {nextNumber > 6 ? (
            <button type="button" onClick={handleCollapse}>
              <CollapseIconArrow>
                <use href={`${sprite}#arrow-up-blue`}></use>
              </CollapseIconArrow>
            </button>
          ) : null}
        </LoadMoreWrapper>
      </ReportsSection>
    </>
  );
};

export default Reports;

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

const Reports = () => {
  const rowsToShow = 6;
  const userScreenHeight = window.innerHeight;

  const [nextNumber, setNextNumber] = useState(rowsToShow);

  const { lang } = useContext(LanguageContext);
  const { data } = useFetch('reporting');
  const { t } = useTranslation();

  const handleLoadMore = () => {
    setNextNumber(nextNumber + rowsToShow);
    window.scrollBy(0, userScreenHeight);
  };

  const handleCollapse = () => {
    setNextNumber(nextNumber - rowsToShow);
    window.scrollBy(0, -(userScreenHeight * 1.5));
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
        </ReportsList>
        <LoadMoreWrapper>
          {nextNumber < data?.reportingList.length && (
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

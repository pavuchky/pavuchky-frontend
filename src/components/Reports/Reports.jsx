import { useContext, useState } from 'react';
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
import PDFReader from './PDFReader/PDFReader';
import { LanguageContext } from 'utils/LanguageContext';
import useFetch from 'hooks/useFetch';
import { useTranslation } from 'react-i18next';

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

  // const [openPDF, setOpenPDF] = useState(false);
  // console.log(PDFReader);
  // console.log(openPDF);

  const { lang } = useContext(LanguageContext);
  const { data } = useFetch('reporting');
  const { t } = useTranslation();

  console.log('reporting', data);

  const handleLoadMore = () => {
    setNextNumber(nextNumber + rowsToShow);
  };

  const handleCollapse = () => {
    setNextNumber(nextNumber - rowsToShow);
  };

  // const handleOpenPDF = () => {
  //   setOpenPDF(true);
  // };

  return (
    <>
      <ReportsSection>
        <ReportTextWrapper>
          <ReportTitle>Звіти павучків</ReportTitle>
          <ReportText>
            Ви можете нам довіряти адже у нас спільна мета - допомогти нашим
            захисникам
          </ReportText>
        </ReportTextWrapper>
        <ReportsList>
          {reportsArr.slice(0, nextNumber).map(el => (
            <ReportsListItem key={el.id}>
              <ReportsListItemTitle>{el.month}</ReportsListItemTitle>
              <ReportsWrapper>
                <ReportsButtonWrapper>
                  <ReportName>Фінансовий звіт</ReportName>
                  <ReportIconArrow>
                    <use href={`${sprite}#arrow-up-blue`}></use>
                  </ReportIconArrow>
                </ReportsButtonWrapper>
              </ReportsWrapper>
              <ReportsWrapper>
                <ReportsButtonWrapper>
                  <ReportName>Звіт про результати</ReportName>
                  <ReportIconArrow>
                    <use href={`${sprite}#arrow-up-blue`}></use>
                  </ReportIconArrow>
                </ReportsButtonWrapper>
                {/* {openPDF && <PDFReader />} */}
              </ReportsWrapper>
            </ReportsListItem>
          ))}

          {/* <ReportsListItem>
            <ReportsListItemTitle>Лютий 2023</ReportsListItemTitle>
            <ReportsWrapper>
              <ReportsButtonWrapper href="..." target="_blank">
                <ReportName>Фінансовий звіт</ReportName>
                <ReportIconArrow>
                  <use href={`${sprite}#arrow-up-blue`}></use>
                </ReportIconArrow>
              </ReportsButtonWrapper>
            </ReportsWrapper>
            <ReportsWrapper>
              <ReportsButtonWrapper href="..." target="_blank">
                <ReportName>Звіт про результати</ReportName>
                <ReportIconArrow>
                  <use href={`${sprite}#arrow-up-blue`}></use>
                </ReportIconArrow>
              </ReportsButtonWrapper>
            </ReportsWrapper>
          </ReportsListItem>
          <ReportsListItem>
            <ReportsListItemTitle>Січень 2023</ReportsListItemTitle>
            <ReportsWrapper>
              <ReportsButtonWrapper href="..." target="_blank">
                <ReportName>Фінансовий звіт</ReportName>
                <ReportIconArrow>
                  <use href={`${sprite}#arrow-up-blue`}></use>
                </ReportIconArrow>
              </ReportsButtonWrapper>
            </ReportsWrapper>
            <ReportsWrapper>
              <ReportsButtonWrapper href="..." target="_blank">
                <ReportName>Звіт про результати</ReportName>
                <ReportIconArrow>
                  <use href={`${sprite}#arrow-up-blue`}></use>
                </ReportIconArrow>
              </ReportsButtonWrapper>
            </ReportsWrapper>
          </ReportsListItem>
          <ReportsListItem>
            <ReportsListItemTitle>Грудень 2022</ReportsListItemTitle>
            <ReportsWrapper>
              <ReportsButtonWrapper href="..." target="_blank">
                <ReportName>Фінансовий звіт</ReportName>
                <ReportIconArrow>
                  <use href={`${sprite}#arrow-up-blue`}></use>
                </ReportIconArrow>
              </ReportsButtonWrapper>
            </ReportsWrapper>
            <ReportsWrapper>
              <ReportsButtonWrapper href="..." target="_blank">
                <ReportName>Звіт про результати</ReportName>
                <ReportIconArrow>
                  <use href={`${sprite}#arrow-up-blue`}></use>
                </ReportIconArrow>
              </ReportsButtonWrapper>
            </ReportsWrapper>
          </ReportsListItem>
          <ReportsListItem>
            <ReportsListItemTitle>Листопад 2022</ReportsListItemTitle>
            <ReportsWrapper>
              <ReportsButtonWrapper href="..." target="_blank">
                <ReportName>Фінансовий звіт</ReportName>
                <ReportIconArrow>
                  <use href={`${sprite}#arrow-up-blue`}></use>
                </ReportIconArrow>
              </ReportsButtonWrapper>
            </ReportsWrapper>
            <ReportsWrapper>
              <ReportsButtonWrapper href="..." target="_blank">
                <ReportName>Звіт про результати</ReportName>
                <ReportIconArrow>
                  <use href={`${sprite}#arrow-up-blue`}></use>
                </ReportIconArrow>
              </ReportsButtonWrapper>
            </ReportsWrapper>
          </ReportsListItem>
          <ReportsListItem>
            <ReportsListItemTitle>Жовтень 2022</ReportsListItemTitle>
            <ReportsWrapper>
              <ReportsButtonWrapper href="..." target="_blank">
                <ReportName>Фінансовий звіт</ReportName>
                <ReportIconArrow>
                  <use href={`${sprite}#arrow-up-blue`}></use>
                </ReportIconArrow>
              </ReportsButtonWrapper>
            </ReportsWrapper>
            <ReportsWrapper>
              <ReportsButtonWrapper href="..." target="_blank">
                <ReportName>Звіт про результати</ReportName>
                <ReportIconArrow>
                  <use href={`${sprite}#arrow-up-blue`}></use>
                </ReportIconArrow>
              </ReportsButtonWrapper>
            </ReportsWrapper>
          </ReportsListItem> */}
        </ReportsList>
        <LoadMoreWrapper>
          {nextNumber < reportsArr.length && (
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

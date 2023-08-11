import sprite from '../../assets/images/sprite.svg';
import {
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
          <ReportsListItem>
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
          </ReportsListItem>
        </ReportsList>
      </ReportsSection>
    </>
  );
};

export default Reports;

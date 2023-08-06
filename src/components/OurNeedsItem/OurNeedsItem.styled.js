import styled from 'styled-components';

import { theme } from 'stylesheet/theme';
const { fontSizes, fontWeights, colors, borders, fonts, radii } = theme;

export const OurNeedsItemLi = styled.li`
  width: 100%;

  border: ${borders.normal};
  border-color: ${colors.blue};
  border-radius: 8px;
  background-color: ${colors.white};

  padding: 16px 12px;

  @media (min-width: 768px) {
    padding: 14px;
    min-height: 178px;
  }

  @media (min-width: 1440) {
    padding: 16px;
    padding-bottom: 46px;
    min-width: 409px;
    min-height: 332px;
    border-radius: ${radii.s};
  }
`;

export const NeedType = styled.p`
  padding: 4px;
  background-color: ${colors.lightGrey};
  border-radius: 4px;
`;

export const Location = styled.p`
  color: ${colors.grey};
  font-weight: ${fontWeights.light};

  @media (min-width: 768px) {
    font-weight: ${fontWeights.regular};
    line-height: 1.33;
    font-family: ${fonts.regular};
  }

  @media (min-width: 1440px) {
    font-size: 14px;
  }
`;

export const LocationAndNeedTypeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 12px;
  font-weight: ${fontWeights.light};
  margin-bottom: 12px;

  @media (min-width: 768px) {
    margin-bottom: 8px;
  }

  @media (min-width: 1440px) {
    margin-bottom: 20px;
  }
`;

export const NeedsItemTitel = styled.h4`
  color: ${colors.primaryFont};
  font-size: ${fontSizes.xs};
  font-family: ${fonts.regular};
  font-weight: ${fontWeights.regular};

  margin-bottom: 8px;

  @media (min-width: 768px) {
    font-size: 18px;
    margin-bottom: 12px;
  }

  @media (min-width: 1440px) {
    font-size: ${fontSizes.s};
    margin-bottom: 16px;
  }
`;

export const NeedsItemDeccription = styled.p`
  font-family: ${fonts.light};
  font-size: ${fontSizes.xs};
  font-weight: ${fontWeights.light};
  color: ${colors.secondaryFont};
  margin-bottom: 12px;
  white-space: pre-line;

  @media (min-width: 768px) {
    font-weight: ${fontWeights.regular};
  }

  @media (min-width: 1440px) {
    min-height: 114px;
    font-weight: ${fontWeights.light};
    font-size: ${fontSizes.s};
    margin-bottom: 0px;
  }
`;

export const NeedsItemContact = styled.p`
  font-family: ${fonts.regular};
  font-weight: ${fontWeights.regular};

  @media (min-width: 1440px) {
    font-size: ${fontSizes.s};
  }
`;

export const NeedsItemContactPerson = styled.p`
  color: ${colors.secondaryFont};

  @media (min-width: 1440px) {
    font-weight: ${fontWeights.regular};
    color: ${colors.grey};
    line-height: 1.9;
    font-family: ${fonts.regular};
  }
`;

export const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: ${fontSizes.xs};
  font-weight: ${fontWeights.light};

  @media (min-width: 1440px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 22px;
  }
`;

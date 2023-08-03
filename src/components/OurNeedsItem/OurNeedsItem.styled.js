import styled from 'styled-components';

import { theme } from 'stylesheet/theme';
const { fontSizes, fontWeights, colors, borders, fonts } = theme;

export const OurNeedsItemLi = styled.li`
  width: 100%;

  border: ${borders.normal};
  border-color: ${colors.blue};
  border-radius: 8px;
  background-color: ${colors.white};

  padding: 16px 12px;

  @media (min-width: 768px) {
    padding: 14px;
    min-width: 316px;
    height: 178px;
  }

  @media (min-width: 1280px) {
  }
`;

export const NeedType = styled.p`
  padding: 4px;
  background-color: ${colors.lightGrey};
  border-radius: 4px;
`;

export const Location = styled.p`
  color: ${colors.grey};
`;

export const LocationAndNeedTypeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 12px;
  font-weight: ${fontWeights.light};
  margin-bottom: 12px;
`;

export const NeedsItemTitel = styled.h4`
  color: ${colors.primaryFont};
  font-size: ${fontSizes.xs};
  font-family: ${fonts.regular};
  font-weight: ${fontWeights.regular};

  margin-bottom: 8px;

  @media (min-width: 768px) {
    font-size: 18px;
  }

  @media (min-width: 1280px) {
  }
`;

export const NeedsItemDeccription = styled.p`
  font-family: ${fonts.regular};
  font-size: ${fontSizes.xs};
  font-weight: ${fontWeights.light};
  color: ${colors.secondaryFont};
  margin-bottom: 12px;
  white-space: pre-line;

  @media (min-width: 768px) {
    font-weight: ${fontWeights.regular};
  }

  @media (min-width: 1280px) {
  }
`;

export const NeedsItemContact = styled.p`
  font-family: ${fonts.regular};
  font-weight: ${fontWeights.regular};
`;

export const NeedsItemContactPerson = styled.p`
  color: ${colors.secondaryFont};
`;

export const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: ${fontSizes.xs};
  font-weight: ${fontWeights.light};
`;

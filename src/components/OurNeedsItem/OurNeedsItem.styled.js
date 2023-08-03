import styled from 'styled-components';

import { theme } from 'stylesheet/theme';
const { fontSizes, fontWeights, colors, borders } = theme;

export const OurNeedsItemLi = styled.li`
  width: 100%;

  border: ${borders.normal};
  border-color: ${colors.blue};
  border-radius: 8px;
  background-color: ${colors.white};

  padding: 16px 12px;
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
  font-size: ${fontSizes.xs};
  font-weight: ${fontWeights.regular};
  font-weight: 700;
  margin-bottom: 8px;
`;

export const NeedsItemDeccription = styled.p`
  font-size: ${fontSizes.xs};
  font-weight: ${fontWeights.light};
  color: ${colors.secondaryFont};
  margin-bottom: 12px;
  white-space: pre-line;
`;

export const NeedsItemContact = styled.p`
  font-weight: ${fontWeights.regular};
  font-weight: 700;
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

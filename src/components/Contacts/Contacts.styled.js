import styled from 'styled-components';

import { theme } from '../../stylesheet/theme';
const { fontSizes, fontWeights, colors } = theme;

// export const OurNeedsItemLi = styled.li`
//   width: 100%;

//   border: ${borders.normal};
//   border-color: ${colors.blue};
//   border-radius: 8px;
//   background-color: ${colors.white};

//   padding: 16px 12px;`

export const ContactsContainer = styled.div`
  padding: 28px 16px;
  margin-top: 36px;
  margin-bottom: 36px;
  border-radius: 16px;
  background: ${colors.gradientBackground};
  @media only screen and (min-width: 767px) {
    margin-top: 44px;
    margin-bottom: 44px;
    max-width: 768px;
    padding: 0 24px;
  }
  @media only screen and (min-width: 1200px) {
    margin-top: 64px;
    margin-bottom: 64px;
    max-width: 1200px;
    padding: 0 16px;
  }
`;

export const ContactsTitle = styled.h3`
  font-size: ${fontSizes.m};
  font-weight: 600;
  margin-bottom: 24px;
`;
export const ContactsSubTitle = styled.p`
  font-size: 18px;
  font-weight: 600;
  padding-bottom: 8px;
  margin-bottom: 8px;
  border-bottom: 1px solid rgba(76, 76, 76, 1);
`;

export const ContactsFirstAdress = styled.p`
  font-size: ${fontSizes.xs};
  font-weight: ${fontWeights.light};
  margin-bottom: 4px;
  padding-bottom: 6px;
`;
export const ContactsFirstAdressList = styled.li`
  font-size: 14px;
  font-weight: ${fontWeights.light};
  list-style: disc;
  margin-left: 16px;
  margin-bottom: 8px;
`;
export const ContactsSecondAdress = styled.p`
  font-size: ${fontSizes.xs};
  font-weight: ${fontWeights.light};
  margin-bottom: 16px;
`;
export const ContactPerson = styled.p`
 font-size: ${fontSizes.xs};
font-weight: ${fontWeights.light};
 margin-bottom: 8px;
`;
export const ImgLocationContainer = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
`;
export const SocialMediaContainer = styled.div`
  display: flex;
`;
export const SocialMediaTitle = styled.p`
  font-size: ${fontSizes.xs};
  font-weight: ${fontWeights.light};

`;

export const SocialMediaLinks = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  margin-left: 16px;
  align-items: center;
`;
import styled from 'styled-components';

import { theme } from '../../stylesheet/theme';

const { fontSizes, fontWeights, colors, fonts } = theme;

export const ContactsContainer = styled.section`
  padding: 28px 16px;
  margin-top: 36px;
  margin-bottom: 36px;
  border-radius: 16px;
  background: ${colors.gradientBackground};

  @media (min-width: 768px) {
    margin-top: 44px;
    margin-bottom: 44px;
    padding: 32px 32px 58px 32px;
  }
  @media (min-width: 1280px) {
    margin: 64px auto;
    padding: 44px 64px;
  }
`;
export const ContactsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
  /* @media (min-width: 1280px) {
        display: flex;
    } */
`;
export const ContactsTitle = styled.h3`
  font-size: ${fontSizes.m};
  font-weight: ${fontWeights.regular};
  margin-bottom: 24px;
  line-height: normal;
  font-family: ${fonts.regular};
  font-style: normal;
  @media (min-width: 768px) {
    max-width: 768px;
    margin-bottom: 28px;
    font-family: ${fonts.headRegular};
    letter-spacing: -1.44px;
    font-size: ${fontSizes.l};
  }
  @media (min-width: 1280px) {
    font-size: ${fontSizes.xl};
    margin-bottom: 44px;
  }
`;
export const ContactsSubTitle = styled.p`
  font-size: 18px;
  font-weight: ${fontWeights.regular};
  font-family: ${fonts.regular};
  font-style: normal;
  padding-bottom: 8px;
  margin-bottom: 8px;
  border-bottom: 1px solid rgba(76, 76, 76, 1);
  width: 316px;

  @media (min-width: 768px) {
    margin-bottom: 0px;
  }
  @media (min-width: 1280px) {
    font-size: 26px;
    margin-bottom: 24px;
    padding-bottom: 10px;
   width: 477px;
  }
`;

export const ContactsFirstAdress = styled.p`
  font-size: ${fontSizes.xs};
  font-weight: ${fontWeights.light};
  margin-bottom: 4px;
  padding-bottom: 6px;
  line-height: normal;
  width: 316px;
  @media (min-width: 768px) {
    margin-top: 8px;
  }
  @media (min-width: 1280px) {
    margin-top: 0;
    font-size: ${fontSizes.s};

  }
`;
export const ContactsAdressUl = styled.ul`
  @media (min-width: 768px) {

  }
`;
export const ContactsFirstAdressList = styled.li`
  font-size: 14px;
  font-weight: ${fontWeights.light};
  list-style: disc;
  margin-left: 16px;
  margin-bottom: 8px;
  @media (min-width: 1280px) {
    margin-left: 40px;
    font-size: ${fontSizes.s};
  }
`;
export const ContactsSecondAdress = styled.p`
  font-size: ${fontSizes.xs};
  font-weight: ${fontWeights.light};
  margin-bottom: 16px;
  width: 316px;
  line-height: normal;
  @media (min-width: 1280px) {
    font-size: ${fontSizes.s};
  }
`;
export const ContactPerson = styled.p`
  font-size: ${fontSizes.xs};
  font-weight: ${fontWeights.light};
  margin-bottom: 8px;
  @media (min-width: 768px) {
    margin-top: 8px;
  }
  @media (min-width: 1280px) {
    font-size: ${fontSizes.s};
  }
`;
export const ImgLocationContainer = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
  border-radius: 10px;
  @media (min-width: 768px) {
    margin-top: 0;
    margin-left: 24px;
    margin-bottom:0;
  }
`;
export const ImgLocRad = styled.img`
  border-radius: 10px;
  width:327px;
   @media (min-width: 768px) {
    width: 316px;
   }
  @media (min-width: 1280px) {
    width: 500px;
    height: 402px;
  }
`;
export const SocialMediaContainer = styled.div`
  display: flex;
  margin-top: 24px;
  @media (min-width: 768px) {
    margin-top: 0px;
    justify-content: flex-end;
  }
`;

export const SocialMediaTitle = styled.p`
  font-size: ${fontSizes.xs};
  font-weight: ${fontWeights.light};
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    margin-top: 5px;
  }
  @media (min-width: 1280px) {
    font-size: ${fontSizes.s};
  }
`;

export const SocialMediaLinks = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  margin-left: 16px;
  align-items: center;
  @media (min-width: 768px) {

  }
   @media (min-width: 1280px) {
  
   }
`;

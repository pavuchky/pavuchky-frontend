import styled from 'styled-components';

import { theme } from '../../stylesheet/theme';

const { fontSizes, fontWeights, colors, fonts } = theme;

export const ContactsContainer = styled.section`
  padding: 28px 16px 30px;
  margin-top: 36px;
  margin-bottom: 36px;
  border-radius: 16px;
  background: linear-gradient(
    272deg,
    rgb(189 211 242 / 19%) 0%,
    rgba(255, 255, 255, 0) 100%
  );

  @media (min-width: 768px) {
    margin-top: 44px;
    margin-bottom: 44px;
    padding: 32px 32px 58px 32px;
  }
  @media (min-width: 1440px) {
    margin: 64px auto;
    padding: 44px 64px;
  }
`;
export const ContactsWrapper = styled.div`
  color: #4c4c4c;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
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
  @media (min-width: 1440px) {
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
  @media (min-width: 1440px) {
    font-size: 26px;
    margin-bottom: 24px;
    padding-bottom: 10px;
    width: 477px;
    margin-top: 24px;
  }
`;
export const AdminTitle = styled.li`
  font-size: 18px;
  font-weight: ${fontWeights.regular};
  font-family: ${fonts.regular};
  font-style: normal;
  padding-bottom: 5px;
  margin-bottom: 11px;
  border-bottom: 1px solid rgba(76, 76, 76, 1);
  width: 316px;

  @media (min-width: 768px) {
    margin-bottom: 8px;
    padding-bottom: 8px;
  }
  @media (min-width: 1440px) {
    font-size: 26px;
    margin-bottom: 24px;
    padding-bottom: 10px;
    width: 477px;
    margin-top: 24px;
  }
`;
export const ContactsFirstAdress = styled.li`
  font-size: ${fontSizes.xs};
  font-weight: ${fontWeights.light};
  margin-bottom: 4px;
  padding-bottom: 6px;
  line-height: normal;
  width: 316px;
  @media (min-width: 768px) {
    margin-top: 8px;
  }
  @media (min-width: 1440px) {
    margin-top: 0;
    font-size: ${fontSizes.s};
  }
`;
export const ContactsAdressUl = styled.ul`
color: ${colors.secondaryFont};
margin-bottom: 24px;
  @media (min-width: 768px) {
  }
`;
export const ContactsFirstAdressList = styled.li`
  font-family: ${fonts.regular};
  font-size: 14px;
  font-weight: ${fontWeights.light};
  list-style: disc;
  margin-left: 16px;
  margin-bottom: 8px;
  @media (min-width: 1440px) {
    margin-left: 35px;
    font-size: ${fontSizes.s};
  }
`;
export const ContactsSecondAdress = styled.li`
  font-size: ${fontSizes.xs};
  font-weight: ${fontWeights.light};
  margin-bottom: 24px;
  width: 316px;
  line-height: normal;
  @media (min-width: 1440px) {
    font-size: ${fontSizes.s};
  }
`;
export const ContactPerson = styled.li`
  font-size: ${fontSizes.xs};
  font-weight: ${fontWeights.light};
  margin-bottom: 8px;
  @media (min-width: 768px) {
    margin-top: 8px;
  }
  @media (min-width: 1440px) {
    font-size: ${fontSizes.s};
  }
`;
export const ImgLocationContainer = styled.div`
  border-radius: 10px;
  @media (min-width: 768px) {
    margin-top: 0;
    margin-left: auto;
    margin-bottom: 0;
  }
  @media (min-width: 1440px) {
    margin-top: -94px;
    margin-left: auto;

  }
`;
export const ImgLocRad = styled.img`
  border-radius: 10px;
  width: 327px;
  @media (min-width: 768px) {
    width: 316px;
  }
  @media (min-width: 1440px) {
    width: 500px;
    height: 402px;
  }
`;
export const SocialMediaContainer = styled.div`
  display: flex;
  margin-top: 24px;
  @media (min-width: 768px) {
    margin-top: -58px;
    justify-content: flex-end;
  }
  @media (min-width: 1440px) {
    flex-direction: column;
    margin-top: 44px;
    justify-content: flex-start;
  }
`;

export const SocialMediaTitle = styled.p`
  font-size: ${fontSizes.xs};
  font-weight: ${fontWeights.light};
  color: ${colors.secondaryFont};
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
  }
  @media (min-width: 1440px) {
    font-size: ${fontSizes.s};
    justify-content: flex-start;
    margin-bottom: 10px;
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
  @media (min-width: 1440px) {
    justify-content: flex-start;
    margin-left: 0;
  }
`;

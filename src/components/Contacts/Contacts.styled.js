import styled from 'styled-components';

import { theme } from '../../stylesheet/theme';

const { fontSizes, fontWeights, colors, fonts } = theme;

export const ContactsContainer = styled.section`
  position: relative;
  padding: 28px 16px 30px;
  margin-bottom: 36px;
  border-radius: 16px;
  background: ${colors.gradientBackground};

  @media (min-width: 768px) {
    margin-bottom: 44px;
    padding: 32px 32px 58px 32px;
    border-radius: 20px;
  }
  @media (min-width: 1440px) {
    margin-bottom: 64px;
    padding: 44px 64px;
    border-radius: 25px;
  }
`;
export const ContactsWrapper = styled.div`
  color: ${colors.secondaryFont};
  @media (min-width: 768px) {
    display: flex;
  }
  @media (min-width: 1440px) {
    margin-bottom: 44px;
  }
`;
export const ContactsList = styled.ul`
  color: #4c4c4c;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 24px;
  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px;
    margin-bottom: 0;
  }
  @media (min-width: 1440px) {
    gap: 24px;
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
export const ContactsSubTitle = styled.h4`
  font-size: 18px;
  font-weight: ${fontWeights.regular};
  font-family: ${fonts.regular};
  font-style: normal;
  padding-bottom: 8px;
  margin-bottom: 8px;
  color: ${colors.primaryFont};
  border-bottom: 1px solid ${colors.secondaryFont};

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
export const ContactsFirstAddress = styled.p`
  font-size: ${fontSizes.xs};
  font-weight: ${fontWeights.light};
  margin-bottom: 8px;
  line-height: normal;

  @media (min-width: 768px) {
    margin-top: 8px;
  }
  @media (min-width: 1440px) {
    margin-top: 0;
    font-size: ${fontSizes.s};
  }
`;
export const ContactsFirstAddressList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-family: ${fonts.light};
  font-size: 14px;
  font-weight: ${fontWeights.light};
  margin-bottom: 8px;
  @media (min-width: 1440px) {
    font-size: ${fontSizes.s};
  }
`;
export const ContactsSecondAddress = styled.p`
  font-size: ${fontSizes.xs};
  font-weight: ${fontWeights.light};

  line-height: normal;
  @media (min-width: 1440px) {
    font-size: ${fontSizes.s};
  }
`;
export const ContactsSecondAddressSpan = styled.span`
  display: block;
`;
export const ContactPerson = styled.p`
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
export const ContactNumber = styled.a`
  font-size: ${fontSizes.xs};
  font-weight: ${fontWeights.light};
  cursor: pointer;

  @media (min-width: 1440px) {
    font-size: ${fontSizes.s};
  }
`;
export const LocationContainer = styled.div`
  border-radius: 10px;
  @media (min-width: 768px) {
    width: 100%;
    margin-top: 30px;
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
    margin-left: auto;
  }
  @media (min-width: 1440px) {
    width: 500px;
    margin-top: 90px;
  }
`;
export const SocialMediaContainer = styled.div`
  display: flex;
  margin-top: 24px;
  align-items: center;
  @media (min-width: 768px) {
    position: absolute;
    bottom: 10%;
    right: 32px;
  }
  @media (min-width: 1440px) {
    position: static;
    flex-direction: column;
    margin-top: 0;
    justify-content: flex-start;
    align-items: flex-start;
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

export const SocialMediaLinks = styled.ul`
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
    gap: 28px;
  }
`;

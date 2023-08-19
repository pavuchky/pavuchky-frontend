import styled from 'styled-components';

import { theme } from '../../stylesheet/theme';

const { fontSizes, fontWeights, colors, fonts, transitions } = theme;

export const ContactsContainer = styled.section`
  position: relative;
  padding: 28px 16px 30px;
  margin-bottom: 36px;
  border-radius: 16px;
  background: ${colors.gradientBackground};

  @media (min-width: 768px) {
    margin-bottom: 44px;
    padding: 32px 32px 28px 32px;
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
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
  @media (min-width: 1440px) {
    margin-bottom: 0px;
  }
`;
export const ContactsListWrapper = styled.div`
  @media (min-width: 768px) {
    width: 316px;
    justify-content: space-between;
  }
  @media (min-width: 1440px) {
    margin-bottom: 0px;
  }
`;

export const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 24px;
  white-space: break-spaces;
  color: ${colors.secondaryFont};

  @media (min-width: 768px) {
    gap: 37px;
    margin-bottom: 16px;
  }
  @media (min-width: 1440px) {
    gap: 24px;
    margin-bottom: 24px;
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
    margin-bottom: 8px;
  }
  @media (min-width: 1440px) {
    font-size: 26px;
    margin-bottom: 24px;
    padding-bottom: 10px;
    width: 477px;
    margin-top: 24px;
  }
`;

export const ContactsAdminTitle = styled.h4`
  font-size: 18px;
  font-weight: ${fontWeights.regular};
  font-family: ${fonts.regular};
  font-style: normal;
  padding-bottom: 5px;
  margin-bottom: 11px;
  color: ${colors.primaryFont};
  border-bottom: 1px solid ${colors.secondaryFont};

  @media (min-width: 768px) {
    padding-bottom: 8px;
    margin-bottom: 8px;
  }
  @media (min-width: 1440px) {
    font-size: 26px;
    margin-bottom: 24px;
    padding-bottom: 10px;
    width: 477px;
    margin-top: 24px;
  }
`;

export const ContactsFirstAddress = styled.li`
  font-size: ${fontSizes.xs};
  font-weight: ${fontWeights.light};
  line-height: normal;

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
export const ContactPerson = styled.p`
  font-size: ${fontSizes.xs};
  font-weight: ${fontWeights.light};
  margin-bottom: 8px;

  @media (min-width: 768px) {
    margin-top: 8px;
  }
  @media (min-width: 1440px) {
    max-width: 210px;
    font-size: ${fontSizes.s};
    margin-bottom: 10px;
  }
`;
export const ContactNumber = styled.a`
  font-size: ${fontSizes.xs};
  font-weight: ${fontWeights.light};
  margin-bottom: 8px;
  cursor: pointer;
  transition: color ${transitions.regular};

  &:hover,
  &:focus {
    color: ${colors.blue};
  }

  @media (min-width: 1440px) {
    font-size: ${fontSizes.s};
    margin-bottom: 0;
  }
`;
export const LocationContainer = styled.div`
  width: 100%;
  max-width: 327px;
  height: 218px;
  border-radius: 10px;
  overflow: hidden;

  @media (min-width: 768px) {
    max-width: 316px;
    height: 220px;
    margin-top: 28px;
  }

  @media (min-width: 1440px) {
    max-width: 500px;
    height: 402px;
    margin-top: 0;
  }
`;
export const SocialMediaContainer = styled.div`
  display: flex;
  margin-top: 24px;
  align-items: center;
  @media (min-width: 768px) {
    position: absolute;
    max-width: 295px;
    right: 32px;
    bottom: 25px;
    margin-top: 0;
    justify-content: flex-end;
  }
  @media (min-width: 1440px) {
    position: relative;
    margin-top: 44px;
    flex-direction: column;
    right: 0;
    bottom: 0px;
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

  & li {
    transition: transform ${transitions.regular};
  }

  & li:hover,
  & li:focus {
    transform: scale(1.07);
  }

  @media (min-width: 1440px) {
    justify-content: flex-start;
    margin-left: 0;
    gap: 28px;
  }
`;

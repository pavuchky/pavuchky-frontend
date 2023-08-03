import styled from 'styled-components';
import { theme } from '../../stylesheet/theme';
import Button from '@mui/material/Button';

export const AboutUsSectionWrapper = styled.section`
  position: relative;
  padding: 28px 16px 32px;
  margin: 0px auto;
  width: 100%;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  padding-right: 34px;
  @media screen and (min-width: 1280px) {
    margin-bottom: 28px;
  }
`;

export const AboutUsTitle = styled.h3`
  color: ${theme.colors.primaryFont};
  font-family: ${theme.fonts.headRegular};
  font-size: 24px;
  font-weight: 400;
  @media screen and (min-width: 768px) {
    font-size: 36px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 60px;
  }
`;

export const AboutUSButton = styled.button`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border: none;
  background-color: transparent;

  font-family: ${theme.fonts.regular};
  font-size: 16px;
  font-weight: 300;
  color: ${theme.colors.secondaryFont};

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 16px;
  }
`;

export const AboutUsIcon = styled.svg`
  margin-left: 13px;
`;

export const AboutUsMainContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 768px) {
    gap: 28px;
  }
  @media screen and (min-width: 1280px) {
    gap: 44px;
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    gap: 22px;
  }
  @media screen and (min-width: 1280px) {
    gap: 93px;
  }
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media screen and (min-width: 1280px) {
    gap: 16px;
  }
`;

export const AboutUsDescription = styled.p`
  font-family: ${theme.fonts.regular};
  font-size: 16px;
  font-weight: 300;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }
`;

export const AboutUsMap = styled.img`
  display: block;
  width: 327px;
  height: 212px;
  @media screen and (min-width: 768px) {
    width: 318px;
  }
  @media screen and (min-width: 1280px) {
    width: 605px;
    height: 404px;
  }
`;

export const ButtonLearnMore = styled(Button)`
  text-transform: none !important;
  border-radius: 12px !important;
  font-size: 18px !important;
  font-weight: 400 !important;
  font-family: ${theme.fonts.regular};
  @media screen and (min-width: 768px) {
    font-size: 24px !important;
  }
  @media screen and (min-width: 1280px) {
    position: absolute !important;
    top: 80% !important;
    right: 1% !important;
    width: 519px;
    height: 64px;
  }
`;

import styled from 'styled-components';
import { theme } from '../../stylesheet/theme';
import Button from '@mui/material/Button';

export const AboutUsSectionWrapper = styled.section`
  padding: 28px 16px 32px;
  width: 100vw;
  margin: 0px auto;
  width: 100%;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

export const AboutUsTitle = styled.h3`
  color: ${theme.colors.primaryFont};
  font-family: ${theme.fonts.headRegular};
  font-size: 24px;
  font-weight: 400;
  @media screen and (min-width: 768px) {
    font-size: 36px;
  }
`;

export const AboutUSButton = styled.button`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 147px;
  height: 28px;
  border: none;
  background-color: transparent;

  font-family: ${theme.fonts.regular};
  font-size: 16px;
  font-weight: 300;
  color: ${theme.colors.secondaryFont};

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export const AboutUsMainContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
  }
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const AboutUsDescription = styled.p`
  font-family: ${theme.fonts.regular};
  font-size: 16px;
  font-weight: 300;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const AboutUsMap = styled.img`
  display: block;
  width: 327px;
  height: 212px;
  @media screen and (min-width: 768px) {
    width: 318px;
  }
  @media screen and (min-width: 1200px) {
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
`;

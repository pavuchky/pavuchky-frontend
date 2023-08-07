import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';

export const AboutUsSectionWrapper = styled.section`
  position: relative;
  padding: 28px 16px 32px 16px;
  margin: 0px auto;
  margin-bottom: 36px;
  width: 100%;
  border-radius: 16px;

  background: ${({ theme }) => theme.colors.gradientBackground};

  @media only screen and (min-width: 768px) {
    padding: ${({ theme }) => theme.spacing(8)};
    margin-bottom: 44px;
    border-radius: 20px;
  }
  @media only screen and (min-width: 1440px) {
    padding-top: 44px;
    padding-bottom: 78px;
    padding-left: 64px;
    padding-right: 64px;
    margin-bottom: 64px;
    border-radius: 25px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* margin-bottom: 24px; */
`;

export const AboutUsTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primaryFont};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 24px;
  font-weight: 400;
  @media screen and (min-width: 768px) {
    font-size: 36px;
    letter-spacing: -1.44px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 60px;
    letter-spacing: -2.4px;
  }
`;

export const AboutUSButton = styled(HashLink)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border: none;
  background-color: transparent;
  cursor: pointer;

  font-family: ${({ theme }) => theme.fonts.light};
  font-size: 16px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.secondaryFont};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.blue};
    stroke: ${({ theme }) => theme.colors.blue};
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 16px;
    font-weight: 400;
    line-height: 30px;
  }
`;

export const AboutUsIcon = styled.svg`
  margin-left: 13px;
  &:hover,
  &:focus {
    stroke: ${({ theme }) => theme.colors.blue};
  }
`;

export const AboutUsMainContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 24px;

  @media screen and (min-width: 768px) {
    gap: 28px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 0;
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
  @media screen and (min-width: 1440px) {
    gap: 93px;
  }
`;

export const DescriptionWrapper = styled.div`
  height: 210px;

  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow: hidden;

  @media screen and (min-width: 1440px) {
    height: 322px;
    gap: 16px;
  }
`;

export const AboutUsDescription = styled.p`
  display: block;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 16px;
  font-weight: 300;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 20px;
  }
`;

export const AboutUsDescriptionShort = styled(AboutUsDescription)`
  max-height: 84px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  @media screen and (min-width: 375px) {
    -webkit-line-clamp: 4;
  }

  @media screen and (min-width: 768px) {
    max-height: 84px;
    -webkit-line-clamp: 3;
  }
  @media screen and (min-width: 1440px) {
    display: block;
    max-height: none;
    overflow: visible;
    text-overflow: clip;
    -webkit-line-clamp: none;
  }
`;

export const AboutUsDescriptionDesktop = styled(AboutUsDescription)`
  display: none;

  @media screen and (min-width: 1440px) {
    display: block;
  }
`;

export const AboutUsMap = styled.img`
  display: block;
  width: 327px;
  height: 212px;

  @media screen and (min-width: 768px) {
    width: 318px;
  }
  @media screen and (min-width: 1440px) {
    width: 605px;
    height: 404px;
    margin-top: 28px;
  }
`;

export const LearnMoreStyledLink = styled(HashLink)`
  min-width: 100%;
  border-radius: 12px;
  overflow: hidden;
  padding: 10.5px;

  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  text-align: center;
  color: ${({ theme }) => theme.colors.white};

  background-color: ${({ theme }) => theme.colors.blue};
  transition: color ${({ theme }) => theme.transitions.regular};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.yellow};
  }

  @media only screen and (min-width: 768px) {
    border-radius: 16px;
    padding: 9.5px;
    font-size: ${({ theme }) => theme.fontSizes.m};
  }

  @media only screen and (min-width: 1440px) {
    min-width: 520px;
    border-radius: ${({ theme }) => theme.radii.l};
    padding: 17.5px;
    position: absolute !important;
    top: 78% !important;
    right: 9% !important;
  }
`;

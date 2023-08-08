import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';

export const GallerySectionWrapper = styled.section`
  position: relative;
  padding: 28px 16px 28px 16px;
  margin: 0px auto;
  width: 100%;
  border-radius: 16px;

  background: ${({ theme }) => theme.colors.gradientBackground};

  @media only screen and (min-width: 768px) {
    padding: ${({ theme }) => theme.spacing(8)};
    margin-bottom: 44 px;
    border-radius: 20px;
  }
  @media only screen and (min-width: 1440px) {
    padding-top: 44px;
    padding-bottom: 44px;
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
`;

export const GalleryTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primaryFont};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 24px;
  font-weight: 400;
  @media screen and (min-width: 768px) {
    font-size: 36px;
    letter-spacing: -1.44px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 44px;
    font-family: ${({ theme }) => theme.fonts.headRegular};
    font-size: 60px;
    letter-spacing: -2.4px;
  }
`;

export const GalleryButton = styled(HashLink)`
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
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 16px;
    font-weight: 400;
    line-height: 30px;
  }
`;

export const GalleryIcon = styled.svg`
  margin-left: 13px;
  &:hover,
  &:focus {
    stroke: ${({ theme }) => theme.colors.blue};
  }
`;

export const GalleryMainWrapper = styled.div`
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

export const GalleryContainer = styled.ul`
  display: grid;
  box-sizing: border-box;
  gap: 16px;
  max-height: 100%;
  height: 326px;
  grid-template-columns: repeat(2, 254px);
  grid-template-rows: repeat(auto-fit, 300px);
  border-radius: 8px;
  overflow-x: scroll;
  scroll-behavior: smooth;
  scrollbar-width: thin;

  &::-webkit-scrollbar {
    background-color: ${({ theme }) => theme.colors.grey};
    border-radius: 20px;
    width: 60px;
    height: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.blue};
    border-radius: 20px;
    background-size: contain;
  }

  @media screen and (min-width: 768px) {
    height: auto;
    gap: 24px;
    grid-template-columns: repeat(2, minmax(316px, 1fr));
    grid-template-rows: repeat(3, minmax(186px, 1fr));
    overflow-x: visible;
  }
  @media screen and (min-width: 1440px) {
    height: auto;
    gap: 26px;
    grid-auto-rows: auto;

    grid-template-columns: repeat(3, minmax(409px, 1fr));
    grid-template-rows: repeat(3, minmax(218px, 1fr));
  }
`;

export const GalleryItem = styled.li`
  border-radius: 8px;
`;

export const GalleryItem1 = styled(GalleryItem)`
  grid-column: span 1;
  grid-row: span 1;

  @media screen and (min-width: 768px) {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 3;
  }

  @media screen and (min-width: 1440px) {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 3;
  }
`;

export const GalleryItem2 = styled(GalleryItem)`
  grid-column: span 1;
  grid-row: span 1;

  @media screen and (min-width: 768px) {
    grid-column-start: 2;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 1;
  }
  @media screen and (min-width: 1440px) {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 3;
    grid-row-end: 4;
  }
`;

export const GalleryItem3 = styled(GalleryItem)`
  grid-column: span 1;
  grid-row: span 1;

  @media screen and (min-width: 768px) {
    grid-column-start: 2;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 4;
  }
  @media screen and (min-width: 1440px) {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
  }
`;

export const GalleryItem4 = styled(GalleryItem)`
  grid-column: span 1;
  grid-row: span 1;
  @media screen and (min-width: 1440px) {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 4;
  }
`;

export const GalleryItem5 = styled(GalleryItem)`
  grid-column: span 1;
  grid-row: span 1;
  @media screen and (min-width: 1440px) {
    grid-column-start: 3;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 3;
  }
`;

export const GalleryItem6 = styled(GalleryItem)`
  grid-column: span 1;
  grid-row: span 1;
  @media screen and (min-width: 1440px) {
    grid-column-start: 3;
    grid-column-end: 3;
    grid-row-start: 3;
    grid-row-end: 3;
  }
`;

export const GalleryImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

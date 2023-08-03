import styled from 'styled-components';

export const AboutUsSectionWrapper = styled.section`
  padding: 28px 16px 32px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const AboutUsTitle = styled.h3`
  color: #2b2b2b;
  font-family: 'eUkraineHeadRegular';
  font-size: 24px;
  font-weight: 400;
`;

export const AboutUSButton = styled.button`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 147px;
  height: 28px;
  border: none;
  background-color: transparent;

  font-family: 'eUkraineRegular';
  font-size: 16px;
  font-weight: 300;
  color: #4c4c4c;
`;

export const AboutUsMainContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const DescriptionWrapper = styled.div`
  /* margin: 24px 0; */
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const AboutUsDescription = styled.p`
  font-family: 'eUkraineRegular';
  font-size: 16px;
  font-weight: 300;
`;

export const AboutUsMap = styled.img`
  display: block;
  width: 327px;
  height: 212px;
`;

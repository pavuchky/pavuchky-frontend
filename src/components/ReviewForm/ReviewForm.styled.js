import styled from 'styled-components';

export const FormContainer = styled.div`
  padding: 28px 16px;
  margin-bottom: 36px;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.gradientBackground};

  @media (min-width: 768px) {
    padding: 32px;
    border-radius: ${({ theme }) => theme.radii.m};
  }

  @media (min-width: 1440px) {
    padding: 44px 64px;
    border-radius: ${({ theme }) => theme.radii.xl};
  }
`;

export const TitleContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    p {
      width: 316px;
      font-size: ${({ theme }) => theme.fontSizes.s};
    }
  }
  @media (min-width: 1440px) {
    p {
      width: 515px;
      font-size: 26px;
    }
  }
`;

export const FormTitle = styled.h3`
  margin-bottom: 24px;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.regular};

  @media (min-width: 768px) {
    font-family: ${({ theme }) => theme.fonts.headRegular};
    font-size: ${({ theme }) => theme.fontSizes.l};
    letter-spacing: -1.44px;
  }

  @media (min-width: 1440px) {
    margin-bottom: 44px;
    font-size: ${({ theme }) => theme.fontSizes.xl};
    letter-spacing: -2.4px;
  }
`;

export const FormList = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (min-width: 768px) {
    gap: 24px;
  }

  @media (min-width: 1440px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 0;
  }
`;

export const FormSubList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (min-width: 768px) {
    gap: 24px;
  }

  @media (min-width: 1440px) {
    gap: 36px;
  }
`;

export const FormBtn = styled.button`
  margin-top: 4px;
  width: 100%;
  height: 40px;
  padding: 10px;
  text-align: center;
  border-radius: 12px;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  border: 1px solid ${({ theme }) => theme.colors.blue};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.blue};
  }

  @media (min-width: 768px) {
    width: 656px;
    height: 48px;
    padding: 10px;
    margin-top: 32px;
    border-radius: 16px;
    font-size: ${({ theme }) => theme.fontSizes.m};
  }

  @media (min-width: 1440px) {
    width: 519px;
    height: 64px;
    margin-top: 0;
    border-radius: ${({ theme }) => theme.radii.m};
  }
`;

export const Notice = styled.p`
  width: 475px;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.grey};
`;

export const FormPhoto = styled.label`
  margin-top: 12px;

  @media (min-width: 768px) {
    margin-top: 24px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  @media (min-width: 1440px) {
    margin: 0 100px 0 0;
    width: 413px;
    height: 402px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 62px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

export const PhotoTitle = styled.p`
  margin-bottom: 12px;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.blue};

  @media (min-width: 768px) {
    margin-bottom: 16px;
    font-size: 18px;
  }

  @media (min-width: 1440px) {
    font-size: ${({ theme }) => theme.fontSizes.s};
  }
`;

export const PhotoText = styled.p`
  margin-bottom: 24px;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.secondaryFont};

  span {
    color: ${({ theme }) => theme.colors.blue};
  }

  @media (min-width: 768px) {
    margin-bottom: 0;
  }

  @media (min-width: 1440px) {
    font-size: 18px;
  }
`;

export const PhotoContainer = styled.div`
  width: 177px;
  margin: 0 auto;
  overflow: hidden;
  text-align: center;
  border-radius: 9px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid
    ${({ theme, isDragging }) =>
      isDragging ? theme.colors.yellow : theme.colors.blue};

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.yellow};

    svg {
      fill: ${({ theme }) => theme.colors.yellow};
      stroke: ${({ theme }) => theme.colors.yellow};
    }
  }

  input {
    display: none;
  }

  svg {
    margin: 14px 0;
    width: 44px;
    height: 44px;
    stroke: ${({ theme, isDragging }) =>
      isDragging ? theme.colors.yellow : theme.colors.blue};
  }

  @media (min-width: 768px) {
    margin: 0;
  }

  @media (min-width: 1440px) {
    width: 195px;

    svg {
      width: 157px;
      height: 157px;
      fill: ${({ theme, isDragging }) =>
        isDragging ? theme.colors.yellow : theme.colors.blue};
    }
  }
`;

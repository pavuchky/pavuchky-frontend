import styled, { css } from 'styled-components';

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
    display: flex;
    justify-content: space-between;
    align-items: center;
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
  gap: 24px;

  @media (min-width: 768px) {
    gap: 36px;
  }
`;

export const FormText = styled.p`
  margin-bottom: 12px;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.black};

  @media (min-width: 768px) {
    font-family: ${({ theme }) => theme.fonts.light};
    font-size: ${({ theme }) => theme.fontSizes.s};
    font-weight: ${({ theme }) => theme.fontWeights.light};
  }
`;

export const FormInput = styled.input`
  position: relative;
  width: 270px;
  height: 23px;
  padding-bottom: 6px;
  font-size: 14px;
  border-color: transparent;
  background-color: inherit;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primaryFont};

  ::placeholder {
    color: #d6d6d6;
  }

  ${({ hasValue }) =>
    hasValue &&
    css`
      background-color: rgb(232, 240, 254);
    `}

  @media (min-width: 375px) {
    width: 327px;
  }

  @media (min-width: 768px) {
    width: 656px;
    height: 31px;
    padding-bottom: 0;
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    line-height: ${({ theme }) => theme.lineHeights.secondary};
  }

  @media (min-width: 1440px) {
    width: 528px;
    height: 31px;
  }
`;

export const FormValidation = styled.p`
  position: absolute;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.pink};
`;

export const FormBtn = styled.button`
  margin-top: 4px;
  width: 270px;
  height: 40px;
  padding: 10px;
  text-align: center;
  border-radius: 12px;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  background: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.yellow};
  }

  @media (min-width: 375px) {
    width: 327px;
  }

  @media (min-width: 768px) {
    width: 656px;
    height: 48px;
    padding: 10px;
    margin-top: 20px;
    border-radius: 16px;
    font-size: ${({ theme }) => theme.fontSizes.m};
  }

  @media (min-width: 1440px) {
    width: 519px;
    height: 64px;
    border-radius: ${({ theme }) => theme.radii.m};
  }
`;

export const SupportImg = styled.img`
  width: 446px;
  height: 490px;
`;

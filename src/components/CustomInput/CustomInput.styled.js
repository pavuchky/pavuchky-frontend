import styled, { css } from 'styled-components';

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
  width: 100%;
  height: 23px;
  padding-bottom: 6px;
  font-size: 14px;
  border-color: transparent;
  background-color: inherit;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primaryFont};

  ::placeholder {
    color: #d6d6d6;
  }

  &:focus {
    outline-color: ${({ theme }) => theme.colors.blue};
  }

  ${({ hasValue }) =>
    hasValue &&
    css`
      background-color: rgb(232, 240, 254);
    `}

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
  }
`;

export const FormValidation = styled.p`
  position: absolute;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.pink};
`;

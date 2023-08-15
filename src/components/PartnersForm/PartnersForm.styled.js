import styled from 'styled-components';

export const FormContainer = styled.div`
  padding: 28px 16px;
  margin-bottom: 36px;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.gradientBackground};

  @media (min-width: 768px) {
    padding: 32px;
    border-radius: ${({ theme }) => theme.radii.m};
    margin-bottom: 44px;
  }

  @media (min-width: 1440px) {
    padding: 44px 64px;
    margin-bottom: 64px;
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
  padding: 10.5px;
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

  @media (min-width: 768px) {
    width: 100%;
    height: 48px;
    padding: 9.5px;
    margin-top: 20px;
    border-radius: 16px;
    font-size: ${({ theme }) => theme.fontSizes.m};
  }

  @media (min-width: 1440px) {
    max-width: 519px;
    height: 64px;
    padding: 17.5px;
    border-radius: ${({ theme }) => theme.radii.m};
  }
`;

export const SupportImg = styled.img`
  width: 446px;
  height: 490px;
  padding-top: 28px;
`;

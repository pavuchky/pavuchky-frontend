import styled from 'styled-components';

export const WorkContainer = styled.section`
  padding: 28px 16px;
  margin: 36px 0;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.gradientBackground};

  @media (min-width: 768px) {
    padding: 32px;
  }

  @media (min-width: 1440px) {
    padding: 44px 63px 44px 64px;
    border-radius: 25px;
  }
`;

export const WorkBlockTitle = styled.div`
  margin-bottom: 24px;
  display: flex;
  gap: 73px;
  align-items: baseline;

  @media (min-width: 768px) {
    align-items: center;
    gap: 213px;
  }

  @media (min-width: 1440px) {
    margin-bottom: 45px;
    gap: 628px;
  }
`;

export const WorkTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes.m};

  @media (min-width: 768px) {
    font-family: ${({ theme }) => theme.fonts.headRegular};
    font-size: ${({ theme }) => theme.fontSizes.l};
    letter-spacing: -1.44px;
  }

  @media (min-width: 1440px) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    letter-spacing: -2.4px;
  }
`;

export const FacebookBtn = styled.a`
  display: flex;
  align-items: center;
  gap: 13px;
  font-size: 14px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.secondaryFont};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.blue};
    stroke: ${({ theme }) => theme.colors.blue};
  }

  @media screen and (min-width: 1440px) {
    font-size: 16px;
    font-weight: 400;
    line-height: 30px;
  }
`;

export const WorkList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 24px;
  }
`;

export const WorkItem = styled.li`
  display: flex;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.blue};

  @media (min-width: 768px) {
    border-radius: 10px;
    flex-direction: column;
    overflow: hidden;
  }
`;

export const WorkImg = styled.img`
  width: 100px;
  height: 112px;
  border-radius: 7px 0px 0px 7px;

  @media (min-width: 375px) {
    width: 155px;
  }

  @media (min-width: 768px) {
    width: 316px;
    height: 221px;
    border-radius: 9px 9px 0px 0px;
  }

  @media (min-width: 1440px) {
    width: 409px;
    height: 221px;
  }
`;

export const WorkBlock = styled.div`
  padding: 16px 8px 8px 16px;

  @media (min-width: 768px) {
    padding: 16px;
  }
`;

export const WorkText = styled.p`
  margin-bottom: 22px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: ${({ theme }) => theme.fontSizes.xs};

  @media (min-width: 768px) {
    width: 284px;
    margin-bottom: 20px;
    font-size: 20px;
  }

  @media (min-width: 1440px) {
    width: 379px;
    height: 48px;
    margin-bottom: 24px;
  }
`;

export const WorkItemBtn = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.secondaryFont};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.blue};
    stroke: ${({ theme }) => theme.colors.blue};
  }

  @media (min-width: 768px) {
    display: block;
    width: 284px;
    padding: 12px 10px;
    border-radius: 10px;
    border: 1px solid var(--blue-100100, #0069b5);
    text-align: center;
    font-size: 20px;
    color: var(--text-100100, #2b2b2b);
    background-color: ${({ theme }) => theme.colors.white};

    &:hover,
    &:focus {
      background-color: ${({ theme }) => theme.colors.blue};
      color: ${({ theme }) => theme.colors.white};
    }

    svg {
      display: none;
    }
  }

  @media (min-width: 1440px) {
    width: 379px;
    padding: 14px 10px;
  }
`;

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
    padding: 44px 64px;
    border-radius: ${({ theme }) => theme.radii.xl};
  }
`;

export const WorkBlockTitle = styled.div`
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 1440px) {
    margin-bottom: 45px;
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
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 14px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.secondaryFont};
  transition: color ${({ theme }) => theme.transitions.regular},
    stroke ${({ theme }) => theme.transitions.regular};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.blue};
    stroke: ${({ theme }) => theme.colors.blue};
  }

  @media (min-width: 768px) {
    font-family: ${({ theme }) => theme.fonts.light};
    font-weight: ${({ theme }) => theme.fontWeights.light};
  }

  @media screen and (min-width: 1440px) {
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    line-height: ${({ theme }) => theme.lineHeights.secondary};
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
  justify-content: space-between;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.blue};
  background-color: ${({ theme }) => theme.colors.white};

  @media (min-width: 768px) {
    border-radius: ${({ theme }) => theme.radii.s};
    flex-direction: column;
    overflow: hidden;
  }
`;

export const WorkImg = styled.img`
  width: 100px;
  border-radius: 7px 0px 0px 7px;
  background-color: ${({ theme }) => theme.colors.secondaryFont};

  @media (min-width: 375px) {
    width: 155px;
  }

  @media (min-width: 768px) {
    width: 316px;
    border-radius: 9px 9px 0px 0px;
  }

  @media (min-width: 1440px) {
    width: 409px;
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
    font-size: ${({ theme }) => theme.fontSizes.s};
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
  transition: color ${({ theme }) => theme.transitions.regular},
    stroke ${({ theme }) => theme.transitions.regular};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.blue};
    stroke: ${({ theme }) => theme.colors.blue};
  }

  @media (min-width: 768px) {
    display: block;
    width: 284px;
    padding: 12px 10px;
    border-radius: ${({ theme }) => theme.radii.s};
    border: 1px solid ${({ theme }) => theme.colors.blue};
    text-align: center;
    font-size: ${({ theme }) => theme.fontSizes.s};
    color: ${({ theme }) => theme.colors.primaryFont};
    background-color: ${({ theme }) => theme.colors.white};
    transition: color ${({ theme }) => theme.transitions.regular},
      background-color ${({ theme }) => theme.transitions.regular};

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

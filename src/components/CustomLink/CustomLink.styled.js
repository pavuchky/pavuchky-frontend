import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import styled, { css } from 'styled-components';

export const StyledLink = styled(Link)`
  width: 100%;
  padding: 10.5px;

  font-family: ${({ theme }) => theme.fonts.regular};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  text-align: center;

  border-radius: 12px;
  transition: color ${({ theme }) => theme.transitions.regular},
    background-color ${({ theme }) => theme.transitions.regular},
    border-color ${({ theme }) => theme.transitions.regular};

  @media only screen and (min-width: 768px) {
    padding: 9.5px;
    font-size: ${({ theme }) => theme.fontSizes.m};
    border-radius: 16px;
  }

  @media only screen and (min-width: 1440px) {
    align-self: center;
    max-width: 520px;
    padding: 17.5px;
    border-radius: ${({ theme }) => theme.radii.l};
  }

  ${({ variant }) =>
    variant === 'blue' &&
    css`
      color: ${({ theme }) => theme.colors.yellow};
      background-color: ${({ theme }) => theme.colors.blue};

      &:hover,
      &:focus {
        color: ${({ theme }) => theme.colors.white};
      }
    `}

  ${({ variant }) =>
    variant === 'yellow' &&
    css`
      color: ${({ theme }) => theme.colors.blue};
      background-color: ${({ theme }) => theme.colors.yellow};

      &:hover,
      &:focus {
        color: ${({ theme }) => theme.colors.primaryFont};
      }
    `}

  ${({ variant }) =>
    variant === 'white' &&
    css`
      color: ${({ theme }) => theme.colors.primaryFont};
      background-color: ${({ theme }) => theme.colors.white};

      &:hover,
      &:focus {
        color: ${({ theme }) => theme.colors.blue};
      }
    `}


  ${({ variant }) =>
    variant === 'about' &&
    css`
      color: ${({ theme }) => theme.colors.yellow};
      background-color: ${({ theme }) => theme.colors.blue};
      border: 1px solid transparent;

      &:hover,
      &:focus {
        color: ${({ theme }) => theme.colors.blue};
        background-color: ${({ theme }) => theme.colors.white};
        border-color: ${({ theme }) => theme.colors.blue};
      }

      @media only screen and (min-width: 1440px) {
        position: absolute;
        top: 78%;
        right: 9%;
      }
    `}
`;

export const StyledHashLink = styled(HashLink)`
  width: 100%;
  padding: 10.5px;

  font-family: ${({ theme }) => theme.fonts.regular};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  text-align: center;

  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.blue};
  border-radius: 12px;

  transition: transform ${({ theme }) => theme.transitions.regular},
    color ${({ theme }) => theme.transitions.regular};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.yellow};
  }

  @media only screen and (min-width: 768px) {
    padding: 9.5px;
    font-size: ${({ theme }) => theme.fontSizes.m};
    border-radius: 16px;
  }

  @media only screen and (min-width: 1440px) {
    align-self: center;
    max-width: 520px;
    padding: 17.5px;
    border-radius: ${({ theme }) => theme.radii.l};
  }

  ${({ variant }) =>
    variant === 'blue' &&
    css`
      color: ${({ theme }) => theme.colors.yellow};
      background-color: ${({ theme }) => theme.colors.blue};

      &:hover,
      &:focus {
        color: ${({ theme }) => theme.colors.white};
      }
    `}

  ${({ variant }) =>
    variant === 'yellow' &&
    css`
      color: ${({ theme }) => theme.colors.blue};
      background-color: ${({ theme }) => theme.colors.yellow};

      &:hover,
      &:focus {
        color: ${({ theme }) => theme.colors.primaryFont};
      }
    `}

  ${({ variant }) =>
    variant === 'white' &&
    css`
      color: ${({ theme }) => theme.colors.primaryFont};
      background-color: ${({ theme }) => theme.colors.white};

      &:hover,
      &:focus {
        color: ${({ theme }) => theme.colors.blue};
      }
    `}
`;

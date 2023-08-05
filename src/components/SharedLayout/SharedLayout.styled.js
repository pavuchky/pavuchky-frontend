import styled from 'styled-components';

export const StyledContainer = styled.div`
  max-width: 375px;
  padding-left: 8px;
  padding-right: 8px;
  margin: 0 auto;

  @media only screen and (min-width: 768px) {
    max-width: 768px;
    padding-left: 24px;
    padding-right: 24px;
  }

  @media only screen and (min-width: 1440px) {
    max-width: 1440px;
    padding-left: 16px;
    padding-right: 16px;
  }
`;

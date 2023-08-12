import styled from 'styled-components';
import { Pagination } from '@mui/material';

import { theme } from 'stylesheet/theme';
const { colors, radii, fonts, fontWeights, fontSizes, borders } = theme;

export const PaginationContainer = styled(Pagination)`
  width: 320px;

  margin-left: auto;
  margin-right: auto;

  display: flex;
  justify-content: space-around;

  & .Mui-selected {
    color: ${colors.blue};
    border-color: ${colors.blue} !important;
    background-color: transparent !important;
  }

  .MuiPaginationItem-page {
    background-color: transparent;
    width: 40px;
    height: 40px;

    border: ${borders.normal};
    border-color: ${colors.grey};
    border-radius: ${radii.round};
  }

  .MuiPaginationItem-previousNext {
    width: 40px;
    height: 40px;
    border: ${borders.normal};
    border-color: ${colors.grey};
    border-radius: ${radii.round};
  }

  .MuiPaginationItem-ellipsis {
    width: 40px;
    height: 40px;
    border: ${borders.normal};
    border-color: ${colors.grey};
    border-radius: ${radii.round};
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 768px) {
    width: 432px;

    .MuiPaginationItem-page {
      width: 48px;
      height: 48px;
    }

    .MuiPaginationItem-previousNext {
      width: 48px;
      height: 48px;
    }

    .MuiPaginationItem-ellipsis {
      width: 48px;
      height: 48px;
    }
  }

  @media (min-width: 1440px) {
    width: 592px;
  }
`;

export const ReviewsPaginationList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media (min-width: 1440px) {
  }
`;

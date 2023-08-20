import styled from 'styled-components';
import { Pagination } from '@mui/material';

import { theme } from 'stylesheet/theme';
const { fonts, fontSizes, fontWeights, colors, radii, borders } = theme;

export const PaginationContainer = styled(Pagination)`
  max-width: 320px;

  margin-left: auto;
  margin-right: auto;

  display: flex;
  justify-content: space-around;

  .MuiPaginationItem-root {
    margin: 0px;
    color: ${colors.grey};

    font-family: ${fonts.light};
    font-size: 14px;
    font-weight: ${fontWeights.light};

    .MuiPaginationItem-icon {
      fill: ${colors.blue};
    }

    @media (min-width: 768px) {
      font-size: ${fontSizes.xs};
    }

    @media (min-width: 1440px) {
      font-size: ${fontSizes.s};
    }
  }

  & .Mui-selected {
    color: ${colors.blue};
    border-color: ${colors.blue} !important;
    background-color: transparent !important;
  }

  .MuiPagination-ul {
    gap: 16px;

    @media (min-width: 1440px) {
      gap: 24px;
    }
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
    border-color: ${colors.blue} !important;
    border-radius: ${radii.round};
  }

  .Mui-disabled {
    border-color: ${colors.grey} !important;

    .MuiPaginationItem-icon {
      fill: ${colors.grey};
    }
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
    max-width: 432px;
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
    max-width: 592px;
    width: 592px;

    .MuiPaginationItem-page {
      width: 64px;
      height: 64px;
    }

    .MuiPaginationItem-previousNext {
      width: 64px;
      height: 64px;
    }

    .MuiPaginationItem-ellipsis {
      width: 64px;
      height: 64px;
    }
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
`;

import styled from 'styled-components';

import { theme } from '../../stylesheet/theme';
import { Pagination } from '@mui/material';

const { fontSizes, fontWeights, colors, fonts, borders, radii} = theme;

export const GalleryPagnation = styled(Pagination)`

  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;

  .MuiPaginationItem-root {
    margin: 0px 24px 0px 0px;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    color: ${colors.grey};
    font-size: ${fontSizes.s} !important;
    font-family: ${fonts.regular} !important;
    font-weight: ${fontWeights.light};
    padding: 0;

    .MuiPaginationItem-icon {
      stroke: ${colors.blue};
      /* width: 63px;
      height: 63px; */
      fill: ${colors.blue};
      stroke-width: 1px;
    }
  }

  & .Mui-Selected {
    
    .Mui-disabled {
      border-color: ${colors.grey} !important;
      .MuiPaginationItem-icon {
        fill: ${colors.grey} !important;
        stroke: ${colors.grey}  !important;
      }
    }
    .MuiPaginationItem-ellipsis {
    
      border: ${borders.normal};
      border-color: ${colors.grey};
      border-radius: ${radii.round};
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

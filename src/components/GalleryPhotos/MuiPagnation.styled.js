import styled from 'styled-components';

import { theme } from '../../stylesheet/theme';
import { Pagination } from '@mui/material';

const { fontSizes, fontWeights, colors, fonts } = theme;

export const GalleryPagnation = styled(Pagination)`
  width: 596px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  .MuiPaginationItem-root {
    margin: 0px 24px;
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }

  & .Mui-Selected {
    color: ${colors.blue};
    /* .MuiPagination-ul {
      display: flex;
      flex-direction: row;
      font-size: ${fonts.regular};
      font-weight: ${fontSizes.m};
      .MuiButtonBase-root {
        font-size: ${fonts.regular};
        font-weight: ${fontSizes.m};
      } */
    }
  }
`;

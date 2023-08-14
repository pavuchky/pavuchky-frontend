import styled from "styled-components";


import { theme } from '../../stylesheet/theme';
import { Pagination } from "@mui/material";

const { fontSizes, fontWeights, colors, fonts } = theme;


export const GalleryPagnation = styled(Pagination)`
  width: 596px;
  display: flex;
  justify-content: center;
  align-items: center;
  .MuiPaginationItem-root{
    margin: 0;
  } 
  & .Mui-Selected {
    .MuiPagination-ul{
        display: flex;
        flex-direction: row;
        gap: 16px;
    }
  }
`;

import styled from 'styled-components';
import { Pagination } from '@mui/material';
import ReactPlayer from 'react-player';
import { theme } from '../../stylesheet/theme';

const { fonts, fontSizes, fontWeights, colors, radii, borders} = theme;

export const VideoGalleryWrapper = styled.div`
  display: flex;
`;

export const VideoReactPlayer = styled(ReactPlayer)`
  width:327px !important;
`;

export const VideoMobileContainer = styled.ul`
margin-bottom: 24px;
  li {
    border: 1px solid ${colors.blue};
    border-radius: ${radii.s};
    overflow: hidden;
  }
`;

export const VideoText = styled.span`
  display: flex;
  padding-top: 16px;
  padding-left: 16px;
  padding-bottom: 16px;
 

  font-family: ${fonts.regular};
  font-size: ${fontSizes.xs};
  font-weight: ${fontWeights.regular};


  border-radius: 0px 0px 8px 8px;

  background-color: ${colors.white};

  @media (min-width: 768px) {
    font-family: ${fonts.light};
    font-size: ${fontSizes.s};
    font-weight: ${fontWeights.light};
    padding-bottom: 0;
    margin-bottom: 0;
    border: 0;
    border-top: 0px;
    border-radius: 0px;
    padding: 16px 16px 24px 16px;
  }
`;



export const MobPagination = styled(Pagination)`
  max-width: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;

  .MuiPaginationItem-root {
    margin: 0px 8px 0px 0px;
    width: 37px;
    height: 37px;
    border-radius: 50%;
    color: ${colors.grey};
    font-size: 14px !important;
    font-family: ${fonts.regular} !important;
    font-weight: ${fontWeights.light};
    padding: 0;

    .MuiPaginationItem-icon {
      fill: ${colors.blue};
      font-size: 14px;
    }
  }

  & .Mui-Selected {
    color: ${colors.blue};
    border-color: ${colors.blue} !important;
    background-color: transparent !important;

    .Mui-disabled {
      border-color: ${colors.grey} !important;
      .MuiPaginationItem-root.MuiPaginationItem-icon.Mui-disabled {
        fill: ${colors.grey} !important;
      }
    }
    .MuiPaginationItem-outlinedPrimary {
      margin: 0 !important;
    }
  }

  .MuiPaginationItem-previousNext {
   
    border: ${borders.normal};
    border-color: ${colors.blue} !important;
    border-radius: ${radii.round};
  }
`;

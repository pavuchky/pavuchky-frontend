import styled from 'styled-components';

import { theme } from '../../stylesheet/theme';
import ReactPlayer from 'react-player';
import { Pagination } from '@mui/material';

const { fontSizes, fontWeights, colors, fonts} = theme;


export const VideoTabGridContainer = styled.div`
  display: grid;
  grid-template-columns: 316px 316px;
  gap: 24px;
  margin-bottom: 32px;
  & :first-child {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    /* border: 1px solid #0069b5; */
  }
  & :last-child {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    /* border: 1px solid #0069b5; */
  }
`;

export const VideoTabReactPlayer = styled(ReactPlayer)`
  margin-bottom: 16px;
  border-radius: 10px 10px 0px 0px;

`;

export const VideoTabButton = styled.button`
  width: 656px;
  height: 48px;
  border-radius: 16px;
  background: ${colors.blue};
  padding: 10px;
  justify-content: center;
  align-items: center;
  font-family: ${fonts.regular};
  font-size: ${fontSizes.m};
  font-style: normal;
  font-weight: ${fontWeights.regular};
  line-height: normal;
  cursor: pointer;
  outline: transparent;
  color: ${colors.white};

  &:hover {
    color: ${colors.yellow};
  }
  &:focus {
    outline: transparent;
    color: ${colors.yellow};
  }
  @media (min-width: 1440px) {
    display: none;
  }
`;


/**==========================DesctopStyles================= */


export const VideoDesctopGridContainer = styled.div`
  display: grid;
  grid-template-columns: 409px 409px 409px;
  gap: 26px;
  margin-top: 44px;
  margin-bottom: 44px;
  & :first-child {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  & :last-child {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
`;

export const VideoDesctopReactPlayer = styled(ReactPlayer)`
  margin-bottom: 16px;
  border-radius: 8px 8px 0px 0px;
`;
export const VideoPaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;


export const VideoPagnation = styled(Pagination)`
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
      fill: ${colors.blue};
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
  }
`;

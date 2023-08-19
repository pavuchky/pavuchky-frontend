import styled from 'styled-components';

import { theme } from '../../stylesheet/theme';
import ReactPlayer from 'react-player';
import { Pagination } from '@mui/material';

const { fontSizes, fontWeights, colors, fonts, radii } = theme;

export const VideoTabGridContainer = styled.ul`
  display: grid;
  grid-template-columns: 316px 316px;
  gap: 24px;
  margin-bottom: 32px;

  li {
    border: 1px solid ${colors.blue};
    border-radius: ${radii.s};
    overflow: hidden;
  }
`;

export const VideoTabReactPlayer = styled(ReactPlayer)`
  height: 421px !important;
`;

export const VideoTabButton = styled.button`
  width: 100%;
  height: 48px;
  padding: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: ${fonts.regular};
  font-size: ${fontSizes.m};
  font-weight: ${fontWeights.regular};

  cursor: pointer;
  border-radius: 16px;
  outline: transparent;
  color: ${colors.white};
  background-color: ${colors.blue};

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

export const VideoDesktopGridContainer = styled.ul`
  display: grid;
  grid-template-columns: 409px 409px 409px;
  gap: 26px;
  margin-top: 44px;
  margin-bottom: 44px;

  li {
    border: 1px solid ${colors.blue};
    border-radius: ${radii.s};
    overflow: hidden;
  }
`;

export const VideoDesktopReactPlayer = styled(ReactPlayer)`
  height: 421px !important;
`;

export const VideoPaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const VideoPagination = styled(Pagination)`
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

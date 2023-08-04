import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import warriorBgImgMob from '../../assets/images/contribution/warrior_mob.png';
import warriorBgImgMobRetina from '../../assets/images/contribution/warrior_mob@2x.png';
import warriorBgImgTablet from '../../assets/images/contribution/warrior_tablet.png';
import warriorBgImgTabletRetina from '../../assets/images/contribution/warrior_tablet@2x.png';
import warriorBgImgDesk from '../../assets/images/contribution/warrior_desk.png';
import warriorBgImgDeskRetina from '../../assets/images/contribution/warrior_desk@2x.png';

import weavingBgMobImg from '../../assets/images/contribution/weaving_mob.png';
import weavingBgImgMobRetina from '../../assets/images/contribution/weaving_mob@2x.png';
import weavingBgImgTablet from '../../assets/images/contribution/weaving_tablet.png';
import weavingBgImgTabletRetina from '../../assets/images/contribution/weaving_tablet@2x.png';
import weavingBgImgDesk from '../../assets/images/contribution/weaving_desk.png';
import weavingBgImgDeskRetina from '../../assets/images/contribution/weaving_desk@2x.png';

export const ContributeSection = styled.section`
  padding: ${({ theme }) => theme.spacing(9)} ${({ theme }) => theme.spacing(4)};

  @media only screen and (min-width: 768px) {
    padding: ${({ theme }) => theme.spacing(8)};
    margin: ${({ theme }) => theme.spacing(11)} 0;

    background-image: linear-gradient(
        ${({ theme }) => theme.colors.photoBg},
        ${({ theme }) => theme.colors.photoBg}
      ),
      url(${weavingBgImgTablet}), url(${warriorBgImgTablet});

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(
          ${({ theme }) => theme.colors.photoBg},
          ${({ theme }) => theme.colors.photoBg}
        ),
        url(${weavingBgImgTabletRetina}), url(${warriorBgImgTabletRetina});
    }

    background-size: cover, 432px, cover;
    background-repeat: no-repeat;
    background-position: center, bottom right, center;

    border-radius: ${({ theme }) => theme.radii.m};
  }

  @media only screen and (min-width: 1280px) {
    padding-top: ${({ theme }) => theme.spacing(11)};
    padding-bottom: ${({ theme }) => theme.spacing(12)};
    padding-left: ${({ theme }) => theme.spacing(15.75)};
    padding-right: ${({ theme }) => theme.spacing(15.75)};
    margin: ${({ theme }) => theme.spacing(16)} 0;

    background-image: linear-gradient(
        ${({ theme }) => theme.colors.photoBg},
        ${({ theme }) => theme.colors.photoBg}
      ),
      url(${weavingBgImgDesk}), url(${warriorBgImgDesk});

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(
          ${({ theme }) => theme.colors.photoBg},
          ${({ theme }) => theme.colors.photoBg}
        ),
        url(${weavingBgImgDeskRetina}), url(${warriorBgImgDeskRetina});
    }

    background-size: cover, 884px, cover;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1)};

  margin-bottom: ${({ theme }) => theme.spacing(3)};

  color: ${({ theme }) => theme.colors.white};

  @media only screen and (max-width: 767px) {
    min-height: 227px;
    padding-top: ${({ theme }) => theme.spacing(4)};
    padding-left: ${({ theme }) => theme.spacing(4)};

    border-radius: ${({ theme }) => theme.spacing(4)};

    background-image: linear-gradient(
        ${({ theme }) => theme.colors.photoBg},
        ${({ theme }) => theme.colors.photoBg}
      ),
      url(${weavingBgMobImg}), url(${warriorBgImgMob});

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(
          ${({ theme }) => theme.colors.photoBg},
          ${({ theme }) => theme.colors.photoBg}
        ),
        url(${weavingBgImgMobRetina}), url(${warriorBgImgMobRetina});
    }

    background-size: cover, 250px, cover;
    background-repeat: no-repeat;
    background-position: center, bottom right, center;
  }

  @media only screen and (min-width: 768px) {
    gap: ${({ theme }) => theme.spacing(3)};
    margin-bottom: ${({ theme }) => theme.spacing(13.75)};
  }

  @media only screen and (min-width: 1280px) {
    gap: ${({ theme }) => theme.spacing(7)};
    margin-bottom: 289px;
  }
`;

export const ContributeTitle = styled.h3`
  max-width: 222px;

  font-family: ${({ theme }) => theme.fonts.headRegular};
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  letter-spacing: -0.8px;

  @media only screen and (min-width: 768px) {
    max-width: 404px;
    font-size: ${({ theme }) => theme.fontSizes.l};
    letter-spacing: -1.44px;
  }

  @media only screen and (min-width: 1280px) {
    max-width: 692px;
    font-size: ${({ theme }) => theme.fontSizes.xl};
    letter-spacing: -2.4px;
  }
`;

export const ContributeDescr = styled.p`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.regular};

  @media only screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.m};
  }
`;

export const LinksList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(4)};

  @media only screen and (min-width: 1280px) {
    flex-direction: row;
    justify-content: flex-start;
    gap: ${({ theme }) => theme.spacing(16)};
  }
`;

export const LinksListItem = styled.li`
  min-width: 100%;
  border-radius: 12px;
  overflow: hidden;

  @media only screen and (min-width: 768px) {
    border-radius: 16px;
  }

  @media only screen and (min-width: 1280px) {
    min-width: 520px;
    border-radius: ${({ theme }) => theme.radii.l};
  }
`;

export const DonateStyledLink = styled(HashLink)`
  padding: 10.5px;

  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  text-align: center;
  color: ${({ theme }) => theme.colors.white};

  background-color: ${({ theme }) => theme.colors.blue};
  transition: color ${({ theme }) => theme.transitions.regular};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.yellow};
  }

  @media only screen and (min-width: 768px) {
    padding: 9.5px;
    font-size: ${({ theme }) => theme.fontSizes.m};
  }

  @media only screen and (min-width: 1280px) {
    padding: 17.5px;
  }
`;

export const OrderStyledLink = styled(Link)`
  padding: 10.5px;

  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  text-align: center;
  color: ${({ theme }) => theme.colors.primaryFont};

  background-color: ${({ theme }) => theme.colors.yellow};
  transition: color ${({ theme }) => theme.transitions.regular};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.blue};
  }

  @media only screen and (min-width: 768px) {
    padding: 9.5px;
    font-size: ${({ theme }) => theme.fontSizes.m};
  }

  @media only screen and (min-width: 1280px) {
    padding: 17.5px;
  }
`;

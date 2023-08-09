import styled from 'styled-components';
import { theme } from '../../stylesheet/theme';
import { HashLink } from 'react-router-hash-link';

const { fontSizes, fontWeights, colors, fonts } = theme;

export const FooterTabContainer = styled.footer`
  margin: 0 auto;
  border-radius: 20px;
  background: ${colors.gradientMain};
  box-shadow: 4px 8px 25px 0px rgba(176, 193, 243, 0.15);

  @media (min-width: 768px) {
    max-width: 768px;
    margin-bottom: 24px;
    padding: 32px 47px;
  }
  @media (min-width: 1440px) {
    max-width: 1440px;
    padding: 44px;
    margin: 0 16px;
    margin-bottom: 16px;
    border-radius: 25px;
    font-size: ${fontSizes.m};
  }
`;
export const FooterSocialTabContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
  @media (min-width: 1440px) {
    margin-bottom: 36px;
  }
`;
export const FooterSocialTabLinks = styled.ul`
  color: ${colors.secondaryFont};
  display: flex;
  flex-direction: row;
  gap: 28px;
`;
export const FooterTabSocialTitle = styled.p`
  margin-bottom: 15px;
  font-family: ${fonts.light};
  font-size: ${fontSizes.xs};
  font-style: normal;
  font-weight: ${fontWeights.light};
  color: ${colors.secondaryFont};
  font-family: ${fonts.regular};
  @media (min-width: 1440px) {
    font-size: ${fontSizes.s};
    font-family: ${fonts.light};
    font-weight: ${fontWeights.light};
    margin-bottom: 10px;
  }
`;
export const FooterTabListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
  @media (min-width: 1440px) {
    margin-bottom: 36px;
  }
`;
export const FooterTabList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 28px;
  font-size: ${fontSizes.xs};
  font-weight: ${fontWeights.regular};
  color: ${colors.secondaryFont};
  align-items: center;
  justify-content: center;
  font-family: ${fonts.regular};
  @media (min-width: 1440px) {
    font-size: ${fontSizes.s};
    font-family: ${fonts.light};
    font-weight: ${fontWeights.light};
  }
`;
export const FooterTabSubList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 28px;
  font-size: ${fontSizes.xs};
  font-weight: ${fontWeights.regular};
  color: ${colors.secondaryFont};
  align-items: center;
  justify-content: center;
  margin-left: 28px;
  font-family: ${fonts.regular};
  @media (min-width: 1440px) {
    font-size: ${fontSizes.s};
    font-family: ${fonts.light};
    font-weight: ${fontWeights.light};
  }
`;

export const FooterTabSubLinks = styled(HashLink)`
  margin-top: 0px;
`;

export const FooterTabTel = styled.p`
  margin-bottom: 24px;
  font-size: ${fontSizes.xs};
  font-weight: ${fontWeights.light};
  color: ${colors.secondaryFont};
  text-align: center;
  font-family: ${fonts.regular};
  @media (min-width: 1440px) {
    font-size: ${fontSizes.s};
    font-family: ${fonts.light};
    font-weight: ${fontWeights.light};
    margin-bottom: 36px;
  }
`;
export const FooteTabAllReserved = styled.div`
  font-size: 14px;
  font-weight: ${fontWeights.light};
  color: ${colors.secondaryFont};
  text-align: center;
  @media (min-width: 1440px) {
    font-size: ${fontSizes.s};
  }
`;

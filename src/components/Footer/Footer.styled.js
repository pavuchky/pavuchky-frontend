import styled from 'styled-components';
import { theme } from '../../stylesheet/theme';
import { HashLink } from 'react-router-hash-link';

const { fontSizes, fontWeights, colors, fonts } = theme;

export const FooterContainer = styled.footer`
  padding: 24px 50px;
  margin: 0 8px;
  margin-bottom: 16px;
  border-radius: 16px;
  background: ${colors.gradientFooter};
  box-shadow: 4px 8px 25px 0px rgba(176, 193, 243, 0.15);
`;
export const FooterSocialMediaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
`;
export const FooterSocialMediaLinks = styled.ul`
  color: ${colors.secondaryFont};
  display: flex;
  flex-direction: row;
  gap: 28px;
`;
export const FooterSocialTitle = styled.p`
  margin-bottom: 15px;
  font-family: ${fonts.regular};
  font-size: ${fontSizes.xs};
  font-style: normal;
  font-weight: ${fontWeights.regular};
  color: ${colors.secondaryFont};
`;
export const FooterList = styled.ul`
  display: grid;
  grid-template-columns: 50% 50%;
  column-gap: 45px;
  row-gap: 16px;
  font-size: ${fontSizes.xs};
  font-weight: ${fontWeights.regular};
  color: ${colors.secondaryFont};
`;
export const FooterSubList = styled.ul`
  display: grid;
  grid-template-columns: 50% 50%;
  column-gap: 45px;
  row-gap: 16px;
  font-size: ${fontSizes.xs};
  font-weight: ${fontWeights.regular};
  color: ${colors.secondaryFont};
  font-family: ${fonts.regular};
`;

export const FooterSubLinks = styled(HashLink)``;

export const FooterTel = styled.p`
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: ${fontSizes.xs};
  font-weight: ${fontWeights.regular};
  color: ${colors.secondaryFont};
  text-align: center;
  font-family: ${fonts.regular};
`;
export const FooterAllReserved = styled.div`
  font-size: 14px;
  font-weight: ${fontWeights.light};
  color: ${colors.secondaryFont};
  text-align: center;
`;

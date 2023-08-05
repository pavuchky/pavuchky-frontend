import styled from 'styled-components';
import { theme } from '../../stylesheet/theme';

const { fontSizes, fontWeights, colors, fonts } = theme;

export const FooterContainer = styled.section`
  padding: 24px 51px;
  margin-top: 36px;
  margin-bottom: 16px;
  border-radius: 16px;
  background: ${colors.gradientMain};
  box-shadow: 4px 8px 25px 0px rgba(176, 193, 243, 0.15);

  @media (min-width: 768px) {
    margin-top: 44px;
    margin-bottom: 44px;
    padding: 32px 32px 58px 32px;
  }
  @media (min-width: 1440px) {
    margin: 64px auto;
    padding: 44px 64px;
    border-radius: 20px;
  }
`;
export const FooterSocialMediaContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 40px;


`
export const FooterSocialMediaLinks = styled.div`
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
  column-gap: 64px;
  row-gap: 16px;
  font-size: ${fontSizes.xs};
  font-weight: ${fontWeights.regular};
  color: ${colors.secondaryFont};

`;

export const FooterTel = styled.p`
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: ${fontSizes.xs};
  font-weight: ${fontWeights.regular};
  color: ${colors.secondaryFont};
  text-align: center;
`;
export const FooterAllReserved = styled.div`
  margin-bottom: 24px;
  font-size: ${fontSizes.xs};
  font-weight: ${fontWeights.regular};
  color: ${colors.secondaryFont};
  text-align: center;
`;
import styled from 'styled-components';
import { theme } from '../../stylesheet/theme';

const { fontSizes, fontWeights, colors, fonts } = theme;


export const FooterTabContainer = styled.section`
  border-radius: 20px;
  background: ${colors.gradientMain};
  box-shadow: 4px 8px 25px 0px rgba(176, 193, 243, 0.15);

  @media (min-width: 768px) {
    margin-top: 44px;
    margin-bottom: 44px;
    padding: 47px 32px;
  }
  @media (min-width: 1440px) {
   
    padding: 44px 333.5px;
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
export const FooterSocialTabLinks = styled.div`
  color: ${colors.secondaryFont};
  display: flex;
  flex-direction: row;
  gap: 28px;

`;
export const FooterTabSocialTitle = styled.p`
  margin-bottom: 15px;
  font-family: ${fonts.regular};
  font-size: ${fontSizes.xs};
  font-style: normal;
  font-weight: ${fontWeights.regular};
  color: ${colors.secondaryFont};
  @media (min-width: 1440px) {
    font-size: ${fontSizes.m};
    margin-bottom: 10px;
  }
`;
export const FooterTabList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 28px;
  font-size: ${fontSizes.xs};
  font-weight: ${fontWeights.regular};
  color: ${colors.secondaryFont};
  margin-bottom: 24px;
  align-items: center;
  justify-content: center;
  @media (min-width: 1440px) {
    font-size: ${fontSizes.m};
    margin-bottom: 36px;
  }
`;
export const FooterTabTel = styled.p`
  margin-bottom: 24px;
  font-size: ${fontSizes.xs};
  font-weight: ${fontWeights.regular};
  color: ${colors.secondaryFont};
  text-align: center;
  @media (min-width: 1440px) {
    font-size: ${fontSizes.m};
    margin-bottom: 36px;
  }
`;
export const FooteTabAllReserved = styled.div`
  font-size: 14px;
  font-weight: ${fontWeights.regular};
  color: ${colors.secondaryFont};
  text-align: center;
  @media (min-width: 1440px) {
    font-size: ${fontSizes.m};
  }
`;
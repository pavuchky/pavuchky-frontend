import styled from 'styled-components';
import { theme } from '../../stylesheet/theme';

const { fontSizes, fontWeights, colors, fonts } = theme;

export const FooterContainer = styled.section`
  padding: 28px 16px 30px;
  margin-top: 36px;
  margin-bottom: 36px;
  border-radius: 16px;
  background: linear-gradient(
    272deg,
    rgb(189 211 242 / 19%) 0%,
    rgba(255, 255, 255, 0) 100%
  );

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

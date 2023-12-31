export const theme = {
  colors: {
    primaryFont: '#2B2B2B',
    secondaryFont: '#4C4C4C',
    black: '#000000',
    white: '#ffffff',
    grey: '#B8B6B7',
    lightGrey: '#EBECEC',
    yellow: '#FFED00',
    blue: '#0069B5',
    lightBlue: 'rgba(6, 131, 255, 0.97)',
    pink: '#E78585',
    photoBg: 'rgba(0, 0, 0, 0.2)',
    backdrop: 'rgba(0, 0, 0, 0.23)',
    gradientMain: 'linear-gradient(224deg, #8A90F6 0%, #BDD4F2 100%)',
    gradientFooter: 'linear-gradient(137deg, #8A90F6 0%, #BDD4F2 100%)',
    gradientBackground:
      'linear-gradient(320deg, rgba(189, 211, 242, 0.3) 0%, rgba(255, 255, 255, 0.00) 100%)',
    gradientReversed:
      'linear-gradient(100deg, rgba(189, 211, 242, 0.3) 0%, rgba(255, 255, 255, 0.00) 100%)',
  },

  spacing: value => `${4 * value}px`,

  fonts: {
    regular: 'e-Ukraine-Regular, sans-serif',
    light: 'e-Ukraine-Light, sans-serif',
    medium: 'e-Ukraine-Medium, sans-serif',
    headRegular: 'e-Ukraine-Head-Regular, sans-serif',
    headLight: 'e-Ukraine-Head-Light, sans-serif',
    headMedium: 'e-Ukraine-Head-Medium, sans-serif',
  },

  fontSizes: {
    xs: '16px',
    s: '20px',
    m: '24px',
    l: '36px',
    xl: '60px',
    xxl: '100px',
  },

  fontWeights: {
    light: 300,
    regular: 400,
  },

  lineHeights: {
    secondary: 1.87,
  },

  borders: {
    none: 'none',
    normal: '1px solid',
    medium: '2px solid ',
  },

  radii: {
    none: '0',
    round: '50%',
    xs: '9px',
    s: '10px',
    m: '20px',
    l: '24px',
    xl: '25px',
  },

  shadows: {
    primary: '4px 8px 25px 0px rgba(176, 193, 243, 0.15)',
  },

  transitions: {
    regular: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
};

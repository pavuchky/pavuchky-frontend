export const customStyles = {
  option: (provided, state) => {
    return {
      ...provided,
      width: '95%',
      margin: '8px',
      border: 'none',
      borderRadius: state.isFocused ? '2px' : '0',
      outline: 'none',
      background: state.isFocused
        ? 'linear-gradient(270deg, rgb(138, 144, 246) 0%, rgb(189, 212, 242) 100%)'
        : 'transparent',
      color: '#000',
      cursor: 'pointer',
      fontFamily: 'e-Ukraine-Light, sans-serif',
      fontSize: '14px',
      fontWeight: '300',

      '@media (min-width: 768px)': {
        width: '97%',
        fontFamily: 'e-Ukraine-Regular, sans-serif',
        fontSize: '16px',
        fontWeight: '400',
        lineHeight: '1.87',
      },

      '&:hover': {
        background:
          'linear-gradient(270deg, rgb(138, 144, 246) 0%, rgb(189, 212, 242) 100%)',
      },
    };
  },

  control: (styles, state) => {
    const hasValue =
      state.selectProps.value !== null && state.selectProps.value !== undefined;

    return {
      ...styles,
      height: 'auto',
      minHeight: '23px',
      borderColor: 'transparent',
      border: 'none',
      borderBottom: '1px solid #2B2B2B',
      borderRadius: 0,
      boxShadow: 'none',
      backgroundColor: hasValue
        ? state.isFocused
          ? 'transparent'
          : 'rgb(232, 240, 254)'
        : 'transparent',
      fontFamily: 'e-Ukraine-Light, sans-serif',
      fontSize: '14px',
      fontWeight: '300',

      '@media (min-width: 375px)': {
        width: '327px',
      },

      '@media (min-width: 768px)': {
        minHeight: '31px',
        width: '656px',
        fontFamily: 'e-Ukraine-Regular, sans-serif',
        fontSize: '16px',
        fontWeight: '400',
        lineHeight: '1.87',
      },

      '@media (min-width: 1440px)': {
        width: '528px',
      },

      '& .css-1xc3v61-indicatorContainer': {
        padding: 0,
        color: 'transparent',
      },

      '& .css-15lsz6c-indicatorContainer': {
        padding: 0,
        color: 'transparent',
      },
    };
  },

  valueContainer: provided => ({
    ...provided,
    padding: 0,
  }),

  menu: provided => {
    return {
      ...provided,
      borderRadius: '0px',
    };
  },

  placeholder: provided => ({
    ...provided,
    position: 'absolute',
    margin: 0,
    fontFamily: 'e-Ukraine-Light, sans-serif',
    fontSize: '14px',
    fontWeight: '300',
    color: 'gray',

    '@media (min-width: 768px)': {
      fontFamily: 'e-Ukraine-Regular, sans-serif',
      fontSize: '16px',
      fontWeight: '400',
      lineHeight: '1.87',
    },
  }),

  indicatorSeparator: () => ({}),

  indicators: () => {
    return {
      cursor: 'pointer',
    };
  },

  input: provided => ({
    ...provided,
    position: 'relative',
    width: '270px',
    height: '23px',
    padding: 0,
    margin: 0,
    fontFamily: 'e-Ukraine-Light, sans-serif',
    fontSize: '14px',
    fontWeight: '300',
    borderColor: 'transparent',

    '@media (min-width: 375px)': {
      width: '327px',
    },

    '@media (min-width: 768px)': {
      width: '656px',
      height: '31px',
      fontFamily: 'e-Ukraine-Regular, sans-serif',
      fontSize: '16px',
      fontWeight: '400',
      lineHeight: '1.87',
    },

    '@media (min-width: 1440px)': {
      width: '528px',
    },
  }),
};

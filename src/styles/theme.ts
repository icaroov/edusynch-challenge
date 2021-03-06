export default {
  grid: {
    container: '130rem',
    gutter: '3.2rem'
  },
  border: {
    radius: '0.4rem'
  },
  font: {
    family: "'Open Sans', sans-serif",
    secondary:
      "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    bold: 700,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem'
    }
  },
  colors: {
    primary: '#7A57FD',
    secondary: '#FFD74F',
    tertiary: '#FFEAA4',
    mainBg: '#6135D7',
    darkBg: '#200E64',
    lightBg: '#E5E5E5',
    white: '#FFFFFF',
    black: '#030517',
    lighPink: '#CFC9E9',
    overlay: 'rgba(36, 39, 59, 0.8)',
    inputBg: '#9a7ffd'
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  breakpoints: {
    xxsmall: `(min-width: 320px)`,
    xsmall: `(min-width: 375px)`,
    mobile: `(min-width: 425px)`,
    tabletMin: `(min-width: 768px)`,
    tabletMax: `(max-width: 768px)`,
    laptop: `(min-width: 1024px)`,
    laptopL: `(min-width: 1440px)`,
    desktop: `(min-width: 1560px)`
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  }
} as const

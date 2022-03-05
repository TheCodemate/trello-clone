import { DefaultTheme } from 'styled-components';

export const defaultTheme: DefaultTheme = {
  backgroundColor: {
    primary: 'rgb(13, 115, 174)',
    secondary: 'rgb(10, 97, 147);',
    tertiary: 'rgb(78, 141, 177)',
    quaternary: 'rgb(227, 227, 227)',
    quinary: 'rgb(255, 255, 255)'
  },
  textColor: {
    primary: 'rgb(255, 255, 255)',
    secondary: 'rgb(124, 178, 210)',
    tertiary: 'rgb(82, 82, 83)',
    quaternary: 'rgb(146, 146, 146)',
    quinary: ''
  },
  breakpoint: {
    mobile: '375px',
    tablet: '600px',
    laptop: '1200px',
    desktop: '1600px'
  }
};

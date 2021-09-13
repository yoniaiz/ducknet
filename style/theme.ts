import { screenSize } from '@constants/sizes';

export const theme = {
  colors: {
    black: '#444444',
    white1: '#EEEEEE',
    white2: '#EBEBEB',
    green1: '#54E1A7',
    green2: '#0CD15B',
    purple1: '#9E65BB',
    purple2: '#362987',
    blue1: '#29B7F3',
    blue2: '#0C378D',
    yellow: '#E89938',
    redOrange: '#D33F21',
    grey1: '#e0e0e0',
  },
  gradients: {
    blueRtl: 'linear-gradient(86.65deg, #0c378d 2.76%, #29b7f3 97.24%)',
    blueLtr: 'linear-gradient(#29b7f3 97.24%, 86.65deg, #0c378d 2.76%)',
    purpleRtl: 'linear-gradient(270deg, #9E65BB 0%, #362987 100%);',
  },
  shadows: {
    shadow1: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    shadow2: '0px 2px 2px rgba(0, 0, 0, 0.1)',
    shadow3: '0px 2px 3px rgba(0, 0, 0, 0.15)',
    shadow4: '0px 1px 4px rgba(0, 0, 0, 0.25);',
  },
  fontSizes: {
    xxSmall: '1.2rem',
    xSmall: '1.4rem',
    small: '1.6rem',
    medium: '2.4rem',
    large: '3.2rem',
  },
  size: screenSize,
  device: {
    min: {
      smallPhone: `min-width: ${screenSize.xs}`,
      tablet: `min-width: ${screenSize.sm}`,
      smallLaptop: `min-width: ${screenSize.lg}`,
    },
    max: {
      smallPhone: `max-width: ${screenSize.xs}`,
      tablet: `max-width: ${screenSize.sm}`,
      smallLaptop: `max-width: ${screenSize.lg}`,
    },
  },
};

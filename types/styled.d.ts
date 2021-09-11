import { theme } from '@style/theme';

export type Shadows = typeof theme.shadows;

export type Colors = typeof theme.colors;

export type FontSizes = typeof theme.fontSizes;

export type Gradients = typeof theme.gradients;

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors;
    fontSizes: FontSizes;
    shadows: Shadows;
    gradients: Gradients;
  }
}

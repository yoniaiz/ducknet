import { theme } from '@style/theme';

export type Shadows = typeof theme.shadows;

export type Colors = typeof theme.colors;

export type FontSizes = typeof theme.fontSizes;

export type Gradients = typeof theme.gradients;

export type Size = typeof theme.size;

export type Media = typeof theme.device;

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors;
    fontSizes: FontSizes;
    shadows: Shadows;
    gradients: Gradients;
    device: Media;
    size: Size;
  }
}

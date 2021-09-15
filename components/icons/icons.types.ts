import { DefaultTheme } from 'styled-components';

export interface IconProps {
  size: number | string;
  stroke?: keyof DefaultTheme['colors'] | 'currentColor';
  children?: JSX.Element;
}

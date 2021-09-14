import { theme } from '@style';
import { IconProps } from './icons.types';

export const XIcon = ({ size, stroke = 'currentColor' }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    height={size}
    width={size}
    viewBox="0 0 24 24"
    stroke={stroke === 'currentColor' ? stroke : theme.colors[stroke]}
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

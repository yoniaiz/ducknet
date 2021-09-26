import { theme } from '@style';
import { RenderOptions, render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

export const renderWithStyledComponents = (children: React.ReactNode, options?: RenderOptions) => {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>, options);
};

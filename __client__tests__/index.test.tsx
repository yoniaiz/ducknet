import { render, RenderOptions } from '@testing-library/react';
import Home from '@pages/index';
import { ThemeProvider } from 'styled-components';
import { theme } from '@style/theme';

const renderWithStyledComponents = (children: React.ReactNode, options?: RenderOptions) => {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>, options);
};

describe('Home', () => {
  it('renders a heading', () => {
    renderWithStyledComponents(<Home />);
  });
});

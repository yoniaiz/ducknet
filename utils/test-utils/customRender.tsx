import { theme } from '@style';
import { RenderOptions, render } from '@testing-library/react';
import { MockedProvider, MockedProviderProps } from '@apollo/client/testing';
import { ThemeProvider } from 'styled-components';

const RenderWithStyledComponents: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

const RenderWithApolloClient: React.FC<MockedProviderProps> = ({ children, ...mockProps }) => (
  <MockedProvider {...mockProps}>
    <RenderWithStyledComponents>{children}</RenderWithStyledComponents>
  </MockedProvider>
);

export const renderWithStyledComponents = (children: React.ReactNode, options?: RenderOptions) => {
  return render(<RenderWithStyledComponents>{children}</RenderWithStyledComponents>, options);
};

export const renderWithApolloProvider = (
  children: React.ReactNode,
  props: MockedProviderProps = { addTypename: false, mocks: [] },
  options?: RenderOptions
) => {
  render(<RenderWithApolloClient {...props}>{children}</RenderWithApolloClient>, options);
};

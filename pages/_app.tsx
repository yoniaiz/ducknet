import { ThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app';
import { Normalize } from 'styled-normalize';
import { theme, GlobalStyle } from '@style';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Normalize />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
export default MyApp;

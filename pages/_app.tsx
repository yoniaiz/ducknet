import { ThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app';
import { Normalize } from 'styled-normalize';
import { theme, GlobalStyle } from '@style';
import Layout from '@components/layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Normalize />
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
export default MyApp;

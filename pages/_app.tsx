import { StylesProvider } from '@material-ui/core/styles';
import { Provider as AuthProvider } from 'next-auth/client';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app';
import { theme, GlobalStyle } from '@style';
import Layout from '@components/layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider session={pageProps.session}>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <CssBaseline />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </StylesProvider>
    </AuthProvider>
  );
}

export default MyApp;

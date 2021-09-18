import { StylesProvider } from '@material-ui/core/styles';
import { Provider as AuthProvider } from 'next-auth/client';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app';
import { theme, GlobalStyle } from '@style';
import Layout from '@components/layout';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider session={pageProps.session}>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <GlobalStyle />
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <ToastContainer
            position="top-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            pauseOnHover
          />
        </ThemeProvider>
      </StylesProvider>
    </AuthProvider>
  );
}

export default MyApp;

import React from 'react';
import '~/socialEngine';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'cropperjs/dist/cropper.css';
import { appWithTranslation } from '~/locales/i18n'
import theme from '~/components/theme';
import withRedux, { MakeStore } from 'next-redux-wrapper';
import { Provider } from 'react-redux';
import configureStore from '~/store/configureStore';
import '~/styles/app.css';
import { authorizeActions, globalActions } from '~/store/actions';

class MyApp extends App {

  static async getInitialProps({Component, ctx} : any) {
    const {req, store, isServer} = ctx
    if (isServer) {
      console.log(isServer)
      store.dispatch(authorizeActions.subcribeAuthorizeStateChange(req))
    }
    return {
        pageProps: {
            ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {})
        }
    };

}
  componentDidMount() {
    const { Component, pageProps, store } = this.props as any;
    store.dispatch(authorizeActions.asyncSetUserLoginStatus())
    // - Initialize languages
    store.dispatch(authorizeActions.subcribeAuthorizeStateChange())
    store.dispatch(globalActions.initLocale())
    // Remove the server-side injected CSS.
    const jssStyles: any = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps, store } = this.props as any;

    return (
      <React.Fragment>
        <Head>
          <title>My page</title>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        </Head>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Provider store={store}>
            <Component {...pageProps} />
            </Provider>
          </ThemeProvider>
      </React.Fragment>
    );
  }
}

export default withRedux(configureStore, {debug: false})(appWithTranslation(MyApp))
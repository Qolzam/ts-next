import React from 'react';
import Router from 'next/router'
import '~/socialEngine';
import axios from 'axios'
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
import { authorizeActions, globalActions, circleActions } from '~/store/actions';
import NProgress from 'nprogress'
import { fromJS } from 'immutable'
import ICircleService from '~/core/services/circles/ICircleService';
import { IUserTieService } from '~/core/services/circles/IUserTieService';
import { SocialProviderTypes } from '~/core/socialProviderTypes';
import { provider } from '~/socialEngine';
import { authorizeSelector } from '~/store/reducers/authorize';
import withReduxSaga from 'next-redux-saga'

Router.events.on('routeChangeStart', url => {

  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())
const circleService: ICircleService = provider.get<ICircleService>(SocialProviderTypes.CircleService)
const userTieService: IUserTieService = provider.get<IUserTieService>(SocialProviderTypes.UserTieService)
class MyApp extends App {

  static async getInitialProps({ Component, ctx }: any) {
    const { req, store, isServer } = ctx
    const dispatched = [];
    if (isServer) {
      axios.defaults.headers.get.Cookie = req.headers.cookie;
      store.dispatch(authorizeActions.subcribeAuthorizeStateChange(req))
      store.dispatch(globalActions.initLocale())
      store.dispatch(globalActions.loadInitialData(true))
    }
    const initialProps = (Component.getInitialProps ? await Component.getInitialProps(ctx) : {})
    return {
      pageProps: {
        ...initialProps
      }
    };

  }
  componentDidMount() {
    const { Component, pageProps, store } = this.props as any;
    store.dispatch(authorizeActions.asyncSetUserLoginStatus())
    // - Initialize languages
    // Remove the server-side injected CSS.
    const jssStyles: any = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps, store } = this.props as any;

    const getLayout =
      Component.getLayout || ((page: any) => page)
    return (
      <React.Fragment>
        <Head>
          <title>Telar Social Network - Cloud Native base</title>
          <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Provider store={store}>
            {getLayout(<Component {...pageProps} />)}
          </Provider>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

export default withRedux(configureStore, {
  serializeState: state => state.toJS(),
  deserializeState: state => fromJS(state),
  debug: false
})(appWithTranslation(withReduxSaga(MyApp)))
// - Import external components
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Router from 'next/router'
import Footer from '~/layouts/footer';
import React, { Component } from 'react';
import { withTranslation } from '~/locales/i18n';
import { connect } from 'react-redux';
import { withRouter } from 'next/router';
import config from '~/config';

import LoginComponent from '~/containers/login';
import { ILoginWrapperProps } from '~/containers/loginWrapper/ILoginWrapperProps';
import { ILoginWrapperState } from '~/containers/loginWrapper/ILoginWrapperState';
import { loginWrapperStyles } from '~/containers/loginWrapper/loginWrapperStyles';


export class LoginWrapperComponent extends Component<ILoginWrapperProps, ILoginWrapperState> {
  static async getInitialProps() {
    return {
      namespacesRequired: ['common'],
    }
  }
  /**
   * Component constructor
   */
  constructor(props: ILoginWrapperProps) {
    super(props)
    this.state = {
    }
  }

  /**
   * Reneder component DOM
   */
  render() {
    const { classes} = this.props

    return (
      <div className={classes.root}>
        <div className={classes.appbar}>
          <img src={config.settings.logo} alt={config.settings.appName} className={classes.logo}/>
        </div>
        <div className={classes.pageContainer}>
          <div className={classNames(classes.centerRoot, 'animate-bottom')}>
            <div className={classes.centerContainer}>
              <div className={classNames(classes.contain, classes.pageItem)}>
                <LoginComponent />
              </div>
             
            </div>
          </div>
          <div style={{height: 30}}></div>          
          <Footer />

        </div>
      </div>
    )
  }
}

/**
 * Map dispatch to props
 */
const mapDispatchToProps = (dispatch: any, ownProps: ILoginWrapperProps) => {
  return {
    signupPage: () => {
      Router.push('/signup')
    }
  }
}

/**
 * Map state to props
 */
const mapStateToProps = () => {
  return {
    
  }
}

// - Connect component to redux store
const translateWrapper = withTranslation('common')(LoginWrapperComponent as any)
const styleWrapper = withStyles(loginWrapperStyles as any, { withTheme: true })(translateWrapper as any)
export default withRouter<any, any>(connect(mapStateToProps, mapDispatchToProps)(styleWrapper as any))

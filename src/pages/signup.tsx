// - Import external components
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Router from 'next/router'
import { Map } from 'immutable';
import Footer from '~/layouts/footer';
import React, { Component } from 'react';
import { withTranslation } from '~/locales/i18n';
import { connect } from 'react-redux';
import { withRouter } from 'next/router';
import VerifySignupComponent from '~/components/verifySignup/VerifySignupComponent';
import config from '~/config';
import { authorizeSelector } from '~/store/reducers/authorize/authorizeSelector';

import SignupComponent from '~/containers/signup';
import { ISignupWrapperProps } from '~/containers/signupWrapper/ISignupWrapperProps';
import { ISignupWrapperState } from '~/containers/signupWrapper/ISignupWrapperState';
import { signupWrapperStyles } from '~/containers/signupWrapper/signupWrapperStyles';

export class SignupWrapperComponent extends Component<ISignupWrapperProps, ISignupWrapperState> {
  static async getInitialProps() {
    return {
      namespacesRequired: ['common'],
    }
  }
  /**
   * Component constructor
   */
  constructor(props: ISignupWrapperProps) {
    super(props)
    this.state = {
    }
  }

  /**
   * Reneder component DOM
   */
  render() {
    const { classes, currentStep} = this.props

    return (
      <div className={classes.root}>
        <div className={classes.appbar}>
          <img src={config.settings.logo} alt={config.settings.appName} className={classes.logo} />
        </div>
        <div className={classes.pageContainer}>
          <div className={classNames(classes.centerRoot, 'animate-bottom')}>
            <div className={classes.centerContainer}>
              <div className={classNames(classes.contain, classes.pageItem)}>
              {
                currentStep === 0 
                ? <SignupComponent />
                : <VerifySignupComponent />
              }
                
              </div>
            </div>
          </div>
          <div style={{height: 130}}></div>
          <Footer />

        </div>
      </div>
    )
  }
}

/**
 * Map dispatch to props
 */
const mapDispatchToProps = (dispatch: any, ownProps: ISignupWrapperProps) => {
  return {
    loginPage: () => {
      Router.push('/login')
    }
  }
}


const makeMapStateToProps = () => {
  const selectSignupStep = authorizeSelector.selectSignupStep()
  const mapStateToProps = (state: Map<string, any>, ownProps: ISignupWrapperProps) => {

    return {
      currentStep: selectSignupStep(state)
    }
  }
  return mapStateToProps
}

// - Connect component to redux store
const translateWrapper = withTranslation('common')(SignupWrapperComponent as any)

export default withRouter<any, any>(connect(makeMapStateToProps, mapDispatchToProps)(withStyles(signupWrapperStyles as any, { withTheme: true })(translateWrapper as any) as any))

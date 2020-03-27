// - Import react components
import Link from '~/components/Link'
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Router from 'next/router'
import { Map } from 'immutable';
import React, { Component } from 'react';
import { withTranslation } from '~/locales/i18n';
import { connect } from 'react-redux';
import { withRouter } from 'next/router';
import StringAPI from '~/api/StringAPI';
import { ServerRequestType } from '~/constants/serverRequestType';
import * as authorizeActions from '~/store/actions/authorizeActions';
import * as globalActions from '~/store/actions/globalActions';
import { ServerRequestStatusType } from '~/store/actions/serverRequestStatusType';

import { IVerifySignupProps } from './IVerifySignupProps';
import { IVerifySignupState } from './IVerifySignupState';
import { verifySignupStyles } from './verifySignupStyles';

// - Components

// - Import actions
// - Import app API
// - Create Verify Signup component class
export class VerifySignupComponent extends Component<IVerifySignupProps, IVerifySignupState> {

  /**
   * Component constructor
   *
   */
  constructor(props: IVerifySignupProps) {
    super(props)

    this.state = {
      code: '',
      codeError: ''
    }
    // Binding function to `this`
    this.handleForm = this.handleForm.bind(this)

  }

  /**
   * Handle data on input change
   * @param  {event} evt is an event of inputs of element on change
   */
  handleInputChange = (event: any) => {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    this.setState({
      [name]: value
    })

    switch (name) {
      case 'code':
        this.setState({
          codeError: ''
        })
        break
      default:

    }
  }


  /**
   * Handle register form
   */
  handleForm = () => {

    const { code } = this.state
    const { verify, t } = this.props
    if (code && code.trim() === '') {
    
      this.setState({
        codeError: t!('signup.codeRequiredError')
      })
    }
    else if (code.length !== 4 && t) {
      this.setState({
        codeError: t('signup.codeNumberOfDigitsError')
      })
    } else {
      
      verify!(code)
    }


  }

  /**
   * Reneder component DOM
   * 
   */
  render() {

    const { classes, t,  signupRequest } = this.props
    const {code} = this.state
    const signupRequestId = StringAPI.createServerRequestId(ServerRequestType.AuthSignup, code)
    const signupRequestStatus = signupRequest!.get(signupRequestId, { status: ServerRequestStatusType.NoAction }).status
    const loading = signupRequestStatus === ServerRequestStatusType.Sent
    return (
      <div className={classes.root}>
        <TextField
          className={classes.textField}
          autoFocus
          color='secondary' 
          disabled={loading}         
          onChange={this.handleInputChange}
          helperText={this.state.codeError}
          error={this.state.codeError.trim() !== ''}
          name='code'
          label={t!('signup.codeLabel')}
          type='text'
        /><br />
       
       <div style={{height: 30}} />

        <br />
        <div className={classes.signupButtonRoot}>
        <div className={classes.wrapperButton}>
              <Button
                variant='contained'
                className={classes.signupButton}
                color='secondary'
                disabled={loading}
                onClick={this.handleForm}
                fullWidth
                tabIndex={3}
              >
                {t!('signup.verifyButton')}
              </Button>
              {loading && <CircularProgress size={24} className={classes.buttonProgress} />}

            </div>
        </div>
        <Typography className={classes.caption} variant='caption' component='p'>
          {t!('signup.termCaption')} <Link href='/terms'> {t!('signup.termCaptionLink')} </Link>
        </Typography>
        <Divider />
          <div >
            <span className={classes.bottomPaper}>{t!('login.loginText')} <Link href='/login'>{t!('login.loginButton')}</Link></span>
          </div>

      </div>

    )
  }
}

/**
 * Map dispatch to props
 */
const mapDispatchToProps = (dispatch: any, ownProps: IVerifySignupProps) => {
  return {
    showError: (message: string) => {
      dispatch(globalActions.showMessage(message))
    },
    verify: (code: string,) => {
      dispatch(authorizeActions.asyncVerifyUserRegisterCode(code))
    },
    loginPage: () => {
      Router.push('/login')
    }
  }
}

/**
 * Map state to props
 */
const mapStateToProps = (state: Map<string, any>, ownProps: IVerifySignupProps) => {
  const signupRequest = state.getIn(['server', 'request'], Map({}))
  return {
    signupRequest
  }
}

// - Connect component to redux store
const translateWrapper = withTranslation('common')(VerifySignupComponent as any)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(verifySignupStyles as any)(translateWrapper as any) as any) as any)

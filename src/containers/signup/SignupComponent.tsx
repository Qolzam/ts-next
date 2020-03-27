// - Import react components
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
import Link from '~/components/Link';
import { withRouter } from 'next/router';
import StringAPI from '~/api/StringAPI';
import RecaptchaComponent from '~/components/recaptcha';
import { ServerRequestType } from '~/constants/serverRequestType';
import { UserRegisterModel } from '~/models/users/userRegisterModel';
import * as authorizeActions from '~/store/actions/authorizeActions';
import * as globalActions from '~/store/actions/globalActions';
import { ServerRequestStatusType } from '~/store/actions/serverRequestStatusType';

import { ISignupComponentProps } from './ISignupComponentProps';
import { ISignupComponentState } from './ISignupComponentState';
import { signupStyles } from './signupStyles';

// - Components

// - Import actions
// - Import app API
// - Create Signup component class
export class SignupComponent extends Component<ISignupComponentProps, ISignupComponentState> {

  /**
   * Component constructor
   *
   */
  constructor(props: ISignupComponentProps) {
    super(props)

    this.state = {
      fullNameInput: '',
      fullNameInputError: '',
      emailInput: '',
      emailInputError: '',
      passwordInput: '',
      passwordInputError: '',
      confirmInput: '',
      confirmInputError: ''
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
      case 'fullNameInput':
        this.setState({
          fullNameInputError: ''
        })
        break
      case 'emailInput':
        this.setState({
          emailInputError: ''
        })
        break
      case 'passwordInput':
        this.setState({
          confirmInputError: '',
          passwordInputError: ''
        })
        break
      case 'confirmInput':
        this.setState({
          confirmInputError: '',
          passwordInputError: ''
        })
        break
      case 'checkInput':
        this.setState({
          checkInputError: ''
        })
        break
      default:

    }
  }


  /**
   * Handle success result of solving captcha
   */
  handleSuccessCaptcha = (value: any) => {
    this.setState({
      captchaVerifier: value,
      isCaptchaSuccess: true
    })
  }

  /**
   * Handle expired captcha
   */
  handleExpiredCaptcha = () => {
    const { showError, t } = this.props
    showError!(t!('resetPassword.capthaExpiredMessage'))
  }

  /**
   * Handle error capthcha render
   */
  handleErrorCapthaRender = () => {
    const { showError, t } = this.props
    showError!(t!('resetPassword.capthaRenderErrorMessage'))
  }

  /**
   * Handle register form
   */
  handleForm = () => {

    const { fullNameInput, emailInput, passwordInput, confirmInput, captchaVerifier } = this.state
    const { register, t } = this.props

    let error = false

    // Validate full name
    let fullNameCheck = fullNameInput.trim().toLowerCase()

    if (fullNameCheck.indexOf('test') > -1
      || fullNameCheck.indexOf('demo') > -1
      || fullNameCheck.indexOf('asd') > -1
      || fullNameCheck.length < 4) {
      this.setState({
        fullNameInputError: t!('signup.validNameError')
      })
      error = true
    }

    /* Validate email*/
    if (!StringAPI.isValidEmail(emailInput)) {
      this.setState({
        emailInputError: t!('signup.validEmailError')
      })
      error = true

    }

    /* Check password */
    if (passwordInput === '') {
      this.setState({
        passwordInputError: t!('signup.passwordRequiredError')
      })
      error = true

    }
    if (confirmInput === '') {
      this.setState({
        confirmInputError: t!('signup.confirmRequiredError')
      })
      error = true

    } else if (confirmInput !== passwordInput) {
      this.setState({
        passwordInputError: t!('signup.passwordEqualConfirmError'),
        confirmInputError: t!('signup.confirmEqualPasswordError')
      })
      error = true

    }
    if (!error) {
      register!({
        email: emailInput,
        password: passwordInput,
        fullName: fullNameInput
      }, captchaVerifier)
    }

  }

  /**
   * Reneder component DOM
   * 
   */
  render() {

    const { classes, t,  signupRequest } = this.props
    const {emailInput} = this.state
    const signupRequestId = StringAPI.createServerRequestId(ServerRequestType.AuthSignup, emailInput)
    const signupRequestStatus = signupRequest!.get(signupRequestId, { status: ServerRequestStatusType.NoAction }).status
    const loading = signupRequestStatus === ServerRequestStatusType.Sent
    return (
      <div className={classes.root}>
        <TextField
          className={classes.textField}
          autoFocus
          color='secondary'          
          onChange={this.handleInputChange}
          helperText={this.state.fullNameInputError}
          error={this.state.fullNameInputError.trim() !== ''}
          name='fullNameInput'
          label={t!('signup.fullNameLabel')}
          type='text'
        /><br />
        <TextField
          className={classes.textField}
          color='secondary'
          onChange={this.handleInputChange}
          helperText={this.state.emailInputError}
          error={this.state.emailInputError.trim() !== ''}
          name='emailInput'
          label={t!('signup.emailLabel')}
          type='email'
        /><br />
        <TextField
            color='secondary'
          className={classes.textField}
          onChange={this.handleInputChange}
          helperText={this.state.passwordInputError}
          error={this.state.passwordInputError.trim() !== ''}
          name='passwordInput'
          label={t!('signup.passwordLabel')}
          type='password'
        /><br />
        <TextField
          className={classes.textField}
          color='secondary'
          onChange={this.handleInputChange}
          helperText={this.state.confirmInputError}
          error={this.state.confirmInputError.trim() !== ''}
          name='confirmInput'
          label={t!('signup.confirmPasswordLabel')}
          type='password'
          InputLabelProps={{color: 'secondary'}}
        />
       <div style={{height: 30}} />
        <RecaptchaComponent 
        onSuccess={this.handleSuccessCaptcha} 
        onExpired={this.handleExpiredCaptcha} 
        onRenderError={this.handleErrorCapthaRender} />
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
                {t!('signup.createButton')}
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
const mapDispatchToProps = (dispatch: any, ownProps: ISignupComponentProps) => {
  return {
    showError: (message: string) => {
      dispatch(globalActions.showMessage(message))
    },
    register: (userRegister: UserRegisterModel, captchaVerifier: string) => {
      dispatch(authorizeActions.fetchUserRegisterToken(userRegister, captchaVerifier))
    },
    loginPage: () => {
      Router.push('/login')
    }
  }
}

/**
 * Map state to props
 */
const mapStateToProps = (state: Map<string, any>, ownProps: ISignupComponentProps) => {
  const signupRequest = state.getIn(['server', 'request'], Map({}))
  return {
    signupRequest
  }
}

// - Connect component to redux store
const translateWrapper = withTranslation('common')(SignupComponent as any)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(signupStyles as any)(translateWrapper as any) as any) as any)


import { LoginUser, RegisterUserResult, OAuthType } from '~/core/domain/authorize'
import { UserClaim } from '~/core/domain/authorize/userClaim'
import { UserRegisterModel } from '~/models/users'

/**
 * Authentication service interface
 */
export interface IAuthorizeService {

  /**
   * Login the user
   */
  login: (email: string, password: string) => Promise<any>

  /**
   * Whether user is loged in or not
   */
  isLoggedin: () => boolean

  /**
   * Get user auth
   */
  getUserAuth: (req?: any) => any

  /**
   * Login by token
   */
  loginByToken: (token: string) => Promise<LoginUser | null>

  /**
   * Logs out the user
   */
  logout: (req?: any) => void

  /**
   * Whether user is login or not
   */
  isUserUserVerified: () => boolean

  /**
   * Get user claim
   */
  getUserClaim: () => Promise<UserClaim>

  /**
   * Update user password
   */
  updatePassword: (newPassword: string, confirmPassword: string) => Promise<void>

  /**
   * Get register user token
   */
  getUserRegisterToken: (user: UserRegisterModel, captchaVerifier: string) => Promise<string>

  /**
   * Get access token
   */
  getAccessToken: () => Promise<string>

  /**
   * Verify user register code
   */
  verifyUserRegisterCode: (code: string, registerToken: string) => Promise<string>

  /**
   * Register new user
   */
  registerUser: (user: UserRegisterModel) => Promise<RegisterUserResult>

  /**
   * On user authorization changed event
   */
  onAuthStateChanged: (callBack: (user: UserClaim) => void) => any

  /**
   * Reset user password
   */
  resetPassword: (email: string) => Promise<void>

  /**
   * Send email verification
   */
  sendEmailVerification: (value: any) => Promise<string>

  /**
   * Login user by OAuth authentication
   */
  loginWithOAuth: (type: OAuthType) => Promise<LoginUser>

  /**
   * Send sms verfication
   */
  sendSmsVerification: (phoneNumber: string, value: any) => Promise<string>

  /**
   * Send sms verfication
   */
  sendResetPasswordVerification: (email: string, value: any) => Promise<string>

  /**
   * Confirm verfication phone
   */
  confirmVerificationPhone: (code: string, verifyId: string, phoneNumber: string) => Promise<any>

  /**
   * Confirm verfication email
   */
  confirmVerificationEmail: (code: string, verifyId: string) => Promise<any>

  /**
   * Confirm verfication code
   */
  confirmResetPassword: (code: string, verifyId: string, email: string) => Promise<any>
}

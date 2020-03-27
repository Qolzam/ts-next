import {
  IAuthorizeService,
  ICommentService,
  ICommonService,
  IImageGalleryService,
  INotificationService,
  IUserService,
  IVoteService,
  IStorageService
} from '~/core/services'
import ICircleService from '../services/circles/ICircleService';

export interface IServiceProvider {

  /**
   * Create instant for Circle Service
   */
  createCircleService: () => ICircleService

  /**
   * Create instant for Comment Service
   */
  createCommentService: () => ICommentService

  /**
   * Create instant for Notification Service
   */
  createNotificationService: () => INotificationService

  /**
   * Create instant for Vote Service
   */
  createVoteService: () => IVoteService

  /**
   * Create instant for Vote Service
   */
  createStorageService: () => IStorageService

}

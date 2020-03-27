// - Import react components
import { SocialError } from '~/core/domain/common';
import { Notification } from '~/core/domain/notifications';
import { INotificationService } from '~/core/services/notifications';
import { injectable, inject } from 'inversify';
import { SocialProviderTypes } from '~/core/socialProviderTypes';
import { IHttpService } from '~/core/services/webAPI';
import { Map } from 'immutable'

/**
 * Firbase notification service
 *
 * @export
 */
@injectable()
export class NotificationService implements INotificationService {
  @inject(SocialProviderTypes.Httpervice) private _httpService: IHttpService
  public addNotification = (notification: Notification) => {
    return " Not implemented!" as any

  }

  public getNotifications = async (userId: string) => {

    try {
      const result = await this._httpService.get(`notifications?page=1`)

      let parsedData: Map<string, Map<string, any>> = Map({})
      if (result && result.length && result.length > 0) {
        result.forEach((notification: any) => {
          parsedData = parsedData.set(notification.objectId, Map(notification))
        })
      }
      return parsedData

    } catch (error) {

      throw new SocialError(error.code, error.message)
    }

  }

  public deleteNotification = async (notificationId: string, userId: string) => {
    try {
      await this._httpService.delete(`notifications/id/${notificationId}`)
    } catch (error) {
      throw new SocialError(error.code, error.message)
    }

  }

  public setSeenNotification = async (notificationId: string, userId: string, notification: Notification) => {
    try {
      await this._httpService.put(`notifications/seen/${notificationId}`)
    } catch (error) {
      throw new SocialError(error.code, error.message)
    }

  }

}

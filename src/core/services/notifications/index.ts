import {Map} from 'immutable'

import { Notification } from '~/core/domain/notifications'

/**
 * Notification service interface
 *
 * @export
 * @interface INotificationService
 */
export interface INotificationService {
  addNotification: (notification: Notification) => Promise<void>
  getNotifications: (userId: string) => Promise<Map<string,Map<string,any>>>
  deleteNotification: (notificationId: string, userId: string) => Promise<void>
  setSeenNotification: (notificationId: string, userId: string, notification: Notification) => Promise<void>
}

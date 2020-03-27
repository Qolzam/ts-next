import { NotificationActionType } from '~/constants/notificationActionType';
import { INotificationService } from '~/core/services';
import { SocialProviderTypes } from '~/core/socialProviderTypes';
import { Map } from 'immutable';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { provider } from '../../socialEngine';
import * as notificatioActions from '~/store/actions/notifyActions';
import { authorizeSelector } from '~/store/reducers/authorize/authorizeSelector';

/**
 * Get service providers
 */
const notificationService: INotificationService = provider.get<INotificationService>(SocialProviderTypes.NotificationService)

/***************************** Subroutines ************************************/

/**
 * On auth state change
 */
function* dbFetchNotification() {
  let authedUser: Map<string, any> = yield select(authorizeSelector.getAuthedUser)
  const uid = authedUser.get('uid')
  try {
    let notifications: Map<string, Map<string, any>> = yield call(notificationService.getNotifications, uid)

    yield put(notificatioActions.addNotifyList(notifications))
    
  } catch (error) {
    
  }

}

export default function* notificationSga() {
  yield all([
    takeLatest(NotificationActionType.DB_FETCH_NOTIFICATIONS, dbFetchNotification)
  ])
}

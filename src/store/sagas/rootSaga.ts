import { all } from 'redux-saga/effects';

import authorizeSaga from './authorizeSaga';
import chatSaga from './chatSaga';
import circleSaga, {initCircleSaga} from './circleSaga';
import commentSaga from './commentSaga';
import voteSaga from './voteSaga';
import commonSaga from './commonSaga';
import gallerySaga from './gallerySaga';
import localeSaga from './localeSaga';
import notificationSaga from './notificationSaga';
import postSaga from './postSaga';
import userSaga from './userSaga';
import userSettingSaga from './userSettingSaga';

export default function* root() {
    yield all([
      authorizeSaga(),
      localeSaga(),
      initCircleSaga(),
      commentSaga(),
      voteSaga(),
      userSaga(),
      commonSaga(),
      postSaga(),
      userSettingSaga(),
      gallerySaga(),
      notificationSaga(),
      circleSaga(),
      chatSaga()
    ])
  }
  
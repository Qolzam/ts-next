// - Import external components
import { fromJS, Map } from 'immutable';
import jwtDecode from 'jwt-decode';
import { applyMiddleware, createStore, Store, compose } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware, { END } from 'redux-saga';
import thunk from 'redux-thunk';
import { rootReducer } from '~/store/reducers';
import rootSaga from '~/store/sagas/rootSaga';


export default (initialState: any, options: any) => {

// Logger option for transforming immutable js
const logger = createLogger({
  stateTransformer: (state: Map<string, any>) => {

    return state.toJS()
  }
})

const sagaMiddleware = createSagaMiddleware()
let token = null
if (typeof window !== 'undefined') {
  token = window.localStorage.getItem('red-gold.scure.token')
}

let uid = ''
let authed = false
if (token) {
  uid = (jwtDecode(token) as any)['user_id']
  authed = true
}
// - initial state
// let initialState = {
//   authorize: {
//     authed: authed,
//     guest: !authed ,
//     uid
//   }
// }

let store: any = createStore(rootReducer(), fromJS(initialState), compose(
  applyMiddleware(thunk, sagaMiddleware)
))

store.sagaTask = sagaMiddleware.run(rootSaga)


return store

}
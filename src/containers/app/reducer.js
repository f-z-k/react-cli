import { APP_TEST, APP_ASYNC } from './actionTypes'
export const testReducer = function (state='000', action) {
  console.log(state)
  switch (action.type) {
    case APP_TEST:
      return action.data
    default:
      return state
  }
}
export const testAsyncReducer = function (state={}, action) {
  console.log('--')
  console.log(state)
  switch (action.type) {
    case APP_ASYNC.REQUEST:
      return action.response
    case APP_ASYNC.SUCCESS:
      return action.response
    case APP_ASYNC.FAILURE:
      return action.response
    default:
      return state
  }
}
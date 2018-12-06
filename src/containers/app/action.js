import { APP_TEST, APP_ASYNC } from './actionTypes'
import { asyncActionAjax } from './../../api/asyncAction'
export const testAction = function(res) {
  return {
    type: APP_TEST,
    data: res
  }
}
export const testAsyncAction =  function(params) {
  return dispatch => {
    asyncActionAjax(dispatch, APP_ASYNC, 'get', '/news/list', params)
  }
}
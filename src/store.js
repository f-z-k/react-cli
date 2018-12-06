import { combineReducers, createStore, applyMiddleware } from 'redux'
import { testReducer, testAsyncReducer } from './containers/app/reducer'
import thunk from 'redux-thunk'
const reducerMerge = combineReducers({
  testReducer,
  testAsyncReducer
})
let store  = createStore(reducerMerge, applyMiddleware(thunk))
export default store
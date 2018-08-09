import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import Reducers from './reducers'

const store = createStore(Reducers, applyMiddleware(thunk))

export default store

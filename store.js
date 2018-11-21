import { applyMiddleware, createStore } from 'redux'
import Thunk from 'redux-thunk'
import reducer from './reducers'

const middleware = applyMiddleware(Thunk)

export default createStore(reducer, middleware);
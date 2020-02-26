import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import rootReducer from './rootReducer'

const middleWare: any = [thunk]
if (process.env.NODE_ENV === 'development') {
  middleWare.push(logger)
}

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleWare)))

export default store

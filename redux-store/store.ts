import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import rootReducer from './rootReducer'

const Store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, logger)))

export default Store

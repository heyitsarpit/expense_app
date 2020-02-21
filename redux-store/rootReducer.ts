import { combineReducers } from 'redux'

import langReducer from './language/langReducer'
import themeReducer from './theme/themeReducer'

const rootReducer = combineReducers({
  language: langReducer,
  theme: themeReducer
})

/**
 *  Type for global app state
 */
export type RootState = ReturnType<typeof rootReducer>

export default rootReducer

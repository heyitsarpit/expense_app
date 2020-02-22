import { combineReducers } from 'redux'

import expenseReducer from './expenses/expenseReducer'
import viewReducer from './view/viewReducer'

const rootReducer = combineReducers({
  expenses: expenseReducer,
  view: viewReducer
})

/**
 *  Type for global app state
 */
export type RootState = ReturnType<typeof rootReducer>

export default rootReducer

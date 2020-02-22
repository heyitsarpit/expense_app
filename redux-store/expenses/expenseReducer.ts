import { ActionTypes } from './expenseActionTypes'
import { ExpenseActions, ExpenseState } from './types'

const defaultExpenses: ExpenseState = {
  pending: true,
  expenses: [],
  error: ''
}

const expenseReducer = (state = defaultExpenses, action: ExpenseActions): ExpenseState => {
  switch (action.type) {
    // Cases for fetching expenses
    case ActionTypes.FETCHING_EXPENSES_PENDING:
      return {
        ...state,
        pending: true
      }

    case ActionTypes.FETCHING_EXPENSES_SUCCESS:
      return {
        ...state,
        pending: false,
        expenses: action.payload
      }

    case ActionTypes.FETCHING_EXPENSES_ERROR:
      return {
        ...state,
        pending: false,
        error: action.payload
      }

    default:
      return state
  }
}

export default expenseReducer

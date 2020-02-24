import { ActionTypes } from './expenseActionTypes'
import { ExpenseActions, ExpenseState } from './types'

const defaultExpenses: ExpenseState = {
  pending: true,
  expenses: [],
  total: 168,
  error: ''
}

const expenseReducer = (state = defaultExpenses, action: ExpenseActions): ExpenseState => {
  switch (action.type) {
    // Cases for fetching expenses
    case ActionTypes.ASYNC_REQUEST_PENDING:
      return {
        ...state,
        pending: true
      }

    case ActionTypes.ASYNC_REQUEST_ERROR:
      return {
        ...state,
        pending: false,
        error: action.payload
      }

    case ActionTypes.FETCHING_EXPENSES_SUCCESS:
      return {
        ...state,
        pending: false,
        error: '',
        expenses: [...state.expenses, ...action.payload[0]],
        total: action.payload[1]
      }

    case ActionTypes.POST_COMMENT_SUCCESS:
      const [comment_id, comment] = action.payload
      return {
        ...state,
        pending: false,
        error: '',
        expenses: state.expenses.map((expense) =>
          comment_id === expense.id
            ? {
                ...expense,
                comment: comment
              }
            : expense
        )
      }

    case ActionTypes.POST_RECEIPT_SUCCESS:
      const [receipt_id, receipt] = action.payload
      return {
        ...state,
        pending: false,
        expenses: state.expenses.map((expense) =>
          receipt_id === expense.id
            ? {
                ...expense,
                receipt: receipt
              }
            : expense
        )
      }

    default:
      return state
  }
}

export default expenseReducer

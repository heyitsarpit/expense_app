import { ActionTypes } from './expenseActionTypes'
import {
  Expense,
  FetchingExpensesError,
  FetchingExpensesPending,
  FetchingExpensesSuccess
} from './types'

export const fetchingExpensePending = (pending: boolean): FetchingExpensesPending => ({
  type: ActionTypes.FETCHING_EXPENSES_PENDING,
  payload: pending
})

export const fetchingExpenseSuccess = (expenses: Expense[]): FetchingExpensesSuccess => ({
  type: ActionTypes.FETCHING_EXPENSES_SUCCESS,
  payload: expenses
})

export const fetchingExpenseError = (error: string): FetchingExpensesError => ({
  type: ActionTypes.FETCHING_EXPENSES_ERROR,
  payload: error
})

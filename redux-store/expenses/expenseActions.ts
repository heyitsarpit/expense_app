import axios from 'axios'

import getURL from '../../lib/getURL'
import { ActionTypes } from './expenseActionTypes'
import {
  Expense,
  FetchingExpensesError,
  FetchingExpensesPending,
  FetchingExpensesSuccess
} from './types'

export const fetchExpensePending = (pending = true): FetchingExpensesPending => ({
  type: ActionTypes.FETCHING_EXPENSES_PENDING,
  payload: pending
})

export const fetchExpenseSuccess = (expenses: Expense[]): FetchingExpensesSuccess => ({
  type: ActionTypes.FETCHING_EXPENSES_SUCCESS,
  payload: expenses
})

export const fetchExpenseError = (error: string): FetchingExpensesError => ({
  type: ActionTypes.FETCHING_EXPENSES_ERROR,
  payload: error
})

export const fetchExpenses = () => (dispatch) => {
  const URL = getURL()

  dispatch(fetchExpensePending())
  axios
    .get(URL + '/expenses')
    .then((response) => {
      const { expenses } = response.data
      dispatch(fetchExpenseSuccess(expenses))
    })
    .catch((error) => {
      dispatch(fetchExpenseError(error.message))
    })
}

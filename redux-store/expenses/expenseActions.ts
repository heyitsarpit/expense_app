import axios from 'axios'

import getURL from '../../lib/getURL'
import { ActionTypes } from './expenseActionTypes'
import {
  AsyncRequestError,
  AsyncRequestPending,
  Expense,
  FetchingExpensesSuccess,
  PostCommentSuccess,
  PostReceiptSuccess
} from './types'

export const asyncRequestPending = (pending = true): AsyncRequestPending => ({
  type: ActionTypes.ASYNC_REQUEST_PENDING,
  payload: pending
})

export const asyncRequestError = (error: string): AsyncRequestError => ({
  type: ActionTypes.ASYNC_REQUEST_ERROR,
  payload: error
})

export const fetchExpenseSuccess = (expenses: Expense[]): FetchingExpensesSuccess => ({
  type: ActionTypes.FETCHING_EXPENSES_SUCCESS,
  payload: expenses
})

export const postCommentSuccess = (id: string, comment: string): PostCommentSuccess => ({
  type: ActionTypes.POST_COMMENT_SUCCESS,
  payload: [id, comment]
})

export const postReceiptSuccess = (id: string, receipt: string): PostReceiptSuccess => ({
  type: ActionTypes.POST_RECEIPT_SUCCESS,
  payload: [id, receipt]
})

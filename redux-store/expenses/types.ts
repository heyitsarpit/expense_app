import { useDispatch } from 'react-redux'

import { ActionTypes } from './expenseActionTypes'

interface Receipt {
  url: string
}

export interface Expense {
  readonly id: string
  readonly amount: {
    readonly value: string
    readonly currency: string
  }
  readonly date: string
  readonly merchant: string
  readonly visibleReceipt: string
  readonly receipts: Receipt[]
  readonly comment: string
  readonly category: string
  readonly user: {
    readonly first: string
    readonly last: string
    readonly email: string
  }
}

export type Dispatcher = ReturnType<typeof useDispatch>

export interface ExpenseState {
  readonly pending: boolean
  readonly expenses: readonly Expense[]
  readonly error: string
  readonly total: number
}

export interface AsyncRequestPending {
  readonly type: ActionTypes.ASYNC_REQUEST_PENDING
  readonly payload: boolean
}

export interface AsyncRequestError {
  readonly type: ActionTypes.ASYNC_REQUEST_ERROR
  readonly payload: string
}

export interface FetchingExpensesSuccess {
  readonly type: ActionTypes.FETCHING_EXPENSES_SUCCESS
  readonly payload: [Expense[], number]
}

export interface PostCommentSuccess {
  readonly type: ActionTypes.POST_COMMENT_SUCCESS
  readonly payload: string[]
}

export interface PostReceiptSuccess {
  readonly type: ActionTypes.POST_RECEIPT_SUCCESS
  readonly payload: string[]
}

export type ExpenseActions =
  | AsyncRequestPending
  | AsyncRequestError
  | FetchingExpensesSuccess
  | PostCommentSuccess
  | PostReceiptSuccess

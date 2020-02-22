import { ActionTypes } from './expenseActionTypes'

export interface Expense {
  readonly id: string
  readonly amount: {
    readonly value: string
    readonly currency: string
  }
  readonly date: string
  readonly merchant: string
  readonly receipt: string
  readonly comment: string
  readonly category: string
  readonly user: {
    readonly first: string
    readonly last: string
    readonly email: string
  }
}

export interface ExpenseState {
  readonly pending: boolean
  readonly expenses: readonly Expense[]
  readonly error: string
}

export interface FetchingExpensesPending {
  readonly type: ActionTypes.FETCHING_EXPENSES_PENDING
  readonly payload: boolean
}

export interface FetchingExpensesSuccess {
  readonly type: ActionTypes.FETCHING_EXPENSES_SUCCESS
  readonly payload: Expense[]
}

export interface FetchingExpensesError {
  readonly type: ActionTypes.FETCHING_EXPENSES_ERROR
  readonly payload: string
}

export type ExpenseActions =
  | FetchingExpensesPending
  | FetchingExpensesSuccess
  | FetchingExpensesError

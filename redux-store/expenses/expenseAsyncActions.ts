import axios from 'axios'

import { getURL, postURL } from '../../lib/getURL'
import {
  asyncRequestError,
  asyncRequestPending,
  fetchExpenseSuccess,
  postCommentSuccess,
  postReceiptSuccess
} from './expenseActions'
import { Dispatcher } from './types'

export const fetchExpenses = (limit = 10, offset = 0) => (dispatch: Dispatcher) => {
  const URL = getURL(limit, offset)
  
  dispatch(asyncRequestPending())

  axios
    .get(URL)
    .then((response) => {
      const { expenses } = response.data
      dispatch(fetchExpenseSuccess(expenses))
    })
    .catch((error) => {
      dispatch(asyncRequestError(error.message))
    })
}

export const postComment = (id: string, comment: string) => (dispatch: Dispatcher) => {
  const URL = postURL(id)

  dispatch(asyncRequestPending())

  axios
    .post(URL, {
      comment: comment
    })
    .then(function(response) {
      console.log(response)
      dispatch(postCommentSuccess(id, comment))
    })
    .catch(function(error) {
      console.log(error)
      dispatch(asyncRequestError(error.message))
    })
}

export const postReceipt = (id: string, receipt: any) => (dispatch: Dispatcher) => {
  const URL = postURL(id, receipt)

  dispatch(asyncRequestPending())

  axios
    .post(URL, receipt, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then((response) => {
      console.log('SUCCESS!!')
      dispatch(postReceiptSuccess(id, receipt))
    })
    .catch((error) => {
      console.log('FAILURE!!')
      dispatch(asyncRequestError(error.message))
    })
}

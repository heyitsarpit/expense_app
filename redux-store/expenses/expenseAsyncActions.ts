import axios from 'axios'

import dataURLtoBlob from '../../lib/dataUrlToBlob'
import { getURL, postURL } from '../../lib/resolveURL'
import {
  asyncRequestError,
  asyncRequestPending,
  fetchExpenseSuccess,
  postCommentSuccess,
  postReceiptSuccess
} from './expenseActions'
import { Dispatcher } from './types'

export const fetchExpenses = (limit = 20, offset = 0) => (dispatch: Dispatcher) => {
  const URL = getURL(limit, offset)

  dispatch(asyncRequestPending())

  axios
    .get(URL)
    .then((response) => {
      const { expenses, total } = response.data
      dispatch(fetchExpenseSuccess(expenses, total))
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

export const postReceipt = (id: string, receipt: string) => (dispatch: Dispatcher) => {
  const URL = postURL(id, true)

  dispatch(asyncRequestPending())
  const file = dataURLtoBlob(receipt)
  const formData = new FormData()
  formData.append('receipt', file)

  axios
    .post(URL, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then((response) => {
      console.log(response)
      dispatch(postReceiptSuccess(id, receipt))
    })
    .catch((error) => {
      dispatch(asyncRequestError(error.message))
    })
}

import axios from 'axios'
import NProgress from 'nprogress'

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
  NProgress.start()

  axios
    .get(URL)
    .then((response) => {
      const { expenses, total } = response.data
      dispatch(fetchExpenseSuccess(expenses, total))
      NProgress.done()
    })
    .catch((error) => {
      dispatch(asyncRequestError(error.message))
    })
}

export const postComment = (id: string, comment: string) => (dispatch: Dispatcher) => {
  const URL = postURL(id)

  dispatch(asyncRequestPending())
  NProgress.start()

  axios
    .post(URL, {
      comment: comment
    })
    .then(function (response) {
      NProgress.done()

      dispatch(postCommentSuccess(id, comment))
    })
    .catch(function (error) {
      NProgress.done()
      dispatch(asyncRequestError(error.message))
    })
}

export const postReceipt = (id: string, receipt: string) => (dispatch: Dispatcher) => {
  const URL = postURL(id, true)

  dispatch(asyncRequestPending())
  NProgress.start()

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
      NProgress.done()
      dispatch(postReceiptSuccess(id, receipt))
    })
    .catch((error) => {
      NProgress.done()
      dispatch(asyncRequestError(error.message))
    })
}

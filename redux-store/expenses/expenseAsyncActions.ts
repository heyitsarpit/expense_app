import axios from 'axios'

import getURL from '../../lib/getURL'
import {
  asyncRequestError,
  asyncRequestPending,
  fetchExpenseSuccess,
  postCommentSuccess,
  postReceiptSuccess
} from './expenseActions'
import { Dispatcher } from './types'

export const fetchExpenses = () => (dispatch: Dispatcher) => {
  const URL = getURL()

  dispatch(asyncRequestPending())

  axios
    .get(URL + '/expenses')
    .then((response) => {
      const { expenses } = response.data
      dispatch(fetchExpenseSuccess(expenses))
    })
    .catch((error) => {
      dispatch(asyncRequestError(error.message))
    })
}

export const postComment = (id: string, comment: string) => (dispatch: Dispatcher) => {
  const URL = getURL()

  dispatch(asyncRequestPending())

  axios
    .post(`http://3.20.206.58:3000/expenses/${id}`, {
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
  const URL = getURL()

  dispatch(asyncRequestPending())

  axios
    .post('http://localhost:8080/restapi/fileupload', receipt, {
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

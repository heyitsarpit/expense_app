export enum ActionTypes {
  ASYNC_REQUEST_PENDING = '@@expense/ASYNC_REQUEST_PENDING',
  ASYNC_REQUEST_ERROR = '@@expense/ASYNC_REQUEST_ERROR',

  // Action types for fetching expenses
  FETCHING_EXPENSES_SUCCESS = '@@expense/FETCHING_SUCCESS ',

  // Action for posting to server
  POST_COMMENT_SUCCESS = '@@expense/POST_COMMENT_SUCCESS',
  POST_RECEIPT_SUCCESS = '@@expense/POST_RECEIPT_SUCCESS'
}

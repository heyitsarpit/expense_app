import { ViewActions, ViewState } from './types'
import { ActionTypes } from './viewActionTypes'

const defaultView: ViewState = {
  offset: 0,
  limit: 10,
  language: 'en',
  theme: window.matchMedia('(prefers-color-scheme: light)') ? 'light' : 'dark'
}

const viewReducer = (state = defaultView, action: ViewActions): ViewState => {
  switch (action.type) {
    // Cases for changing limit & offset for fetching request
    case ActionTypes.CHANGE_OFFSET:
      return {
        ...state,
        offset: action.payload
      }

    case ActionTypes.CHANGE_LIMIT:
      return {
        ...state,
        limit: action.payload
      }

    case ActionTypes.SWITCH_LANGUAGE:
      return {
        ...state,
        language: action.payload
      }

    case ActionTypes.SWITCH_THEME:
      return {
        ...state,
        theme: action.payload
      }

    default:
      return state
  }
}

export default viewReducer

import { ActionTypes } from './themeActionTypes'
import { ThemeActions, ThemeState } from './types'

const defaultTheme: ThemeState = window.matchMedia('(prefers-color-scheme: light)')
  ? 'light'
  : 'dark'

const themeReducer = (state = defaultTheme, action: ThemeActions): ThemeState => {
  switch (action.type) {
    case ActionTypes.SWITCH_THEME:
      return action.payload as ThemeState

    default:
      return state
  }
}

export default themeReducer

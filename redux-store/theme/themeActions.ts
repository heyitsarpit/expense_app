import { ActionTypes } from './themeActionTypes'
import { SwitchTheme, Theme } from './types'

export const switchTheme = (theme: Theme): SwitchTheme => ({
  type: ActionTypes.SWITCH_THEME,
  payload: theme
})

import { ChangeLimit, ChangeOffset, Locales, SwitchLanguage, SwitchTheme, Theme } from './types'
import { ActionTypes } from './viewActionTypes'

export const switchLanguage = (locale: Locales): SwitchLanguage => ({
  type: ActionTypes.SWITCH_LANGUAGE,
  payload: locale
})

export const switchTheme = (theme: Theme): SwitchTheme => ({
  type: ActionTypes.SWITCH_THEME,
  payload: theme
})

export const changeOffset = (offset: number): ChangeOffset => ({
  type: ActionTypes.CHANGE_OFFSET,
  payload: offset
})

export const changeLimit = (limit: number): ChangeLimit => ({
  type: ActionTypes.CHANGE_LIMIT,
  payload: limit
})

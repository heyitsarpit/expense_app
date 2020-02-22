import { ActionTypes } from './viewActionTypes'

export type Theme = 'light' | 'dark'

export type Locales = 'en' | 'fr'

export interface ViewState {
  theme: Theme
  language: Locales
  offset: number
  limit: number
}

export interface SwitchLanguage {
  readonly type: ActionTypes.SWITCH_LANGUAGE
  readonly payload: Locales
}

export interface SwitchTheme {
  readonly type: ActionTypes.SWITCH_THEME
  readonly payload: Theme
}

export interface ChangeOffset {
  readonly type: ActionTypes.CHANGE_OFFSET
  readonly payload: number
}

export interface ChangeLimit {
  readonly type: ActionTypes.CHANGE_LIMIT
  readonly payload: number
}

export type ViewActions = SwitchLanguage | SwitchTheme | ChangeOffset | ChangeLimit

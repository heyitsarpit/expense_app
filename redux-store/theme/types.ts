import { ActionTypes } from './themeActionTypes'

export type Theme = 'light' | 'dark'

export type ThemeState = Theme

export interface SwitchTheme {
  readonly type: ActionTypes.SWITCH_THEME
  readonly payload: string
}

/**
 * Union type to extend when more action types needed.
 * Extend by ```type LangActions = SwitchLanguage | NewAction```
 */

export type ThemeActions = SwitchTheme

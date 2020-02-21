import { ActionTypes } from './langActionTypes'

export type Locales = 'en' | 'fr'

export type LocaleState = Locales

export interface SwitchLanguage {
  readonly type: ActionTypes.SWITCH_LANGUAGE
  readonly payload: string
}

/**
 * Union type to extend when more action types needed.
 * Extend by ```type LangActions = SwitchLanguage | NewAction```
 */

export type LangActions = SwitchLanguage

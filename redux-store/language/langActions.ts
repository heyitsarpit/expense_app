import { ActionTypes } from './langActionTypes'
import { Locales, SwitchLanguage } from './types'

export const switchLanguage = (locale: Locales): SwitchLanguage => ({
  type: ActionTypes.SWITCH_LANGUAGE,
  payload: locale
})

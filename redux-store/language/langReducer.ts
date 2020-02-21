import { ActionTypes } from './langActionTypes'
import { LangActions, LocaleState } from './types'

const defaultLang: LocaleState = 'en'

const langReducer = (state = defaultLang, action: LangActions): LocaleState => {
  switch (action.type) {
    case ActionTypes.SWITCH_LANGUAGE:
      return action.payload as LocaleState

    default:
      return state
  }
}

export default langReducer

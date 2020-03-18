import { format } from 'date-fns'
import { de, enGB, fr } from 'date-fns/locale'

import { Locales } from '../redux-store'

const getOptions = (language: Locales) => {
  let options = { locale: enGB }
  switch (language) {
    case 'en':
      options = { locale: enGB }
      break
    case 'fr':
      options = { locale: fr }
      break
    case 'de':
      options = { locale: de }
      break
    default:
      break
  }
  return options
}

export const resolveDate = (date: string, language: Locales) =>
  format(new Date(date), 'd LLLL, yyyy', getOptions(language))

export const getMonthYear = (date: string, language: Locales) =>
  format(new Date(date), 'LLLL yyyy', getOptions(language))

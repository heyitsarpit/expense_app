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

/**
 * Returns date in the format: ` "10 September, 2018" `
 */
export const resolveDate = (date: string, language: Locales) =>
  format(new Date(date), 'd LLLL, yyyy', getOptions(language))

/**
 * Returns date in the format: ` "September 2018" `
 */
export const getMonthYear = (date: string, language: Locales) =>
  format(new Date(date), 'LLLL yyyy', getOptions(language))

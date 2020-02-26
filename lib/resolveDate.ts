import { format } from 'date-fns'
import { de, enGB, fr } from 'date-fns/locale'

type Locale = 'en' | 'fr' | 'de'

const getOptions = (language: Locale) => {
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

export const resolveDate = (date: string, language: Locale) =>
  format(new Date(date), 'd LLLL, yyyy', getOptions(language))

export const getMonthYear = (date: string, language: Locale) =>
  format(new Date(date), 'LLLL yyyy', getOptions(language))

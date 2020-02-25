import { format } from 'date-fns'
import { de, enGB, fr } from 'date-fns/locale'

const resolveDate = (date: string, language: 'en' | 'fr' | 'de') => {
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

  return format(new Date(date), 'd LLLL, yyyy', options)
}

export default resolveDate

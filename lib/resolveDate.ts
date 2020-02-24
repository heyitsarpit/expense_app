import { format } from 'date-fns'
import { enGB, fr } from 'date-fns/locale'

const resolveDate = (date: string, language: 'en' | 'fr') =>
  format(new Date(date), 'd LLLL, yyyy', { locale: language === 'en' ? enGB : fr })

export default resolveDate

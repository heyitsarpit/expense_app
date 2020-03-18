import { de, en, fr } from '../locales'
import useSelector from './useSelector'

export const useTranslation = () => {
  const language = useSelector((state) => state.view.language)

  return (key: string): string => {
    switch (language) {
      case 'en':
        return en[key]
      case 'fr':
        return fr[key]
      case 'de':
        return de[key]
      default:
        return key
    }
  }
}

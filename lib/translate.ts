import de_common from '../locales/de/common.json'
import en_common from '../locales/en/common.json'
import fr_common from '../locales/fr/common.json'
import useSelector from './useSelector'

export const useTranslation = () => (value: string): string => {
  const language = useSelector((state) => state.view.language)

  const [scope, key] = value.split(':')

  switch (language) {
    case 'en':
      switch (scope) {
        case 'common':
          return en_common[key]
        default:
          break
      }
    case 'fr':
      switch (scope) {
        case 'common':
          return fr_common[key]
        default:
          break
      }
    case 'de':
      switch (scope) {
        case 'common':
          return de_common[key]
        default:
          break
      }
    default:
      return value
  }
}

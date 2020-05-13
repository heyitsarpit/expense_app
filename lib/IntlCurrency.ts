import { Locales } from '../redux-store'

const IntlCurrency = (currencyCode: string, value: string, language: Locales) =>
  new Intl.NumberFormat(language, { style: 'currency', currency: currencyCode }).format(
    parseInt(value)
  )

export default IntlCurrency

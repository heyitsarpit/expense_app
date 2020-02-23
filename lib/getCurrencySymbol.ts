const currencySymbols: Record<string, string> = {
  DKK: 'kr',
  EUR: '€',
  GBP: '£'
}

const getCurrencySymbol = (currencyCode: string): string | undefined =>
  currencySymbols[currencyCode]

export default getCurrencySymbol

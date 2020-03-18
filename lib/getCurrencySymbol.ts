const currencySymbols: Record<string, string> = {
  DKK: 'kr',
  EUR: '€',
  GBP: '£'
}

const getCurrencySymbol = (currencyCode: string): string => {
  currencyCode = currencyCode.toUpperCase()
  return currencyCode in currencySymbols ? currencySymbols[currencyCode] : currencyCode
}

export default getCurrencySymbol

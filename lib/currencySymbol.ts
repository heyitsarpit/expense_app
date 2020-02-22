const currencySymbols: Record<string, string> = {
  DKK: 'Kr',
  EUR: '€',
  GBP: '£'
}

const getCurrencySymbol = (currencyCode: string): string | undefined => {
  currencyCode = currencyCode.toUpperCase()

  const symbol = currencySymbols[currencyCode]
  return symbol ? symbol : undefined
}

export default getCurrencySymbol

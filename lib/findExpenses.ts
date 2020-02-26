import { Expense } from '../components/types'
import { getMonthYear } from './resolveDate'

type Locale = 'en' | 'fr' | 'de'

const findExpenses = (searchTerms: string[], expenses: readonly Expense[], language: Locale) =>
  expenses.filter((expense) => {
    const merchant = expense.merchant.toLowerCase(),
      first = expense.user.first.toLowerCase(),
      last = expense.user.last.toLowerCase(),
      [amount] = expense.amount.value.split('.'),
      monthYear = getMonthYear(expense.date, language).toLocaleLowerCase(),
      [month, year] = monthYear.split(' ')

    const result = searchTerms.filter(
      (term) =>
        first.includes(term) ||
        last.includes(term) ||
        merchant.includes(term) ||
        year === term ||
        month.includes(term) ||
        amount.includes(term)
    )

    return Array.isArray(result) && result.length
  })

export default findExpenses

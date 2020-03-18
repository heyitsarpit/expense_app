import { Expense, Locales } from '../redux-store'
import isNotEmpty from './jsUtils'
import { getMonthYear } from './resolveDate'

const findExpenses = (searchTerms: string[], expenses: readonly Expense[], language: Locales) =>
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

    return isNotEmpty(result)
  })

export default findExpenses

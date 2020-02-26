import ExpenseList from './ExpenseList'
import SearchError from './SearchError'
import { Expense } from './types'

interface SearchItemsProps {
  readonly expenses: readonly Expense[]
}

const SearchItemsList: React.FC<SearchItemsProps> = ({ expenses }) => {
  return Array.isArray(expenses) && expenses.length ? (
    <ExpenseList expenses={expenses} />
  ) : (
    <SearchError />
  )
}

export default SearchItemsList

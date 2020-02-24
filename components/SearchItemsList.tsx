import ExpenseList from './ExpenseList'
import { Expense } from './types'

interface SearchItemsProps {
  readonly expenses: readonly Expense[]
}

const SearchItemsList: React.FC<SearchItemsProps> = ({ expenses }) => {
  return <ExpenseList expenses={expenses} />
}

export default SearchItemsList

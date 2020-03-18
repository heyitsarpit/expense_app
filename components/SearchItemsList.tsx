import { isNotEmpty } from '../lib/jsUtils'
import { Expense } from '../redux-store'
import ExpenseList from './ExpenseList'
import SearchError from './SearchError'

interface SearchItemsProps {
  readonly expenses: readonly Expense[]
}

const SearchItemsList: React.FC<SearchItemsProps> = ({ expenses }) => {
  return isNotEmpty(expenses) ? <ExpenseList expenses={expenses} /> : <SearchError />
}

export default SearchItemsList

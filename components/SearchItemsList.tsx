import { Expense } from './types'
import ExpenseList from './ExpenseList'

interface SearchItemsProps {
  expenses: Expense[]
}

const SearchItemsList: React.FC<SearchItemsProps> = ({expenses}) => {
  return <ExpenseList expenses={expenses} />
}

export default SearchItemsList

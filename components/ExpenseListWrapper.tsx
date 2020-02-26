import useSelector from '../lib/useSelector'
import ExpenseList from './ExpenseList'
import Pagination from './Pagination'

const ExpenseListWrapper: React.FC = () => {
  const { expenses } = useSelector((state) => state.expenses)

  return (
    <div>
      <ExpenseList expenses={expenses} />
      <Pagination />
    </div>
  )
}

export default ExpenseListWrapper

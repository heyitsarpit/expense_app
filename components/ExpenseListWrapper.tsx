import { useContext } from 'react'

import useSelector from '../lib/useSelector'
import { StaticContext } from '../pages'
import ExpenseList from './ExpenseList'
import Pagination from './Pagination'

const isEmpty = <T,>(arr: readonly T[]) => Array.isArray(arr) && arr.length

const ExpenseListWrapper: React.FC = () => {
  const { expenses } = useSelector((state) => state.expenses)
  const staticExpenses = useContext(StaticContext)

  return (
    <div>
      <ExpenseList expenses={isEmpty(expenses) ? expenses : staticExpenses} />
      <Pagination />
    </div>
  )
}

export default ExpenseListWrapper

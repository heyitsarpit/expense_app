import { useContext } from 'react'

import isNotEmpty from '../lib/jsUtils'
import useSelector from '../lib/useSelector'
import { StaticPropsCtx } from '../pages'
import ExpenseList from './ExpenseList'
import Pagination from './Pagination'

const ExpenseListWrapper: React.FC = () => {
  const { expenses } = useSelector((state) => state.expenses)
  const staticExpenses = useContext(StaticPropsCtx)

  return (
    <div>
      <ExpenseList expenses={isNotEmpty(expenses) ? expenses : staticExpenses} />
      <Pagination />
    </div>
  )
}

export default ExpenseListWrapper

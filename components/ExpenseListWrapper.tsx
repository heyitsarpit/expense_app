import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import useSelector from '../lib/useSelector'
import { fetchExpenses } from '../redux-store'
import ExpenseList from './ExpenseList'
import Pagination from './Pagination'

const ExpenseListWrapper: React.FC = () => {
  const dispatch = useDispatch()

  const { expenses } = useSelector((state) => state.expenses)
  const { limit } = useSelector((state) => state.view)

  useEffect(() => {
    // limit=20,offset=0
    fetchExpenses(limit, 0)(dispatch)
  }, [])

  return (
    <div>
      <ExpenseList expenses={expenses} />
      <Pagination />
    </div>
  )
}

export default ExpenseListWrapper

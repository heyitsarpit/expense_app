import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import useSelector from '../lib/useSelector'
import { fetchExpenses } from '../redux-store'
import ExpenseItem from './ExpenseItem'

const ExpenseList: React.FC = () => {
  const { expenses } = useSelector((state) => state.expenses)
  const dispatch = useDispatch()

  useEffect(() => {
    fetchExpenses()(dispatch)
  }, [])

  return (
    <>
      {expenses.map((expense) => (
        <ExpenseItem {...expense} key={expense.id} />
      ))}
    </>
  )
}

export default ExpenseList

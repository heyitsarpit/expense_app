import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import useSelector from '../lib/useSelector'
import { Expense, fetchExpenses } from '../redux-store'
import { changeLimit, changeOffset } from '../redux-store/view/viewActions'
import ExpenseListWrapper from './ExpenseListWrapper'
import Search from './Search'
import SearchItemsList from './SearchItemsList'
import ParentResponsive from './styles/ParentResponsive'

const AppWrapper: React.FC = () => {
  const dispatch = useDispatch()
  const { query } = useRouter()

  const [searching, setSearching] = useState(false)
  const [foundExpenses, setFoundExpenses] = useState([] as Expense[])

  const { limit, offset } = useSelector((state) => state.view)

  useEffect(() => {
    if (query.limit) {
      dispatch(changeLimit(Number(query.limit)))
    }
  }, [query.limit])

  useEffect(() => {
    if (query.offset) {
      dispatch(changeOffset(Number(query.offset)))
    }
  }, [query.offset])

  useEffect(() => {
    dispatch(fetchExpenses(limit, offset))
  }, [limit, offset])

  return (
    <ParentResponsive>
      <Search setSearching={setSearching} setFoundExpenses={setFoundExpenses} />
      {searching ? <SearchItemsList expenses={foundExpenses} /> : <ExpenseListWrapper />}
    </ParentResponsive>
  )
}

export default AppWrapper

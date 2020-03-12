import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import useSelector from '../lib/useSelector'
import { fetchExpenses } from '../redux-store'
import ExpenseListWrapper from './ExpenseListWrapper'
import Search from './Search'
import SearchItemsList from './SearchItemsList'
import ParentResponsive from './styles/ParentResponsive'

const AppWrapper: React.FC = () => {
  const dispatch = useDispatch()

  const [searching, setSearching] = useState(false)
  const [foundExpenses, setFoundExpenses] = useState([])

  const { limit, offset } = useSelector((state) => state.view)

  useEffect(() => {
    dispatch(fetchExpenses(limit, offset))
  }, [])

  return (
    <ParentResponsive>
      <Search setSearching={setSearching} setFoundExpenses={setFoundExpenses} />
      {searching ? <SearchItemsList expenses={foundExpenses} /> : <ExpenseListWrapper />}
    </ParentResponsive>
  )
}

export default AppWrapper

import { useState } from 'react'

import ExpenseListWrapper from './ExpenseListWrapper'
import Search from './Search'
import SearchItemsList from './SearchItemsList'
import ParentResponsive from './styles/ParentResponsive'

const AppWrapper: React.FC = () => {
  const [searching, setSearching] = useState(false)
  const [expenses, setFoundExpenses] = useState([])

  return (
    <ParentResponsive>
      <Search setSearching={setSearching} setFoundExpenses={setFoundExpenses} />
      {searching ? <SearchItemsList expenses={expenses} /> : <ExpenseListWrapper />}
    </ParentResponsive>
  )
}

export default AppWrapper

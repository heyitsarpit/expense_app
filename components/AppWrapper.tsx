import { useState } from 'react'

import ExpenseListWrapper from './ExpenseListWrapper'
import Search from './Search'
import SearchItemsList from './SearchItemsList'

const AppWrapper: React.FC = () => {
  const [searching, setSearching] = useState(false)
  const [foundExpenses, setFoundExpenses] = useState([])

  return (
    <div>
      <Search setSearching={setSearching} setFoundExpenses={setFoundExpenses} />
      {searching ? <SearchItemsList expenses={foundExpenses} /> : <ExpenseListWrapper />}
    </div>
  )
}

export default AppWrapper

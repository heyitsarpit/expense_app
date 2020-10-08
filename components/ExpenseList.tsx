import styled from 'styled-components'

import { Expense } from '../redux-store'
import ExpenseCard from './ExpenseCard'

interface ExpenseListProps {
  readonly expenses: readonly Expense[]
}

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`
const ExpenseList: React.FC<ExpenseListProps> = ({ expenses }) => {
  return (
    <List>
      {expenses.map((expense) => (
        <li>
          <ExpenseCard {...expense} key={expense.id} />
        </li>
      ))}
    </List>
  )
}

export default ExpenseList

import { Expense } from '../redux-store'
import ExpenseCard from './ExpenseCard'

interface ExpenseListProps {
  readonly expenses: readonly Expense[]
}

const ExpenseList: React.FC<ExpenseListProps> = ({ expenses }) => {
  return (
    <>
      {expenses.map((expense) => (
        <ExpenseCard {...expense} key={expense.id} />
      ))}
    </>
  )
}

export default ExpenseList

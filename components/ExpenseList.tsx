
import ExpenseCard from './ExpenseCard'
import { Expense } from './types'

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

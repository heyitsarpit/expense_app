import { useRouter } from 'next/router'

import Expense from '../../components/Expense'

const SingleExpense: React.FC = () => {
  const { query } = useRouter()

  return <Expense id={query.id} />
}

export default SingleExpense

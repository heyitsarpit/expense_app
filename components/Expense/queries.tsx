import axios from 'axios'
import { useQuery } from 'react-query'

import { getExpenseById } from '../../lib/resolveURL'
import { Expense } from '../../redux-store'

export const useExpenseById = (id: string) => {
  return useQuery<{ data: Expense }>(
    `expenses/${id}`,
    async () => await axios.get(getExpenseById(id))
  )
}

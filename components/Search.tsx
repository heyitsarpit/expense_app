import { ChangeEvent, FormEvent, useState } from 'react'
import styled from 'styled-components'

import { getMonthYear } from '../lib/resolveDate'
import { useTranslation } from '../lib/translate'
import useSelector from '../lib/useSelector'
import SearchBox from './styles/SearchBox'
import SearchButton from './styles/SearchButton'
import SearchInput from './styles/SearchInput'
import { Expense } from './types'

interface SearchProps {
  setSearching: (bool: boolean) => void
  setFoundExpenses: (expenses: Expense[]) => void
}

const searchImgPath = '/images/search.svg'

const Search: React.FC<SearchProps> = ({ setSearching, setFoundExpenses }) => {
  const language = useSelector((state) => state.view.language)
  const { expenses } = useSelector((state) => state.expenses)
  const [searchValue, setSearchValue] = useState('')

  const findExpenses = (searchTerms: string[]) =>
    expenses.filter((expense) => {
      const merchant = expense.merchant.toLowerCase(),
        first = expense.user.first.toLowerCase(),
        last = expense.user.last.toLowerCase(),
        [amount] = expense.amount.value.split('.'),
        monthYear = getMonthYear(expense.date, language).toLocaleLowerCase(),
        [month, year] = monthYear.split(' ')

      const result = searchTerms.filter(
        (term) =>
          first.includes(term) ||
          last.includes(term) ||
          merchant.includes(term) ||
          year === term ||
          month.includes(term) ||
          amount.includes(term)
      )
      
      return Array.isArray(result) && result.length
    })

  const onQueryChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
    setSearchValue(value.toLowerCase())

  const onQuerySearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (searchValue) {
      const foundExpenses = findExpenses(searchValue.split(' '))
      if (Array.isArray(foundExpenses) && foundExpenses.length) {
        setFoundExpenses(foundExpenses)
        setSearching(true)
      }
    } else {
      setSearching(false)
    }
  }

  const t = useTranslation()
  return (
    <SearchBox onSubmit={onQuerySearch}>
      <SearchInput
        value={searchValue}
        onChange={onQueryChange}
        type="text"
        placeholder={t('common:searchPlaceholder')}
      />
      <SearchButton type="submit">
        <img src={searchImgPath} />
      </SearchButton>
    </SearchBox>
  )
}

export default Search

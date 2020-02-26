import { ChangeEvent, FormEvent, useState } from 'react'

import findExpenses from '../lib/findExpenses'
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

  const doSearch = () => {
    if (searchValue) {
      const foundExpenses = findExpenses(searchValue.split(' '), expenses, language)
      setFoundExpenses(foundExpenses)
      setSearching(true)
    } else {
      setFoundExpenses([])
      setSearching(false)
    }
  }

  const onQueryChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(value.toLowerCase())
    doSearch()
  }

  const onQuerySearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    doSearch()
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

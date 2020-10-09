import { ChangeEvent, FormEvent, useEffect, useState } from 'react'

import findExpenses from '../lib/findExpenses'
import useDebounce from '../lib/useDebounce'
import useSelector from '../lib/useSelector'
import { useTranslation } from '../lib/useTranslation'
import { Expense } from '../redux-store'
import SearchBox from './styles/SearchBox'
import SearchButton from './styles/SearchButton'
import SearchInput from './styles/SearchInput'

interface SearchProps {
  setSearching: (bool: boolean) => void
  setFoundExpenses: (expenses: Expense[]) => void
}

const searchImgPath = '/images/search.svg'

const Search: React.FC<SearchProps> = ({ setSearching, setFoundExpenses }) => {
  const language = useSelector((state) => state.view.language)
  const { expenses } = useSelector((state) => state.expenses)

  const [searchValue, setSearchValue] = useState('')
  const debouncedSearchValue = useDebounce(searchValue, 50)

  useEffect(() => {
    doSearch(debouncedSearchValue)
  }, [debouncedSearchValue])

  const doSearch = (searchQuery: string) => {
    if (searchQuery) {
      const searchTerms = debouncedSearchValue.match(/\b(\w+)\b/g) as RegExpMatchArray
      setFoundExpenses(findExpenses(searchTerms, expenses, language))
      setSearching(true)
    } else {
      setFoundExpenses([])
      setSearching(false)
    }
  }

  const onQueryChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(value.toLowerCase())
  }

  const onQuerySearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    doSearch(debouncedSearchValue)
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
        <img src={searchImgPath} alt="search" />
      </SearchButton>
    </SearchBox>
  )
}

export default Search

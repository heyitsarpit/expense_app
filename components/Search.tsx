import { ChangeEvent, FormEvent, useEffect, useState } from 'react'

import findExpenses from '../lib/findExpenses'
import { useTranslation } from '../lib/translate'
import useSelector from '../lib/useSelector'
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

  useEffect(() => {
    doSearch()
  }, [searchValue])

  const doSearch = () => {
    if (searchValue) {
      const searchTerms = searchValue.match(/\b(\w+)\b/g) //removes whitespace
      const foundExpenses = findExpenses(searchTerms, expenses, language)
      setFoundExpenses(foundExpenses)
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

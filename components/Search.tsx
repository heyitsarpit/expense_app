import { ChangeEvent, FormEvent, useEffect, useState } from 'react'

import findExpenses from '../lib/findExpenses'
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

  useEffect(() => {
    doSearch()
  }, [searchValue])

  const doSearch = () => {
    if (searchValue) {
      //removes whitespace, notice the `!` at the end, non nullable type assertion
      const searchTerms = searchValue.match(/\b(\w+)\b/g)!
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

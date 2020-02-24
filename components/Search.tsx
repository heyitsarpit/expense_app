import { ChangeEvent, useState } from 'react'
import styled from 'styled-components'

import useSelector from '../lib/useSelector'
import { Expense } from './types'

interface SearchProps {
  setSearching: (bool: boolean) => void
  setFoundExpenses: (expenses: Expense[]) => void
}

const SearchBox = styled.input`
  background: transparent;
  border: none;
  width: 100%;
  height: 2em;
  font-size: 1.5em;
  font-family: ${(props) => props.theme.fontMain};
  color: ${(props) => props.theme.textPrimary};
  border-bottom: solid 1px ${(props) => props.theme.colorUnfocused};
  ::placeholder {
    color: ${(props) => props.theme.textSecondary};
  }
  :focus {
    outline: none;
    border-color: ${(props) => props.theme.textPrimary};
  }
`

const Search: React.FC<SearchProps> = ({ setSearching, setFoundExpenses }) => {
  const [searchValue, setSearchValue] = useState('')
  const { expenses } = useSelector((state) => state.expenses)

  const foundExpenses = expenses.map((expense) => {
    const {
      merchant,
      user: { first, last }
    } = expense
    const searchTerms = searchValue.split(' ')
    const result = searchTerms.find(
      (term) =>
        first.includes(term) || last.includes(term) || merchant.toLowerCase().includes(term)
    )

    return result ? expense : []
  })

  const onSearchQuery = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(value.trim().toLowerCase())
    if (value) {
      setSearching(true)
      setFoundExpenses(foundExpenses as Expense[])
    } else {
      setSearching(false)
    }
  }

  return (
    <SearchBox value={searchValue} onChange={onSearchQuery} placeholder="Search for expenses" />
  )
}

export default Search

import styled from 'styled-components'

const SearchButton = styled.button`
  background: transparent;
  border: none;
  border-bottom: solid 1px ${(props) => props.theme.colorUnfocused};
  :focus {
    outline: none;
    border-color: ${(props) => props.theme.textPrimary};
  }
`
export default SearchButton

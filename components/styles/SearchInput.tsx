import styled from 'styled-components'

const SearchInput = styled.input`
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

export default SearchInput

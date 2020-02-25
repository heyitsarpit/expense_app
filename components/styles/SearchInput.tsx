import styled from 'styled-components'

const SearchInput = styled.input`
  background: transparent;
  border: none;
  width: 100%;
  height: 2em;
  font-size: 1.5em;
  font-family: ${(props) => props.theme.fontMain};
  color: ${(props) => props.theme.textPrimary};
  ::placeholder {
    color: ${(props) => props.theme.textSecondary};
  }
  :focus {
    outline: none;
  }
`

export default SearchInput

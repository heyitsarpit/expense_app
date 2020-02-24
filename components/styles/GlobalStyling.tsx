import styled from 'styled-components'

const GlobalStyling = styled.div`
  color: ${(props) => props.theme.textPrimary};
  background: ${(props) => props.theme.bgColor};
`

export default GlobalStyling

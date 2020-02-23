import styled from 'styled-components'

const GlobalStyling = styled.div`
  color: ${(props) => props.theme.textPrimary};
  background: ${(props) => props.theme.bgColor};
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  z-index: 1000;
`

export default GlobalStyling

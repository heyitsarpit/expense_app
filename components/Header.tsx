import styled from 'styled-components'

import ColorThemeSelector from './ColorThemeSelector'
import LanguageSelector from './LanguageSelector'

const Wrapper = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 60%;
  margin: 0 auto;
`

const Header: React.FC<any> = ({ setTheme }) => (
  <Wrapper>
    <ColorThemeSelector setTheme={setTheme} />
    <LanguageSelector />
  </Wrapper>
)

export default Header

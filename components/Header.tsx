import styled from 'styled-components'

import { useTranslation } from '../lib/translate'
import ColorThemeSelector from './ColorThemeSelector'
import LanguageSelector from './LanguageSelector'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 60%;
  margin: 0 auto;
  margin-top: 1em;
  background: ${(props) => props.theme.bgColor};
`
const Title = styled.div`
  font-size: 1.2em;
  font-family: ${(props) => props.theme.fontSecondary};
  color: ${(props) => props.theme.textPrimary};
  font-weight: 200;
  font-stretch: expanded;
  align-self: center;
`

const Header: React.FC<any> = ({ setTheme }) => {
  const t = useTranslation()
  return (
    <Wrapper>
      <ColorThemeSelector setTheme={setTheme} />
      <Title>{t('common:headingTitle')}</Title>
      <LanguageSelector />
    </Wrapper>
  )
}

export default Header

import styled from 'styled-components'

import { useTranslation } from '../lib/translate'
import ColorThemeSelector from './ColorThemeSelector'
import LanguageSelector from './LanguageSelector'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 1em;
  width: 60%;
  margin: 0 auto;
  background: ${(props) => props.theme.bgColor};
  flex-basis: content;
  @media only screen and (max-width: 1052px) {
    width: 80%;
  }
`

const Title = styled.div`
  font-size: 1.2em;
  font-family: ${(props) => props.theme.fontSecondary};
  color: ${(props) => props.theme.textPrimary};
  text-transform: uppercase;
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

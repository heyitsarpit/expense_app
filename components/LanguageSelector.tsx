import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { useTranslation } from '../lib/translate'
import { switchLanguage } from '../redux-store'

const LanguageWrapper = styled.span`
  font-family: ${(props) => props.theme.fontSecondary};
  color: ${(props) => props.theme.textSecondary};
  font-weight: 200;
  font-stretch: expanded;
  align-self: center;
`

const Language = styled.button`
  background: transparent;
  outline: none;
  border: none;
  color: ${(props) => props.theme.textPrimary};
  font-family: ${(props) => props.theme.fontMain};
  font-weight: 200;
  font-stretch: expanded;
`

const LanguageSelector: React.FC = () => {
  const dispatch = useDispatch()
  const t = useTranslation()

  return (
    <LanguageWrapper>
      <span>{t('common:language')}:</span>
      <Language onClick={() => dispatch(switchLanguage('en'))}>EN</Language>
      <Language onClick={() => dispatch(switchLanguage('fr'))}>FR</Language>
      <Language onClick={() => dispatch(switchLanguage('de'))}>DE</Language>
    </LanguageWrapper>
  )
}

export default LanguageSelector

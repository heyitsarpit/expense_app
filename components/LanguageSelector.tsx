import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { useTranslation } from '../lib/useTranslation'
import { switchLanguage } from '../redux-store'

const LanguageWrapper = styled.span`
  font-family: ${(props) => props.theme.fontSecondary};
  color: ${(props) => props.theme.textSecondary};
  font-weight: 200;
  font-stretch: expanded;
  align-self: center;
  font-size: 1em;
  @media only screen and (min-width: ${(props) => props.theme.minWidthSmall}px) and (max-width: ${(
      props
    ) => props.theme.maxWidthSmall}px) {
    font-size: 0.8em;
  }
  @media only screen and (min-width: ${(props) =>
      props.theme.minWidthMedium}px) and (max-width: ${(props) => props.theme.maxWidthMedium}px) {
    font-size: 0.9em;
  }
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

import { ChangeEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { switchLanguage } from '../redux-store'

type Locales = 'en' | 'fr'

const LanguageWrapper = styled.span`
  font-family: ${(props) => props.theme.fontSecondary};
  font-weight: 200;
  font-stretch: expanded;
  hr.vertical {
    height: 100%;
    width: 0;
    border: 1px solid black;
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

  return (
    <LanguageWrapper>
      <span>Language:</span>
      <Language onClick={() => dispatch(switchLanguage('en'))}>EN</Language>
      <Language onClick={() => dispatch(switchLanguage('fr'))}>FR</Language>
    </LanguageWrapper>
  )
}

export default LanguageSelector

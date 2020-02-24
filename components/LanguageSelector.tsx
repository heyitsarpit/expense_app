import { ChangeEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { switchLanguage } from '../redux-store'

type Locales = 'en' | 'fr'

const Select = styled.select``
// background-color: ${(props) => props.theme.bgColor};

const LanguageSelector: React.FC = () => {
  const [language, setLanguage] = useState('en')
  const dispatch = useDispatch()

  const onLanguageChange = ({ target: { value } }: ChangeEvent<HTMLSelectElement>) => {
    setLanguage(value)
    dispatch(switchLanguage(value as Locales))
  }

  return (
    <span>
      <Select onChange={onLanguageChange} value={language}>
        <option value="en">EN</option>
        <option value="fr">FR</option>
      </Select>
    </span>
  )
}

export default LanguageSelector

import { ChangeEvent, useState } from 'react'
import { useDispatch } from 'react-redux'

import { switchLanguage } from '../redux-store'

type Locales = 'en' | 'fr'

const LanguageSelector: React.FC = () => {
  const [language, setLanguage] = useState('en')
  const dispatch = useDispatch()

  const onLanguageChange = ({ target: { value } }: ChangeEvent<HTMLSelectElement>) => {
    setLanguage(value)
    dispatch(switchLanguage(value as Locales))
  }

  return (
    <span>
      <select onChange={onLanguageChange} value={language}>
        <option value="en">EN</option>
        <option value="fr">FR</option>
      </select>
    </span>
  )
}

export default LanguageSelector

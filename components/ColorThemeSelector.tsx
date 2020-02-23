import { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { switchTheme } from '../redux-store'

const moonPath = '/images/moon.svg'
const sunPath = '/images/sun.svg'

type Theme = 'light' | 'dark'

const ColorThemeSelector: React.FC = () => {
  const dispatch = useDispatch()
  const [theme, setTheme] = useState('dark')

  const onThemeChange = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark')
    dispatch(switchTheme(theme as Theme))
  }

  return <img src={theme === 'light' ? moonPath : sunPath} onClick={onThemeChange} />
}

export default ColorThemeSelector

import { useState, Dispatch } from 'react'
import styled from 'styled-components'

import { DarkTheme, LightTheme } from './styles/Theme'

const moonPath = '/images/moon.svg'
const sunPath = '/images/sun.svg'

type Theme = 'light' | 'dark'

const ColorThemeSelector: React.FC<any> = ({ setTheme }) => {
  const [bool, setBool] = useState(false)

  const onThemeChange = () => {
    bool ? setTheme(LightTheme) : setTheme(DarkTheme)
    setBool(!bool)
  }

  return <img src={bool ? moonPath : sunPath} onClick={onThemeChange} />
}

export default ColorThemeSelector

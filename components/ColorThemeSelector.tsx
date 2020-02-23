import { useState } from 'react'
import styled from 'styled-components'

import { DarkTheme, LightTheme } from './styles/Theme'

const moonPath = '/images/moon.svg'
const sunPath = '/images/sun.svg'

const IMG = styled.img`
  width: 40px;
`

const ColorThemeSelector: React.FC<any> = ({ setTheme }) => {
  const [bool, setBool] = useState(true)

  const onThemeChange = () => {
    bool ? setTheme(LightTheme) : setTheme(DarkTheme)
    setBool(!bool)
  }

  return <IMG src={bool ? sunPath : moonPath} onClick={onThemeChange} />
}

export default ColorThemeSelector

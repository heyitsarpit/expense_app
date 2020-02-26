import { useState } from 'react'
import styled from 'styled-components'

import { DarkTheme, LightTheme } from './styles/Theme'

const moonPath = '/images/moon.svg'
const sunPath = '/images/sun.svg'

const IMG = styled.img`
  width: 40px;
  cursor: pointer;

  @media only screen and (min-width: ${(props) => props.theme.minWidthSmall}px) and (max-width: ${(
      props
    ) => props.theme.maxWidthSmall}px) {
    width: 30px;
  }
  @media only screen and (min-width: ${(props) => props.theme.minWidthMedium}px) and (max-width: ${(
      props
    ) => props.theme.maxWidthMedium}px) {
    width: 35px;
  }
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

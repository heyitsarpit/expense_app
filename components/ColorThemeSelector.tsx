import styled from 'styled-components'

import useTheme from '../lib/useTheme'

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
  @media only screen and (min-width: ${(props) =>
      props.theme.minWidthMedium}px) and (max-width: ${(props) => props.theme.maxWidthMedium}px) {
    width: 35px;
  }
`

const ColorThemeSelector: React.FC = () => {
  const { setTheme, theme } = useTheme((state) => state)

  const onThemeChange = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return <IMG src={theme === 'light' ? moonPath : sunPath} onClick={onThemeChange} />
}

export default ColorThemeSelector

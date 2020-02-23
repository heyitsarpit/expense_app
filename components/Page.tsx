import { useState } from 'react'
import { Provider } from 'react-redux'
import styled, { ThemeProvider } from 'styled-components'

import Store from '../redux-store/store'
import Header from './Header'
import Meta from './Meta'
import GlobalStyling from './styles/GlobalStyling'
import { DarkTheme } from './styles/Theme'

const Container = styled.div`
  height: 100%;
  width: 100%;
  color: ${(props) => props.theme.textPrimary};
  background: ${(props) => props.theme.bgColor};
`

const Page: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(DarkTheme)

  return (
    <Provider store={Store}>
      <ThemeProvider theme={theme}>
        <Meta />
        <GlobalStyling>
          <Header setTheme={setTheme} />
          <Container>{children}</Container>
        </GlobalStyling>
      </ThemeProvider>
    </Provider>
  )
}

export default Page

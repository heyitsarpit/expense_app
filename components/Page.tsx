import { Provider } from 'react-redux'
import styled, { ThemeProvider } from 'styled-components'

import Store from '../redux-store/store'
import Header from './Header'
import Meta from './Meta'
import GlobalStyling from './styles/GlobalStyling'
import { DarkTheme } from './styles/Theme'
import { useState } from 'react'

const Container = styled.div``

const Page: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(DarkTheme)

  return (
    <Provider store={Store}>
      <ThemeProvider theme={theme}>
        <Meta />
        <GlobalStyling />
        <Header setTheme={setTheme}/>
        <Container>{children}</Container>
      </ThemeProvider>
    </Provider>
  )
}
export default Page

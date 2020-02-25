import { useState } from 'react'
import { Provider } from 'react-redux'
import styled, { ThemeProvider } from 'styled-components'

import Store from '../redux-store/store'
import Footer from './Footer'
import Header from './Header'
import Meta from './Meta'
import GlobalStyles from './styles/GlobalStyles'
import { DarkTheme } from './styles/Theme'

const Container = styled.div`
  color: ${(props) => props.theme.textPrimary};
  background: ${(props) => props.theme.bgColor};
`

const Page: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(DarkTheme)

  return (
    <Provider store={Store}>
      <ThemeProvider theme={theme}>
        <Meta />
        <GlobalStyles />
        <Header setTheme={setTheme} />
        <Container>{children}</Container>
        <Footer />
      </ThemeProvider>
    </Provider>
  )
}

export default Page

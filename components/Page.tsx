import { useState } from 'react'
import { Provider } from 'react-redux'
import styled, { ThemeProvider } from 'styled-components'

import Store from '../redux-store/store'
import Footer from './Footer'
import Header from './Header'
import Meta from './Meta'
import GlobalStyles from './styles/GlobalStyles'
import { DarkTheme } from './styles/Theme'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.3em;
  padding: 1em;
  border: 1.5em solid ${(props) => props.theme.borderColor};
`

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
        <Wrapper>
          <Header setTheme={setTheme} />
          <Container>{children}</Container>
          <Footer />
        </Wrapper>
      </ThemeProvider>
    </Provider>
  )
}

export default Page

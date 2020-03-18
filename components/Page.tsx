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
  min-height: 100vh;

  @media only screen and (min-width: ${(props) => props.theme.minWidthSmall}px) and (max-width: ${(
      props
    ) => props.theme.maxWidthSmall}px) {
    margin: 1em;
    padding: 0.8em;
    border-width: 1em;
  }

  /* SMARTPHONES LANDSCAPE */
  @media only screen and (min-width: ${(props) =>
      props.theme.minWidthMedium}px) and (max-width: ${(props) => props.theme.maxWidthMedium}px) {
    margin: 1.1em;
    padding: 0.9em;
    border-width: 1.2em;
  }
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

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
  padding: 1em;
  border: 1.5em solid ${(props) => props.theme.borderColor};
  min-height: 100%;

  @media only screen and (min-width: ${(props) => props.theme.minWidthSmall}px) and (max-width: ${(
      props
    ) => props.theme.maxWidthSmall}px) {
    padding: 0.8em;
    border-width: 1em;
  }

  /* SMARTPHONES LANDSCAPE */
  @media only screen and (min-width: ${(props) =>
      props.theme.minWidthMedium}px) and (max-width: ${(props) => props.theme.maxWidthMedium}px) {
    padding: 0.9em;
    border-width: 1.2em;
  }
`

const Main = styled.main`
  flex: 1;
  position: relative;

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
          <Main>{children}</Main>
          <Footer />
        </Wrapper>
      </ThemeProvider>
    </Provider>
  )
}

export default Page

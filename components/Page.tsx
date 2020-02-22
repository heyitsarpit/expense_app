import { Provider } from 'react-redux'
import styled, { ThemeProvider } from 'styled-components'

import Store from '../redux-store/store'
import Header from './Header'
import Meta from './Meta'
import GlobalStyling from './styles/GlobalStyling'
import Theme from './styles/Theme'

const Container = styled.div``

const Page: React.FC = ({ children }) => (
  <Provider store={Store}>
    <ThemeProvider theme={Theme}>
      <Meta />
      <GlobalStyling />
      <Header />
      <Container>{children}</Container>
    </ThemeProvider>
  </Provider>
)

export default Page

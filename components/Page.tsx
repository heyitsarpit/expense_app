import styled, { ThemeProvider } from 'styled-components'

import Header from './Header'
import Meta from './Meta'
import GlobalStyling from './styles/GlobalStyling'
import Theme from './styles/Theme'

const Container = styled.div``

const Page: React.FC = ({ children }) => (
  <ThemeProvider theme={Theme}>
    <Meta />
    <GlobalStyling />
    <Header />
    <Container>{children}</Container>
  </ThemeProvider>
)

export default Page

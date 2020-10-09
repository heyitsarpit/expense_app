import { AppProps } from 'next/app'
import { QueryCache, ReactQueryCacheProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query-devtools'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import Page from '../components/Page'
import { DarkTheme, LightTheme } from '../components/styles/Theme'
import useTheme from '../lib/useTheme'
import Store from '../redux-store/store'

const queryCache = new QueryCache()

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const theme = useTheme((state) => state.theme)

  return (
    <>
      <ThemeProvider theme={theme === 'light' ? LightTheme : DarkTheme}>
        <Provider store={Store}>
          <ReactQueryCacheProvider queryCache={queryCache}>
            <Page>
              <Component {...pageProps} />
            </Page>
          </ReactQueryCacheProvider>
        </Provider>
      </ThemeProvider>

      <ReactQueryDevtools initialIsOpen={false} />
    </>
  )
}

export default MyApp

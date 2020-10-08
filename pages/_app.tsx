import { AppProps } from 'next/app'

import Page from '../components/Page'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Page>
        <Component {...pageProps} />
      </Page>
    </>
  )
}

export default MyApp

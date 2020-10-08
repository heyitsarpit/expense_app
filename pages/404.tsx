import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'

const Wrapper = styled.section``

const Custom404: React.FC = () => {
  return (
    <>
      <Head>
        <title>404 - Page Not Found</title>
      </Head>
      <Wrapper>
        <h1>404 - The Page you're looking for does not exist</h1>
        <Link href="/">
          <a>Go Back Home</a>
        </Link>
      </Wrapper>
    </>
  )
}

export default Custom404

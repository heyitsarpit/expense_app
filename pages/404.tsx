import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'

const Wrapper = styled.section`
  height: 100%;
  width: 100%;

  position: absolute;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid red;

  & a {
    text-decoration: none;
    color: inherit;
    border: 1px solid ${(props) => props.theme.textPrimary};
    padding: 0.5em;
    margin: 0.8em;
    border-radius: 5px;
  }
`

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

import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'

import { useTranslation } from '../lib/useTranslation'

const Wrapper = styled.section`
  height: 100%;
  width: 100%;

  position: absolute;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-transform: uppercase;

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
  const t = useTranslation()
  return (
    <>
      <Head>
        <title>404 | {t('common:pageNotFound')}</title>
      </Head>
      <Wrapper>
        <h1>404 - {t('common:404_message')}</h1>
        <Link href="/expenses">
          <a>{t('common:goBackButton')}</a>
        </Link>
      </Wrapper>
    </>
  )
}

export default Custom404

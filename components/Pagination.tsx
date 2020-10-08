import Link from 'next/link'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import useSelector from '../lib/useSelector'
import { useTranslation } from '../lib/useTranslation'
import { changeOffset } from '../redux-store'

const PaginationButton = styled.button`
  min-width: 5em;
  margin: 0 auto;
  background: transparent;
  color: ${(props) => props.theme.textPrimary};
  font-family: ${(props) => props.theme.fontSecondary};
  font-size: 1em;
  padding: 0.2em;
  border: solid 1px ${(props) => props.theme.textPrimary};
  border-radius: 1em;
  margin-top: 1em;
  margin-bottom: 1em;

  :disabled {
    opacity: 0.3;
  }
  :focus {
    outline: none;
  }

  /* SMARTPHONES PORTRAIT */
  @media only screen and (min-width: ${(props) => props.theme.minWidthSmall}px) and (max-width: ${(
      props
    ) => props.theme.maxWidthSmall}px) {
    font-size: 0.7em;
    padding: 0.4em;
  }

  /* SMARTPHONES LANDSCAPE */
  @media only screen and (min-width: ${(props) =>
      props.theme.minWidthMedium}px) and (max-width: ${(props) => props.theme.maxWidthMedium}px) {
    font-size: 0.9em;
    padding: 0.4em;
  }
`

const PaginationButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`

const Pagination: React.FC = () => {
  const { limit, offset } = useSelector((state) => state.view)
  const total = useSelector((state) => state.expenses.total)
  const prevActive = !(offset <= 0)
  const nextActive = !(offset + limit >= total)

  const t = useTranslation()
  return (
    <PaginationButtonWrapper>
      <Link
        href={{ pathname: '/expenses', query: { limit, offset: Math.max(offset - limit, 0) } }}>
        <a>
          <PaginationButton disabled={!prevActive}>{t('common:previous')}</PaginationButton>
        </a>
      </Link>

      <Link
        href={{
          pathname: '/expenses',
          query: { limit, offset: Math.min(offset + limit, total) }
        }}>
        <a>
          <PaginationButton disabled={!nextActive}>{t('common:next')}</PaginationButton>
        </a>
      </Link>
    </PaginationButtonWrapper>
  )
}

export default Pagination

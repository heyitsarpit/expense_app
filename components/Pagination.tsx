import { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import useSelector from '../lib/useSelector'
import { useTranslation } from '../lib/useTranslation'
import { changeOffset, fetchExpenses } from '../redux-store'

const PaginationButton = styled.button`
  width: 20%;
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
  justify-content: center;
  align-items: center;
`

const Pagination: React.FC = () => {
  const dispatch = useDispatch()
  const { limit, offset } = useSelector((state) => state.view)
  const { total } = useSelector((state) => state.expenses)
  const [prevActive, setPrevActive] = useState(offset > 0)
  const [nextActive, setNextActive] = useState(offset + limit < total)

  const prevOffset = offset

  const loadPrev = () => {
    if (offset > 0) {
      dispatch(changeOffset(prevOffset - limit))
      dispatch(fetchExpenses(limit, prevOffset - limit))
      setNextActive(true)
    } else {
      setPrevActive(false)
    }
  }

  const loadNext = () => {
    if (offset + limit < total) {
      dispatch(changeOffset(limit + offset))
      dispatch(fetchExpenses(limit, limit + offset))
      setPrevActive(true)
    } else {
      setNextActive(false)
    }
  }

  const t = useTranslation()
  return (
    <PaginationButtonWrapper>
      <PaginationButton disabled={!prevActive} onClick={loadPrev}>
        {t('common:previous')}
      </PaginationButton>
      <PaginationButton disabled={!nextActive} onClick={loadNext}>
        {t('common:next')}
      </PaginationButton>
    </PaginationButtonWrapper>
  )
}

export default Pagination

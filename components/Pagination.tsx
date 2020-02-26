import { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { useTranslation } from '../lib/translate'
import useSelector from '../lib/useSelector'
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
`
const Warning = styled.div`
  @media only screen and (min-width: ${(props) => props.theme.minWidthSmall}px) and (max-width: ${(
      props
    ) => props.theme.maxWidthSmall}px) {
    font-size: 0.8em;
  }
  @media only screen and (min-width: ${(props) =>
      props.theme.minWidthMedium}px) and (max-width: ${(props) => props.theme.maxWidthMedium}px) {
    font-size: 0.9em;
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
  const [prevActive, setPrevActive] = useState(false)
  const [nextActive, setNextActive] = useState(true)

  const prevOffset = offset

  const loadPrev = () => {
    if (offset > 0) {
      dispatch(changeOffset(prevOffset - limit))
      fetchExpenses(limit, prevOffset - limit)(dispatch)
      setNextActive(true)
    } else {
      setPrevActive(false)
    }
  }

  const loadNext = () => {
    if (offset + limit < total) {
      dispatch(changeOffset(limit + offset))
      fetchExpenses(limit, limit + offset)(dispatch)
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
      {!nextActive ? <Warning>{t('common:noItems')}</Warning> : ''}
      <PaginationButton disabled={!nextActive} onClick={loadNext}>
        {t('common:next')}
      </PaginationButton>
    </PaginationButtonWrapper>
  )
}

export default Pagination

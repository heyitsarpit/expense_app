import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { useTranslation } from '../lib/translate'
import useSelector from '../lib/useSelector'
import { changeOffset, fetchExpenses } from '../redux-store'

const Loader: React.FC = () => <div>Loader</div>
const Finished: React.FC = () => <div>No More Item Left.</div>

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
  :focus {
    outline: none;
  }
`

const PaginationButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const Pagination: React.FC = () => {
  const dispatch = useDispatch()
  const { limit, offset } = useSelector((state) => state.view)
  const { total } = useSelector((state) => state.expenses)
  const [loaded, setLoaded] = useState(false)

  const prevOffset = offset

  const loadNext = () => {
    if (offset < total) {
      dispatch(changeOffset(limit + offset))
      fetchExpenses(limit, limit + offset)(dispatch)
    }
  }

  const loadPrev = () => {
    if (offset > 0) {
      dispatch(changeOffset(prevOffset - limit))
      fetchExpenses(limit, prevOffset - limit)(dispatch)
    }
  }

  const t = useTranslation()
  return (
    <PaginationButtonWrapper>
      <PaginationButton onClick={loadPrev}>{t('common:previous')}</PaginationButton>
      <PaginationButton onClick={loadNext}>{t('common:next')}</PaginationButton>
    </PaginationButtonWrapper>
  )
}

export default Pagination

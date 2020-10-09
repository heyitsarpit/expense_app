import { useRouter } from 'next/router'
import styled from 'styled-components'

import Expense from '../../components/Expense'
import { useTranslation } from '../../lib/useTranslation'

const Wrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`

const GoBack = styled.button`
  background: transparent;
  border: none;
  border-radius: 5px;
  padding: 0.5em;
  margin: 0.5em;
  color: ${(props) => props.theme.textPrimary};
  text-transform: uppercase;
`

const SingleExpense: React.FC = () => {
  const router = useRouter()
  const { query } = router

  const t = useTranslation()
  return (
    <Wrapper>
      <GoBack onClick={() => router.back()}> &#129064; {t('common:goBackButton')}</GoBack>
      <Expense id={query.id as string} />
    </Wrapper>
  )
}

export default SingleExpense

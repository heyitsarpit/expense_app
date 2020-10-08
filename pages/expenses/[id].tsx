import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import Expense from '../../components/Expense'

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
  border: 1px solid ${(props) => props.theme.textPrimary};
  border-radius: 5px;
  padding: 0.5em;
  margin: 0.5em;
  color: ${(props) => props.theme.textPrimary};
  text-transform: uppercase;
`

const SingleExpense: React.FC = () => {
  const router = useRouter()
  const { query } = router

  return (
    <Wrapper>
      <GoBack onClick={() => router.back()}> &larr; Go Back</GoBack>
      <Expense id={query.id as string} />
    </Wrapper>
  )
}

export default SingleExpense

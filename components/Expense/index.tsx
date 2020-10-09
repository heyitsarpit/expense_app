import Head from 'next/head'

import IntlCurrency from '../../lib/IntlCurrency'
import { resolveDate } from '../../lib/resolveDate'
import { receiptURL } from '../../lib/resolveURL'
import useSelector from '../../lib/useSelector'
import ExpenseEdit from '../ExpenseEdit'
import { useExpenseById } from './queries'
import { Currency, DataField, Date, Label, Value, Wrapper } from './styles'

const Expense: React.FC<{ id: string }> = ({ id }) => {
  const { isLoading, data, error } = useExpenseById(id)
  const language = useSelector((state) => state.view.language)

  if (isLoading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Error Occurred</div>
  }

  // data.data is defined beyond this line
  const { date, merchant, amount, user, comment, receipts } = data?.data || {}
  const { currency, value } = amount || {}
  const { first, last, email } = user || {}

  const lastReceiptSrc =
    (receipts || [])?.length > 0 ? receiptURL(receipts?.[receipts?.length - 1]?.url as string) : ''
  // const receiptSrc = visibleReceipt ? visibleReceipt : lastReceiptSrc

  return (
    <>
      <Head>
        <title>
          Expense | {first} {last}
        </title>
      </Head>
      <Wrapper>
        <Currency>{IntlCurrency(currency as string, value as string, language)}</Currency>
        <Date>{resolveDate(date as string, language)}</Date>
        <DataField>
          <Label>Name</Label>
          <Value>
            {first} {last}
          </Value>
        </DataField>

        <DataField>
          <Label>Merchant</Label>
          <Value>{merchant}</Value>
        </DataField>

        <DataField>
          <Label>Email</Label>
          <Value>{email}</Value>
        </DataField>

        <ExpenseEdit id={id} receiptSrc={lastReceiptSrc} storedComment={comment as string} />
      </Wrapper>
    </>
  )
}

export default Expense

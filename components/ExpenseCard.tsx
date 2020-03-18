import { useState } from 'react'

import getCurrencySymbol from '../lib/getCurrencySymbol'
import { resolveDate } from '../lib/resolveDate'
import { receiptURL } from '../lib/resolveURL'
import useSelector from '../lib/useSelector'
import { Expense } from '../redux-store'
import ExpenseEdit from './ExpenseEdit'
import { CardItem } from './styles/CardItem'

const ExpenseCard: React.FC<Expense> = ({
  id,
  date,
  merchant,
  comment,
  visibleReceipt,
  receipts,
  amount: { currency, value },
  user: { first, last, email }
}) => {
  const [editing, toggleEditing] = useState(false)
  const language = useSelector((state) => state.view.language)

  const lastReceiptSrc = receipts.length > 0 ? receiptURL(receipts[receipts.length - 1].url) : ''
  const receiptSrc = visibleReceipt ? visibleReceipt : lastReceiptSrc

  const resolvedDate = resolveDate(date, language)

  return (
    <CardItem>
      <div className="grid-container" onClick={() => toggleEditing(!editing)}>
        <div className="Date">{resolvedDate}</div>
        <div className="Icon">{first[0]}</div>

        <div className="Name">
          {first} {last}
        </div>
        <div className="Email">
          <a href={`mailto:${email}`} rel="noopener noreferrer" target="_blank">
            {email}
          </a>
        </div>
        <div className="Value">
          {getCurrencySymbol(currency)}
          {value}
        </div>
        <div className="Merchant">{merchant}</div>
      </div>
      <div className="EditBox">
        {editing && (
          <ExpenseEdit
            receiptSrc={receiptSrc}
            id={id}
            toggleEditing={toggleEditing}
            storedComment={comment}
          />
        )}
      </div>
    </CardItem>
  )
}

export default ExpenseCard

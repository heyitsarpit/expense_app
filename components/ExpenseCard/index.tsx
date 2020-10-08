import Link from 'next/link'
import { useState } from 'react'

import IntlCurrency from '../../lib/IntlCurrency'
import { resolveDate } from '../../lib/resolveDate'
import { receiptURL } from '../../lib/resolveURL'
import useSelector from '../../lib/useSelector'
import { Expense } from '../../redux-store'
import { CardItem } from './styles'

const ExpenseCard: React.FC<Expense> = ({
  id,
  date,
  merchant,
  amount: { currency, value },
  user: { first, last, email }
}) => {
  const language = useSelector((state) => state.view.language)
  const resolvedDate = resolveDate(date, language)

  return (
    <Link href={`/expenses/${id}`} passHref>
      <CardItem>
        <div className="grid-container">
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
            {IntlCurrency(currency, value, language)}
            {/* {value} */}
          </div>
          <div className="Merchant">{merchant}</div>
        </div>
      </CardItem>
    </Link>
  )
}

export default ExpenseCard

{
  /* <div className="EditBox">
{editing && (
  <ExpenseEdit
    receiptSrc={receiptSrc}
    id={id}
    toggleEditing={toggleEditing}
    storedComment={comment}
  />
)}
</div> */
}

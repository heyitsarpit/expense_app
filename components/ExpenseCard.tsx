import { useState } from 'react'

import getCurrencySymbol from '../lib/getCurrencySymbol'
import { resolveDate } from '../lib/resolveDate'
import useSelector from '../lib/useSelector'
import ExpenseEdit from './ExpenseEdit'
import { CardItem } from './styles/CardItem'
import { Expense } from './types'

const ExpenseCard: React.FC<Expense> = ({
  id,
  date,
  merchant,
  comment,
  amount: { currency, value },
  user: { first, last, email }
}) => {
  const [editing, toggleEditing] = useState(false)
  const language = useSelector((state) => state.view.language)

  const toggleView = () => toggleEditing(!editing)

  const resolvedDate = resolveDate(date, language)

  return (
    <CardItem>
      <div className="grid-container" onClick={toggleView}>
        <div className="Date">{resolvedDate}</div>
        {/* <img className="Icon" src={iconPath}></img> */}
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
        {editing && <ExpenseEdit id={id} toggleEditing={toggleEditing} storedComment={comment} />}
      </div>
    </CardItem>
  )
}

export default ExpenseCard

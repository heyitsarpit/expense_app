import { useState } from 'react'
import styled from 'styled-components'

import getCurrencySymbol from '../lib/getCurrencySymbol'
import resolveDate from '../lib/resolveDate'
import useSelector from '../lib/useSelector'
import ExpenseEdit from './ExpenseEdit'
import { CardItem } from './styles/CardItem'
import { Expense } from './types'

const iconPath = '/images/person.svg'

const ExpenseCard: React.FC<Expense> = ({
  id,
  date,
  merchant,
  comment,
  amount: { currency, value },
  user: { first, last, email }
}) => {
  const [isActive, toggleActive] = useState(false)
  const language = useSelector((state) => state.view.language)

  const toggleView = () => toggleActive(!isActive)

  const resolvedDate = resolveDate(date, language)

  return (
      <CardItem>
        <div className="grid-container" onClick={toggleView}>
          <div className="Date">{resolvedDate}</div>
          <img className="Icon" src={iconPath}></img>
          <div className="Name">
            {first} {last}
          </div>
          <a href={`mailto:${email}`} className="Email" rel="noopener noreferrer" target="_blank">
            {email}
          </a>
          <div className="Value">
            {getCurrencySymbol(currency)}
            {value}
          </div>
          <div className="Merchant">{merchant}</div>
        </div>
        <div className="EditBox">
          {isActive && <ExpenseEdit id={id} storedComment={comment} />}
        </div>
      </CardItem>
  )
}

export default ExpenseCard

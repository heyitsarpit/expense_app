import { useState } from 'react'
import styled from 'styled-components'

import getCurrencySymbol from '../lib/getCurrencySymbol'
import ExpenseEdit from './ExpenseEdit'
import { CardItem } from './styles/CardItem'
import { Expense } from './types'

const iconPath = '/images/person.svg'

const ExpenseCard: React.FC<Expense> = ({
  id,
  date,
  merchant,
  amount: { currency, value },
  user: { first, last, email }
}) => {
  const [isActive, toggleActive] = useState(false)

  const toggleView = () => toggleActive(!isActive)

  return (
    <>
      <CardItem className="grid-container" onClick={toggleView}>
        <div className="Date">{date}</div>
        <img className="Icon" src={iconPath}></img>
        <div className="Name">
          {first} {last}
        </div>
        <div className="Email">{email}</div>
        <div className="Value">
          {getCurrencySymbol(currency)}
          {value}
        </div>
        <div className="Merchant">{merchant}</div>
      </CardItem>
      <div className="EditBox">{isActive && <ExpenseEdit id={id} />}</div>
    </>
  )
}

export default ExpenseCard

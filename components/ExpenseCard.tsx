import { useState } from 'react'
import styled from 'styled-components'

import getCurrencySymbol from '../lib/getCurrencySymbol'
import ExpenseEdit from './ExpenseEdit'
import { Expense } from './types'

const Item = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas: 'Icon Name Value .' 'Icon Email Merchant .' '. . . .';

  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  :hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  .Icon {
    grid-area: Icon;
  }
  .Name {
    grid-area: Name;
  }
  .Email {
    grid-area: Email;
  }
  .Value {
    grid-area: Value;
  }
  .Merchant {
    grid-area: Merchant;
  }
`

const ExpenseCard: React.FC<Expense> = ({
  id,
  amount: { currency, value },
  user: { first, last, email },
  merchant
}) => {
  const [isActive, toggleActive] = useState(false)

  const toggleView = () => {
    toggleActive(!isActive)
  }

  return (
    <>
      <Item className="grid-container" onClick={toggleView}>
        <div className="Icon"></div>
        <div className="Name">
          {first} {last}
        </div>
        <div className="Email">{email}</div>
        <div className="Value">
          {getCurrencySymbol(currency)}
          {value}
        </div>
        <div className="Merchant">{merchant}</div>
      </Item>
      {isActive && <ExpenseEdit id={id} />}
    </>
  )
}

export default ExpenseCard

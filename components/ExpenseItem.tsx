import styled from 'styled-components'

import getCurrencySymbol from '../lib/currencySymbol'
import { Expense } from './types'

const Item = styled.div`
  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas: 'Icon Name Value .' 'Icon Email Merchant .' '. . . .';
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

const ExpenseItem: React.FC<Expense> = ({
  amount: { currency, value },
  user: { first, last, email },
  merchant
}) => {
  return (
    <Item className="grid-container">
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
  )
}

export default ExpenseItem

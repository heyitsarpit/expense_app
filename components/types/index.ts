export interface Expense {
  id: string
  amount: {
    value: string
    currency: string
  }
  date: string
  merchant: string
  receipt: string
  comment: string
  category: string
  user: {
    first: string
    last: string
    email: string
  }
}

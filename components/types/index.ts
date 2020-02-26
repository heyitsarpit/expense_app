//The below comment block is to enable better preview in VSCode 
/**
 * ```js
 * id: string
 * amount: {
 *   value: string
 *   currency: string
 * }
 * date: string
 * merchant: string
 * receipt: string
 * comment: string
 * category: string
 * user: {
 *   first: string
 *   last: string
 *   email: string
 * }
 * ```
 */
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

interface Receipt {
  url: string
}

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
 * visibleReceipt: string
 * receipts: Receipt[]
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
  readonly id: string
  readonly amount: {
    readonly value: string
    readonly currency: string
  }
  readonly date: string
  readonly merchant: string
  readonly visibleReceipt: string
  readonly receipts: Receipt[]
  readonly comment: string
  readonly category: string
  readonly user: {
    readonly first: string
    readonly last: string
    readonly email: string
  }
}

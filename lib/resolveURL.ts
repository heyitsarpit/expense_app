/*
 * Routes
 * /expenses?limit=25&offset=25
 * /expenses/:id
 * /expenses/:id/receipts
 */

const baseURL =
  process.env.NODE_ENV === 'development' ? process.env.API_URL_DEV : process.env.API_URL_PROD

export const getURL = (limit = 10, offset = 0) =>
  `${baseURL}/expenses?limit=${limit}&offset=${offset}`

export const postURL = (id: string, receipts?: boolean) =>
  receipts ? `${baseURL}/expenses/${id}/receipts` : `${baseURL}/expenses/${id}`

export const receiptURL = (slug: string) => baseURL + slug

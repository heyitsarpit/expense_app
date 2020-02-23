/**
 * Routes
 * /expenses?limit=25&offset=25
 * /expenses/:id
 * /expenses/:id/receipts
 */
const getURL = (requestType: string) => {
  const baseURL = process.env.API_URL
  switch (requestType) {
    case 'GET':
      return (limit = 10, offset = 0) => `${baseURL}/expenses?limit=${limit}&offset=${offset}`
    case 'POST':
      return (id: string, receipts?: boolean) =>
        receipts ? `${baseURL}/expenses/${id}/receipts` : `${baseURL}/expenses/${id}`
  }
}

export default getURL

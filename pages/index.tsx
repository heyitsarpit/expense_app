import axios from 'axios'
import { GetStaticProps } from 'next'
import { createContext } from 'react'

import AppWrapper from '../components/AppWrapper'
import Page from '../components/Page'
import { Expense } from '../components/types'
import { getURL } from '../lib/resolveURL'

interface HomeProps {
  expenses: Expense[]
}

export const StaticContext = createContext<Expense[]>([])

const Home: React.FC<HomeProps> = ({ expenses }) => {
  return (
    <Page>
      <StaticContext.Provider value={expenses}>
        <AppWrapper />
      </StaticContext.Provider>
    </Page>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async (ctx) => {
  const URL = getURL(20, 0)

  const response = await axios.get(URL).catch((error) => console.log(error.message))
  const { expenses } = response.data as any

  return {
    props: {
      expenses
    }
  }
}

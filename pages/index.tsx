import axios from 'axios'
import { GetStaticProps } from 'next'
import { createContext } from 'react'

import AppWrapper from '../components/AppWrapper'
import { getURL } from '../lib/resolveURL'
import { Expense } from '../redux-store'

interface HomeProps {
  expenses: Expense[]
}

export const StaticPropsCtx = createContext<Expense[]>([])
StaticPropsCtx.displayName = 'StaticPropsCtx'

const Home: React.FC<HomeProps> = ({ expenses }) => {
  return (
    <StaticPropsCtx.Provider value={expenses}>
      <AppWrapper />
    </StaticPropsCtx.Provider>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async (ctx) => {
  const URL = getURL(20, 0)

  const response = await axios.get(URL).catch((error) => console.log(error.message))
  const { expenses } = response.data

  return {
    props: {
      expenses
    }
  }
}

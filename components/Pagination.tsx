import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import useSelector from '../lib/useSelector'
import { changeOffset, fetchExpenses } from '../redux-store'

const Loader: React.FC = () => <div>Loader</div>
const Finished: React.FC = () => <div>No More Item Left.</div>

const Pagination: React.FC = () => {
  // const dispatch = useDispatch()
  // const { limit, offset } = useSelector((state) => state.view)
  // const { total } = useSelector((state) => state.expenses)
  // const [loading, setLoading] = useState(false)

  // if (loading && offset < total) {
  //   dispatch(changeOffset(limit + offset))
  //   console.log('object')
  // }

  // useEffect(() => {
  //   window.addEventListener('scroll', () => {
  //     if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
  //       setLoading(true)
  //     }
  //   })
  // }, [])

  return <Loader />
}

export default Pagination

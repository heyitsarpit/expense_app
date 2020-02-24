import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import useSelector from '../lib/useSelector'
import { changeOffset, fetchExpenses } from '../redux-store'

const Loader: React.FC = () => <div>Loader</div>
const Finished: React.FC = () => <div>No More Item Left.</div>

interface PaginationProps {
  dispatch: ReturnType<typeof useDispatch>
  total: number
}

const Pagination: React.FC<PaginationProps> = ({ dispatch, total }) => {
  const { limit, offset } = useSelector((state) => state.view)

  if (process.browser) {
    useEffect(() => {
      window.addEventListener('scroll', () => {
        // Hitting the bottom of the page.
        if (offset < total && window.innerHeight + window.scrollY >= document.body.scrollHeight) {
          dispatch(changeOffset(limit + offset))
          console.log("object");
          // fetchExpenses(limit, offset)(dispatch)
        }
      })
    }, [offset])
  }

  return <Loader />
}

export default Pagination

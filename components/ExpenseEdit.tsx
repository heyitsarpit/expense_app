import { ChangeEvent, FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { postComment } from '../redux-store'

interface EditProps {
  id: string
}

const ExpenseEdit: React.FC<EditProps> = ({ id }) => {
  const [comment, setComment] = useState('')
  const dispatch = useDispatch()

  const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const text = comment.trim()
    postComment(id, text)(dispatch)
  }

  const onTextChange = ({ currentTarget: { value } }: ChangeEvent<HTMLInputElement>) =>
    setComment(value)

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          value={comment}
          onChange={onTextChange}
          placeholder="Add your comment here ...."
          autoComplete="off"></input>
        <button type="submit">Save</button>
      </form>
    </>
  )
}

export default ExpenseEdit

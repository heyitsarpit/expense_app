import { ChangeEvent, FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { postComment, postReceipt } from '../redux-store'
import ImageField from './ImageField'
import ImageUpload from './ImageUpload'

interface EditProps {
  id: string
}

const ExpenseEdit: React.FC<EditProps> = ({ id }) => {
  const [comment, setComment] = useState('')
  const [image, changeImage] = useState('')

  const dispatch = useDispatch()
  const addImage = (image: string) => changeImage(image)
  const deleteImage = () => changeImage('')

  const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const text = comment.trim()
    if (text) {
      postComment(id, text)(dispatch)
    }
    if (image) {
      postReceipt(id, image)(dispatch)
    }
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
        <ImageField image={image} addImage={addImage} deleteImage={deleteImage} />
        <button type="submit">Save</button>
      </form>
    </>
  )
}

export default ExpenseEdit

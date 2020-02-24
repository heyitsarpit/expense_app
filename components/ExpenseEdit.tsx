import { ChangeEvent, FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import useSelector from '../lib/useSelector'
import { postComment, postReceipt } from '../redux-store'
import ImageField from './ImageField'
import ImageUpload from './ImageUpload'

interface EditProps {
  id: string
  storedComment: string
}

const CommentInput = styled.input`
  background: transparent;
  border: none;
  color: ${(props) => props.theme.textPrimary};
  border-bottom: solid 1px ${(props) => props.theme.colorUnfocused};
  ::placeholder {
    color: ${(props) => props.theme.textSecondary};
  }
  :focus {
    outline: none;
    border-color: ${(props) => props.theme.textPrimary};
  }
`

const ExpenseEdit: React.FC<EditProps> = ({ id, storedComment }) => {
  const [comment, setComment] = useState(storedComment)
  const [image, changeImage] = useState('')

  const dispatch = useDispatch()
  const addImage = (image: string) => changeImage(image)
  const deleteImage = () => changeImage('')

  const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    comment && postComment(id, comment)(dispatch)
    image && postReceipt(id, image)(dispatch)
  }

  const onTextChange = ({ currentTarget: { value } }: ChangeEvent<HTMLInputElement>) =>
    setComment(value.trim())

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <CommentInput
          className="Comment"
          type="text"
          value={comment}
          onChange={onTextChange}
          placeholder="Add your comment here ...."
          autoComplete="off"
        />
        <ImageField
          className="Image"
          image={image}
          addImage={addImage}
          deleteImage={deleteImage}
        />
        <button className="Save" type="submit">
          Save
        </button>
      </form>
    </>
  )
}

export default ExpenseEdit

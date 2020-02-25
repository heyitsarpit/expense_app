import { ChangeEvent, FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { useTranslation } from '../lib/translate'
import useSelector from '../lib/useSelector'
import { postComment, postReceipt } from '../redux-store'
import ImageField from './ImageField'
import ImageUpload from './ImageUpload'

interface EditProps {
  id: string
  storedComment: string
}

const CommentInput = styled.textarea`
  background: transparent;
  border: none;
  resize: none;
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
    if (comment) {
      postComment(id, comment)(dispatch)
    }
    if (image) {
      postReceipt(id, image)(dispatch)
    }
  }

  const onTextChange = ({ currentTarget: { value } }: ChangeEvent<HTMLTextAreaElement>) =>
    setComment(value.trim())

  const t = useTranslation()
  return (
    <>
      <form onSubmit={onFormSubmit}>
        <CommentInput
          className="Comment"
          value={comment}
          onChange={onTextChange}
          placeholder={t('common:commentPlaceHolder')}
          autoComplete="off"
        />
        <ImageField
          className="Image"
          image={image}
          addImage={addImage}
          deleteImage={deleteImage}
        />

        <button className="Save" type="submit">
          {t('common:save')}
        </button>
      </form>
    </>
  )
}

export default ExpenseEdit

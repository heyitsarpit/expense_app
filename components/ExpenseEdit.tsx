import { ChangeEvent, FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { useTranslation } from '../lib/translate'
import { postComment, postReceipt } from '../redux-store'
import { ImageFieldContext } from './ImageFieldContext'
import ImagePreview from './ImagePreview'
import ImageUpload from './ImageUpload'

interface EditProps {
  id: string
  storedComment: string
  toggleEditing: (bool: boolean) => void
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

const ExpenseEdit: React.FC<EditProps> = ({ id, storedComment, toggleEditing }) => {
  const [comment, setComment] = useState(storedComment)
  const [image, changeImage] = useState('')
  const [imageVisible, setImageVisible] = useState(false)

  const dispatch = useDispatch()
  const addImage = (image: string) => changeImage(image)
  const deleteImage = () => changeImage('')

  const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setImageVisible(false)
    toggleEditing(false)
    if (comment) {
      postComment(id, comment)(dispatch)
    }
    if (image) {
      postReceipt(id, image)(dispatch)
    }
  }

  const onTextChange = ({ currentTarget: { value } }: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(value)
    setImageVisible(true)
    if (!value) {
      setImageVisible(false)
    }
  }

  const t = useTranslation()
  return (
    <form onSubmit={onFormSubmit}>
      <CommentInput
        className="Comment"
        value={comment}
        onChange={onTextChange}
        placeholder={t('common:commentPlaceHolder')}
        autoComplete="off"
      />
      <ImageFieldContext.Provider
        value={{
          image: image,
          addImage: addImage,
          deleteImage: deleteImage,
          setImageVisible: setImageVisible
        }}>
        <div className="Image">{image ? <ImagePreview /> : <ImageUpload />}</div>
      </ImageFieldContext.Provider>

      <button className="Save" type="submit" disabled={!imageVisible}>
        {t('common:save')}
      </button>
    </form>
  )
}

export default ExpenseEdit

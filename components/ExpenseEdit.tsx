import { ChangeEvent, FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { useTranslation } from '../lib/translate'
import { postComment, postReceipt } from '../redux-store'
import ImageField from './ImageField'

interface EditProps {
  id: string
  receiptSrc: string
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

const ExpenseEdit: React.FC<EditProps> = ({ id, receiptSrc, storedComment, toggleEditing }) => {
  const [comment, setComment] = useState(storedComment)
  const [image, changeImage] = useState(receiptSrc)
  const [active, setActive] = useState(false)

  const dispatch = useDispatch()
  const addImage = (image: string) => changeImage(image)
  const updateImage = () => changeImage('')

  const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setActive(false)
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
    setActive(true)
    if (!value) {
      setActive(false)
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
      <ImageField
        className="Image"
        image={image}
        addImage={addImage}
        updateImage={updateImage}
        setActive={setActive}
      />

      <button className="Save" type="submit" disabled={!active}>
        {t('common:save')}
      </button>
    </form>
  )
}

export default ExpenseEdit

import { ChangeEvent, FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { useTranslation } from '../lib/useTranslation'
import { postComment, postReceipt } from '../redux-store'
import { DataField, Label } from './Expense/styles'
import ImageField from './ImageField'

interface EditProps {
  id: string
  receiptSrc: string
  storedComment: string
}

const CommentInput = styled.textarea`
  background: transparent;
  border: none;
  resize: none;
  width: 100%;
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

const SaveButton = styled.button`
  width: 100%;
  color: ${(props) => props.theme.textPrimary};
  border: solid 1px ${(props) => props.theme.colorUnfocused};
  background: ${(props) => props.theme.bgColor};
  margin-top: 1.5em;
  padding: 0.3em;

  &:disabled {
    opacity: 0.5;
  }
`

const ExpenseEdit: React.FC<EditProps> = ({ id, receiptSrc, storedComment }) => {
  const [comment, setComment] = useState(storedComment)
  const [image, changeImage] = useState(receiptSrc)
  const [active, setActive] = useState(false)

  const dispatch = useDispatch()
  const addImage = (image: string) => changeImage(image)
  const updateImage = () => changeImage('')

  const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setActive(false)
    if (comment) {
      dispatch(postComment(id, comment))
    }
    if (image) {
      dispatch(postReceipt(id, image))
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
      <DataField>
        <Label>Comment</Label>
        <CommentInput
          className="Comment"
          value={comment}
          onChange={onTextChange}
          placeholder={t('common:commentPlaceHolder')}
          autoComplete="off"
        />
      </DataField>

      <DataField>
        <Label>Receipt</Label>
        <ImageField
          className="Image"
          image={image}
          addImage={addImage}
          updateImage={updateImage}
          setActive={setActive}
        />
      </DataField>

      <SaveButton className="Save" type="submit" disabled={!active}>
        {t('common:save')}
      </SaveButton>
    </form>
  )
}

export default ExpenseEdit

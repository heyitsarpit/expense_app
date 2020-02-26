import { ChangeEvent } from 'react'
import styled from 'styled-components'

import { useTranslation } from '../lib/translate'

interface EditProps {
  addImage: (image: string) => void
  setActive: (bool: boolean) => void
}

const ImageInputWrapper = styled.div`
  label {
    cursor: pointer;

    width: 90%;
    color: ${(props) => props.theme.textPrimary};
    font-family: ${(props) => props.theme.fontSecondary};
    padding: 0.2em;
    margin: 1em;
    align-self: flex-end;
    border: solid 1px ${(props) => props.theme.textPrimary};
    float: right;
    border-radius: 1em;
    text-align: center;
    :focus {
      outline: none;
    }
  }
  input[type='file'] {
    display: none;
  }
`

const ImageUpload: React.FC<EditProps> = ({ addImage, setActive }) => {
  const onFileChange = ({ currentTarget: { files } }: ChangeEvent<HTMLInputElement>) => {
    setActive(true)

    const file = files[0]

    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => addImage(reader.result as string)
    reader.onerror = (error) => console.log(error)
  }

  const t = useTranslation()
  return (
    <ImageInputWrapper>
      <label htmlFor="file-input">
        <span>{t('common:uploadImage')}</span>
      </label>
      <input id="file-input" type="file" onChange={onFileChange} name="receipt" accept="image/*" />
    </ImageInputWrapper>
  )
}

export default ImageUpload

import { ChangeEvent, useContext } from 'react'
import styled from 'styled-components'

import { useTranslation } from '../lib/translate'
import { ImageFieldContext } from './ImageFieldContext'

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
    /* SMARTPHONES PORTRAIT */
    @media only screen and (min-width: ${(props) =>
        props.theme.minWidthSmall}px) and (max-width: ${(props) => props.theme.maxWidthSmall}px) {
      font-size: 0.8em;
    }

    /* SMARTPHONES LANDSCAPE */
    @media only screen and (min-width: ${(props) =>
        props.theme.minWidthMedium}px) and (max-width: ${(props) =>
        props.theme.maxWidthMedium}px) {
      font-size: 0.9em;
    }
  }
  input[type='file'] {
    display: none;
  }
`

const ImageUpload: React.FC = () => {
  const { setImageVisible, addImage } = useContext(ImageFieldContext)

  const onFileChange = ({ currentTarget: { files } }: ChangeEvent<HTMLInputElement>) => {
    setImageVisible(true)

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

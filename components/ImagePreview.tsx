import { useContext } from 'react'
import styled from 'styled-components'

import { useTranslation } from '../lib/translate'
import { ImageFieldContext } from './ImageFieldContext'

const PreviewWrapper = styled.div`
  img {
    width: 7em;
    height: 7em;
    border-radius: 1em;
    overflow: hidden;
    float: right;
  }
`

const DeleteImage = styled.button`
  width: 90%;
  background: transparent;
  color: ${(props) => props.theme.textPrimary};
  font-family: ${(props) => props.theme.fontSecondary};
  padding: 0.2em;
  margin: 1em;
  align-self: flex-end;
  border: solid 1px ${(props) => props.theme.textPrimary};
  float: right;
  border-radius: 1em;

  :focus {
    outline: none;
  }
  /* SMARTPHONES PORTRAIT */
  @media only screen and (min-width: ${(props) => props.theme.minWidthSmall}px) and (max-width: ${(
      props
    ) => props.theme.maxWidthSmall}px) {
    font-size: 0.8em;
  }

  /* SMARTPHONES LANDSCAPE */
  @media only screen and (min-width: ${(props) =>
      props.theme.minWidthMedium}px) and (max-width: ${(props) => props.theme.maxWidthMedium}px) {
    font-size: 0.9em;
  }
`

const ImagePreview: React.FC = () => {
  const { setImageVisible, image, deleteImage } = useContext(ImageFieldContext)

  const onDelete = () => {
    setImageVisible(false)
    deleteImage()
  }

  const t = useTranslation()
  return (
    <PreviewWrapper>
      <img src={image} alt="Preview" />
      {image && (
        <div>
          <DeleteImage onClick={onDelete}>{t('common:deleteImage')}</DeleteImage>
        </div>
      )}
    </PreviewWrapper>
  )
}

export default ImagePreview

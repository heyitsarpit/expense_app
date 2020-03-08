import { useState } from 'react'
import styled from 'styled-components'

import { useTranslation } from '../lib/translate'
import { Modal, UpdateImage } from './styles/ImagePreviewStyles'

interface ImagePreviewProps {
  image: string
  updateImage: () => void
  setActive: (bool: boolean) => void
}

const PreviewWrapper = styled.div`
  img {
    width: 7em;
    height: 7em;
    border-radius: 1em;
    overflow: hidden;
    float: right;
  }
`

const ImagePreview: React.FC<ImagePreviewProps> = ({ image, updateImage, setActive }) => {
  const [fullScreen, setFullScreen] = useState(false)

  const onUpdate = () => {
    setActive(false)
    updateImage()
  }

  const t = useTranslation()
  return (
    <PreviewWrapper>
      <img src={image} onClick={() => setFullScreen(true)} alt="Preview" />
      {image && (
        <div>
          <UpdateImage onClick={onUpdate}>{t('common:updateImage')}</UpdateImage>
        </div>
      )}
      {fullScreen && (
        <Modal>
          <div onClick={() => setFullScreen(false)}>&times;</div>
          <img src={image} />
        </Modal>
      )}
    </PreviewWrapper>
  )
}

export default ImagePreview

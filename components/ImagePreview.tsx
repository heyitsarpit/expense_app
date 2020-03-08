import { useState } from 'react'
import styled from 'styled-components'

import { useTranslation } from '../lib/translate'
import { Modal, PreviewWrapper, UpdateImage } from './styles/ImagePreviewStyles'

interface ImagePreviewProps {
  image: string
  updateImage: () => void
  setActive: (bool: boolean) => void
}

const ImagePreview: React.FC<ImagePreviewProps> = ({ image, updateImage, setActive }) => {
  const [fullScreen, setFullScreen] = useState(false)

  const onUpdate = () => {
    setActive(false)
    updateImage()
  }

  const t = useTranslation()
  return (
    <PreviewWrapper>
      <img
        className="preview-image"
        src={image}
        onClick={() => setFullScreen(true)}
        alt="Preview"
      />
      {image && (
        <div>
          <UpdateImage onClick={onUpdate}>{t('common:updateImage')}</UpdateImage>
        </div>
      )}
      {fullScreen && (
        <Modal>
          <div className="close" onClick={() => setFullScreen(false)}>
            &times;
          </div>
          <img className="modal-image" src={image} />
        </Modal>
      )}
    </PreviewWrapper>
  )
}

export default ImagePreview

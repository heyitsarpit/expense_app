import { useState } from 'react'
import styled from 'styled-components'

import { useTranslation } from '../lib/useTranslation'
import { Modal, PreviewWrapper, UpdateImage } from './styles/ImagePreviewStyles'

interface ImagePreviewProps {
  image: string
  updateImage: () => void
  setActive: (bool: boolean) => void
}

const Button = styled.button`
  background: transparent;
  border: none;
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
      <Button onClick={() => setFullScreen(true)}>
        <img className="preview-image" src={image} alt="Preview" />
      </Button>

      {image && <UpdateImage onClick={onUpdate}>{t('common:updateImage')}</UpdateImage>}
      {fullScreen && (
        <Modal>
          <Button className="close" onClick={() => setFullScreen(false)}>
            &times;
          </Button>
          <img className="modal-image" src={image} alt="receipt preview" />
        </Modal>
      )}
    </PreviewWrapper>
  )
}

export default ImagePreview

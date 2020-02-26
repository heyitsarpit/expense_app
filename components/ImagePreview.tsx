import styled from 'styled-components'

import { useTranslation } from '../lib/translate'

interface ImagePreviewProps {
  image: string
  deleteImage: () => void
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
`

const ImagePreview: React.FC<ImagePreviewProps> = ({ image, deleteImage, setActive }) => {
  const t = useTranslation()
  const onDelete = () => {
    setActive(false)
    deleteImage()
  }
  return (
    <PreviewWrapper>
      <img src={image} alt="Preview" />
      {image && (
        <div>
          {/* <button>View</button> */}
          <DeleteImage onClick={onDelete}>{t('common:deleteImage')}</DeleteImage>
        </div>
      )}
    </PreviewWrapper>
  )
}

export default ImagePreview

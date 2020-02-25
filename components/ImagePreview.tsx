import styled from 'styled-components'

import { useTranslation } from '../lib/translate'

interface ImagePreviewProps {
  image: string
  deleteImage: () => void
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

  :focus {
    outline: none;
  }
`

const ImagePreview: React.FC<ImagePreviewProps> = ({ image, deleteImage }) => {
  const t = useTranslation()
  return (
    <PreviewWrapper>
      <img src={image} alt="Preview" />
      {image && (
        <div>
          {/* <button>View</button> */}
          <DeleteImage onClick={() => deleteImage()}>{t('common:deleteImage')}</DeleteImage>
        </div>
      )}
    </PreviewWrapper>
  )
}

export default ImagePreview

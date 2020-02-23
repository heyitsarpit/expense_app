import styled from 'styled-components'

interface ImagePreviewProps {
  image: string
  deleteImage: () => void
}

const PreviewWrapper = styled.div``

const ImagePreview: React.FC<ImagePreviewProps> = ({ image, deleteImage }) => {
  return (
    <PreviewWrapper>
      <img src={image} alt="Preview" />
      {image && (
        <div>
          {/* <button>View</button> */}
          <button onClick={() => deleteImage()}>Delete</button>
        </div>
      )}
    </PreviewWrapper>
  )
}

export default ImagePreview

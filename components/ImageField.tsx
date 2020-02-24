import ImagePreview from './ImagePreview'
import ImageUpload from './ImageUpload'

interface ImageFieldProps {
  image: string
  addImage: (image: string) => void
  deleteImage: () => void
  className: string
}

const ImageField: React.FC<ImageFieldProps> = ({ image, addImage, deleteImage }) => {
  return image ? (
    <ImagePreview image={image} deleteImage={deleteImage} />
  ) : (
    <ImageUpload addImage={addImage} />
  )
}

export default ImageField

import ImagePreview from './ImagePreview'
import ImageUpload from './ImageUpload'

interface ImageFieldProps {
  image: string
  className: string
  deleteImage: () => void
  addImage: (image: string) => void
  setActive: (bool: boolean) => void
}

const ImageField: React.FC<ImageFieldProps> = ({ image, addImage, deleteImage, setActive }) => {
  return image ? (
    <ImagePreview image={image} deleteImage={deleteImage} />
  ) : (
    <ImageUpload addImage={addImage} setActive={setActive} />
  )
}

export default ImageField

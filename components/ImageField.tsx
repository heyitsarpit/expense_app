import ImagePreview from './ImagePreview'
import ImageUpload from './ImageUpload'

interface ImageFieldProps {
  image: string
  className: string
  updateImage: () => void
  addImage: (image: string) => void
  setActive: (bool: boolean) => void
}

const ImageField: React.FC<ImageFieldProps> = ({ image, addImage, updateImage, setActive }) => {
  return image ? (
    <ImagePreview image={image} setActive={setActive} updateImage={updateImage} />
  ) : (
    <ImageUpload addImage={addImage} setActive={setActive} />
  )
}

export default ImageField

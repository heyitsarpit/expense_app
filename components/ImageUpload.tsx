import { ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

interface EditProps {
  addImage: (value: string) => void
}

const ImageUpload: React.FC<EditProps> = ({ addImage }) => {
  const dispatch = useDispatch()

  const onFileChange = ({ currentTarget: { files } }: ChangeEvent<HTMLInputElement>) => {
    const file = files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => addImage(reader.result as string)
    reader.onerror = (error) => console.log(error)
  }

  return <input type="file" onChange={onFileChange} name="receipt" accept="image/*" />
}

export default ImageUpload

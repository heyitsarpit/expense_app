import { ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

interface EditProps {
  id: string
}

const ImageUpload: React.FC<EditProps> = ({ id }) => {
  const dispatch = useDispatch()

  const onFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    // dispatch(tempImage)
  }

  return <input type="file" onChange={onFileChange} />
}

export default ImageUpload

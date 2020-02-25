import axios from 'axios'
import { ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
interface EditProps {
  addImage: (image: string) => void
}

const uploadIconPath = '/images/upload.svg'
const ImageInputWrapper = styled.div`
  cursor: pointer;
  label {
    width: 90%;
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
  }
  input[type='file'] {
    display: none;
  }
`

const ImageUpload: React.FC<EditProps> = ({ addImage }) => {
  const dispatch = useDispatch()

  const onFileChange = ({ currentTarget: { files } }: ChangeEvent<HTMLInputElement>) => {
    const file = files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => addImage(reader.result as string)
    reader.onerror = (error) => console.log(error)
  }

  return (
    <ImageInputWrapper>
      <label htmlFor="file-input">
        <span>Upload Image</span>
        <span>
          <img src={uploadIconPath} />
        </span>
      </label>
      <input id="file-input" type="file" onChange={onFileChange} name="receipt" accept="image/*" />
    </ImageInputWrapper>
  )
}

export default ImageUpload

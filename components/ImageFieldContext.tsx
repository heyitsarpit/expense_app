import { createContext } from 'react'

interface ImageFieldContextProps {
  image: string
  deleteImage: () => void
  addImage: (image: string) => void
  setImageVisible: (bool: boolean) => void
}

export const ImageFieldContext = createContext<Partial<ImageFieldContextProps>>({})

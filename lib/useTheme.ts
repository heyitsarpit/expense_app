import create from 'zustand'

// import { getLocalStorage, setLocalStorage } from './localStorage'

type Theme = 'light' | 'dark'

type ThemeState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

// const COLOR_THEME = 'COLOR_THEME'

const useTheme = create<ThemeState>((set) => ({
  theme: 'dark',
  // getLocalStorage<Theme>(COLOR_THEME, 'dark'),
  setTheme: (theme) => {
    set({ theme })
    // setLocalStorage(COLOR_THEME, theme)
  }
}))

export default useTheme

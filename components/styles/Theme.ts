export interface Theme {
  padding: string
  fontMain: string
  fontSecondary: string
  bgColor: string
  textPrimary: string
  textSecondary: string
  colorUnfocused: string
  borderColor: string

}

const theme = {
  padding: '10',
  fontMain: 'Fira Mono',
  fontSecondary: 'Playfair Display',
}

export const LightTheme: Theme = {
  ...theme,
  bgColor: '#FFEBCD',
  textPrimary: '#020202',
  borderColor: 'white',
  textSecondary: 'rgb(100,100,100)',
  colorUnfocused: 'rgb(150,150,150)'
}

export const DarkTheme: Theme = {
  ...theme,
  bgColor: '#020202',
  textPrimary: '#FFEBCD',
  borderColor: 'rgb(23.4%, 23.4%, 23.4%)',
  textSecondary: 'rgb(150,150,150)',
  colorUnfocused: 'rgb(100,100,100)'
}

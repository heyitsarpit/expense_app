export interface Theme {
  padding: string
  fontMain: string
  fontSecondary: string
  bgColor: string
  textPrimary: string
  textSecondary: string
  colorUnfocused: string
  borderColor: string
  textPrimaryDimmed: string
}

const theme = {
  padding: '10',
  fontMain: 'Fira Mono',
  fontSecondary: 'Playfair Display'
}

export const LightTheme: Theme = {
  ...theme,
  bgColor: 'rgb(255, 235, 205)',
  textPrimary: 'rgb(45,45, 45)',
  textPrimaryDimmed: 'rgba(2, 2, 2, 0.5)',
  borderColor: 'white',
  textSecondary: 'rgb(100,100,100)',
  colorUnfocused: 'rgb(150,150,150)'
}

export const DarkTheme: Theme = {
  ...theme,
  bgColor: 'rgb(20, 20, 20)',
  textPrimary: 'rgb(243, 224, 195)',
  textPrimaryDimmed: 'rgba(255, 235, 205, 0.8)',
  borderColor: 'rgb(23.4%, 23.4%, 23.4%)',
  textSecondary: 'rgb(150,150,150)',
  colorUnfocused: 'rgb(100,100,100)'
}

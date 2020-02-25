export interface Theme {
  padding: string
  fontMain: string
  fontSecondary: string
  bgColor: string
  textPrimary: string
  textSecondary: string
  colorUnfocused: string
}

const theme = {
  padding: '10',
  fontMain: 'Fira Mono',
  fontSecondary: 'Playfair Display',

}

export const LightTheme: Theme = {
  ...theme,
  bgColor: 'rgb(255,255,255)',
  textPrimary: 'rgb(1,1,1)',
  textSecondary: 'rgb(100,100,100)',
  colorUnfocused: 'rgb(150,150,150)'
}

export const DarkTheme: Theme = {
  ...theme,
  bgColor: 'rgb(1,1,1)',
  textPrimary: 'rgb(255,255,255)',
  textSecondary: 'rgb(150,150,150)',
  colorUnfocused: 'rgb(100,100,100)'
}

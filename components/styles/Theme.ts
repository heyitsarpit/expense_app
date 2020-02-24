const theme = {
  padding: '10',
  fontMain: 'Fira Mono',
  fontSecondary: 'Work Sans'
}

export const LightTheme = {
  ...theme,
  bgColor: 'rgb(255,255,255)',
  textPrimary: 'rgb(10,10,5)',
  textSecondary: 'rgb(100,100,100)',
  colorUnfocused: 'rgb(150,150,150)'
}

export const DarkTheme = {
  ...theme,
  bgColor: 'rgb(20,20,20)',
  textPrimary: 'rgb(255,255,255)',
  textSecondary: 'rgb(150,150,150)',
  colorUnfocused: 'rgb(200,200,200)'
}

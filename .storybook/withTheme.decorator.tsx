import React from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from '../src/shared/stylesheets/theme.styles'
import GlobalStyles from '../src/shared/stylesheets/global.styles'

const THEMES = {
  light: lightTheme
  //  dark: darkTheme,
}

export const withTheme = (Story, context) => {
  //const { theme } = context.globals;

  return (
    <ThemeProvider theme={THEMES['light']}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  )
}

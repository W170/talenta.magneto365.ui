import React from 'react'
import { lightTheme } from '../../shared/stylesheets/theme.styles'
import { ThemeProvider } from 'styled-components'

const THEMES = {
  light: lightTheme
  //  dark: darkTheme,
}

export const withTheme = <T,>(WrappedComponent: React.FC<T>): React.FC<T> => {
  //const { theme } = context.globals;

  const WithTheme: React.FC<T> = (props) => {
    return (
      <ThemeProvider theme={THEMES['light']}>
        <WrappedComponent {...props} />
      </ThemeProvider>
    )
  }

  return WithTheme
}

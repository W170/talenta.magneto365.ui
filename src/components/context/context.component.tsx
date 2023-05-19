import React from 'react'
import { EventDispatcherContextProvider } from './EventDispatcherContext.component'
import { ResponsiveContextProvider } from './ResponsiveContext.component'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from '../../shared/stylesheets/theme.styles'
import { IContextAppProvider } from './context.interface'

export const ContextAppProvider: React.FC<IContextAppProvider> = ({ children }) => {
  return (
    <EventDispatcherContextProvider>
      <ResponsiveContextProvider>{children}</ResponsiveContextProvider>
    </EventDispatcherContextProvider>
  )
}

export const withContextAppProvider = <T,>(Component: React.FC<T>): React.FC<T> => {
  const WithContextAppProvider: React.FC<T> = (props) => (
    <ThemeProvider theme={lightTheme}>
      <ContextAppProvider>
        <Component {...props} />
      </ContextAppProvider>
    </ThemeProvider>
  )
  return WithContextAppProvider
}

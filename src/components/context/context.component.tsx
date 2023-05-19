import React from 'react'
import { EventDispatcherContextProvider } from './EventDispatcherContext.component'
import { ResponsiveContextProvider } from './ResponsiveContext.component'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from '../../shared/stylesheets/theme.styles'
import { IContextAppProvider } from './context.interface'

export const ContextAppProvider: React.FC<IContextAppProvider> = ({ children }) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <EventDispatcherContextProvider>
        <ResponsiveContextProvider>{children}</ResponsiveContextProvider>
      </EventDispatcherContextProvider>
    </ThemeProvider>
  )
}

export const withContextAppProvider = <T,>(Component: React.FC<T>): React.FC<T> => {
  const WithContextAppProvider: React.FC<T> = (props) => (
    <ContextAppProvider>
      <Component {...props} />
    </ContextAppProvider>
  )
  return WithContextAppProvider
}
